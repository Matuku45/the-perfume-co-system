from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from config.db import SessionLocal
from models.product import Product

router = APIRouter(prefix="/products", tags=["Products"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def get_products(db: Session = Depends(get_db)):
    return db.query(Product).all()

@router.post("/")
def add_product(name: str, description: str, price: float, image: str, db: Session = Depends(get_db)):
    product = Product(name=name, description=description, price=price, image=image)
    db.add(product)
    db.commit()
    return {"message": "Product added"}
