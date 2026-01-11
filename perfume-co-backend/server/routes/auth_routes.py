from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from config.db import SessionLocal
from models.user import User
from utils.hash import hash_password, verify_password
from jose import jwt
from datetime import datetime, timedelta
from pydantic import BaseModel, EmailStr
import os

router = APIRouter(prefix="/auth", tags=["Auth"])

SECRET_KEY = os.getenv("SECRET_KEY", "supersecretkey")
ALGORITHM = os.getenv("ALGORITHM", "HS256")

# --------------------- DATABASE ---------------------
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# --------------------- SCHEMAS ---------------------
class RegisterSchema(BaseModel):
    name: str
    email: EmailStr
    password: str

class LoginSchema(BaseModel):
    email: EmailStr
    password: str

# --------------------- MIDDLEWARE ---------------------
def token_required(token: str = Depends(lambda: None)):
    """
    Simple placeholder middleware for token validation.
    Replace lambda with your actual header token extraction.
    """
    # Implement token validation here if needed
    return token

# --------------------- ROUTES ---------------------
@router.post("/register")
def register_user(data: RegisterSchema, db: Session = Depends(get_db)):
    if db.query(User).filter(User.email == data.email).first():
        raise HTTPException(status_code=400, detail="Email already exists")
    user = User(name=data.name, email=data.email, password=hash_password(data.password))
    db.add(user)
    db.commit()
    return {"message": "User registered successfully"}

@router.post("/login")
def login_user(data: LoginSchema, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == data.email).first()
    if not user or not verify_password(data.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    token = jwt.encode(
        {"sub": user.email, "is_admin": user.is_admin, "exp": datetime.utcnow() + timedelta(hours=1)},
        SECRET_KEY,
        algorithm=ALGORITHM
    )
    return {"access_token": token, "token_type": "bearer"}

@router.get("/profile")
def profile_user(db: Session = Depends(get_db), token: str = Depends(token_required)):
    # Decode JWT
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email = payload.get("sub")
        if email is None:
            raise HTTPException(status_code=401, detail="Invalid token")
        user = db.query(User).filter(User.email == email).first()
        return {"name": user.name, "email": user.email, "is_admin": user.is_admin}
    except Exception as e:
        raise HTTPException(status_code=401, detail="Token validation failed")
