from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from controllers.product_controller import get_products, get_product
from config.db import SessionLocal
from schemas.product import ProductSchema

router = APIRouter(prefix="/products", tags=["Products"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Public endpoints
router.get("/", response_model=list[ProductSchema])
def list_products(db: Session = Depends(get_db)):
    return get_products(db)

router.get("/{product_id}", response_model=ProductSchema)
def retrieve_product(product_id: int, db: Session = Depends(get_db)):
    return get_product(product_id, db)
