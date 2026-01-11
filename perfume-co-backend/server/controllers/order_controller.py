# controllers/order_controller.py
from sqlalchemy.orm import Session
from models.order import Order
from schemas.order import OrderSchema
from fastapi import HTTPException

def get_user_orders(user_id: int, db: Session):
    orders = db.query(Order).filter(Order.user_id == user_id).all()
    return [OrderSchema.from_orm(o) for o in orders]
