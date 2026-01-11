from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from controllers.product_controller import (
    get_products, get_product, create_product, update_product, delete_product
)
from config.db import SessionLocal
from schemas.product import ProductSchema

router = APIRouter(prefix="/products", tags=["Products"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# CRUD Routes
@router.get("/", response_model=list[ProductSchema])
def list_products(db: Session = Depends(get_db)):
    return get_products(db)

@router.get("/{product_id}", response_model=ProductSchema)
def retrieve_product(product_id: int, db: Session = Depends(get_db)):
    product = get_product(product_id, db)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@router.post("/", response_model=ProductSchema)
def add_product(product: ProductSchema, db: Session = Depends(get_db)):
    return create_product(product.dict(), db)

@router.put("/{product_id}", response_model=ProductSchema)
def edit_product(product_id: int, product: ProductSchema, db: Session = Depends(get_db)):
    updated = update_product(product_id, product.dict(), db)
    if not updated:
        raise HTTPException(status_code=404, detail="Product not found")
    return updated

@router.delete("/{product_id}")
def remove_product(product_id: int, db: Session = Depends(get_db)):
    deleted = delete_product(product_id, db)
    if not deleted:
        raise HTTPException(status_code=404, detail="Product not found")
    return {"message": "Product deleted"}
