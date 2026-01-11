from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from controllers.order_controller import get_user_orders
from config.db import SessionLocal
from schemas.order import OrderSchema

router = APIRouter(prefix="/orders", tags=["Orders"])

# Database dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Get orders for a specific user
@router.get("/user/{user_id}", response_model=list[OrderSchema])
def user_orders(user_id: int, db: Session = Depends(get_db)):
    orders = get_user_orders(user_id, db)
    if not orders:
        raise HTTPException(status_code=404, detail="No orders found for this user")
    return orders
