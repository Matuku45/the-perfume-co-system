from sqlalchemy.orm import Session
from models.product import Product
from schemas.product import ProductSchema

def get_products(db: Session):
    products = db.query(Product).all()
    return [ProductSchema.from_orm(p) for p in products]

def get_product(product_id: int, db: Session):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return ProductSchema.from_orm(product)
