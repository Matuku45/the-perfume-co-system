from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from controllers.product_controller import get_products, get_product
from config.db import SessionLocal
from schemas.product import ProductSchema

# Define the router
router = APIRouter(prefix="/products", tags=["Products"])

# Database dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# List all products
@router.get("/", response_model=list[ProductSchema])
def list_products(db: Session = Depends(get_db)):
    products = get_products(db)
    return products

# Get a single product by ID
@router.get("/{product_id}", response_model=ProductSchema)
def retrieve_product(product_id: int, db: Session = Depends(get_db)):
    product = get_product(product_id, db)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product
