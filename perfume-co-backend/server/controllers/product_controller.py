from sqlalchemy.orm import Session
from models.product import Product
from schemas.product import ProductSchema

# CRUD for Products

def get_products(db: Session):
    return db.query(Product).all()

def get_product(product_id: int, db: Session):
    return db.query(Product).filter(Product.id == product_id).first()

def create_product(data: dict, db: Session):
    product = Product(**data)
    db.add(product)
    db.commit()
    db.refresh(product)
    return product

def update_product(product_id: int, data: dict, db: Session):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        return None
    for key, value in data.items():
        setattr(product, key, value)
    db.commit()
    db.refresh(product)
    return product

def delete_product(product_id: int, db: Session):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        return None
    db.delete(product)
    db.commit()
    return product
