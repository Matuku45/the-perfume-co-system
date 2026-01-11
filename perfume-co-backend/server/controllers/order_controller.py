from sqlalchemy.orm import Session
from models.order import Order

# CRUD for Orders

def get_orders(db: Session):
    """Return all orders"""
    return db.query(Order).all()

def get_order(order_id: int, db: Session):
    """Return a single order by ID"""
    return db.query(Order).filter(Order.id == order_id).first()

def get_user_orders(user_id: int, db: Session):
    """Return all orders for a given user"""
    return db.query(Order).filter(Order.user_id == user_id).all()

def create_order(data: dict, db: Session):
    """Create a new order"""
    order = Order(**data)
    db.add(order)
    db.commit()
    db.refresh(order)
    return order

def update_order(order_id: int, data: dict, db: Session):
    """Update an existing order"""
    order = db.query(Order).filter(Order.id == order_id).first()
    if not order:
        return None
    for key, value in data.items():
        setattr(order, key, value)
    db.commit()
    db.refresh(order)
    return order

def delete_order(order_id: int, db: Session):
    """Delete an order"""
    order = db.query(Order).filter(Order.id == order_id).first()
    if not order:
        return None
    db.delete(order)
    db.commit()
    return order
