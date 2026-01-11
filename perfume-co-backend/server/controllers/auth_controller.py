from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.db import SessionLocal
from models.user import User
from utils.hash import hash_password, verify_password
from jose import jwt
import os
from datetime import datetime, timedelta

router = APIRouter(prefix="/auth", tags=["Auth"])

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/register")
def register(name: str, email: str, password: str, db: Session = Depends(get_db)):
    user = User(name=name, email=email, password=hash_password(password))
    db.add(user)
    db.commit()
    return {"message": "User registered"}

@router.post("/login")
def login(email: str, password: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == email).first()
    if not user or not verify_password(password, user.password):
        return {"error": "Invalid credentials"}

    token = jwt.encode(
        {"email": user.email, "is_admin": user.is_admin,
         "exp": datetime.utcnow() + timedelta(hours=1)},
        SECRET_KEY, algorithm=ALGORITHM
    )
    return {"access_token": token}
