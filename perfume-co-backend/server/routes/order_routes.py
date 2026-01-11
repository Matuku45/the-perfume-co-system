from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from controllers.order_controller import (
    get_orders, get_order, get_user_orders,
    create_order, update_order, delete_order
)
from config.db import SessionLocal
from schemas.order import OrderSchema

router = APIRouter(prefix="/orders", tags=["Orders"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# CRUD Routes
@router.get("/", response_model=list[OrderSchema])
def list_orders(db: Session = Depends(get_db)):
    return get_orders(db)

@router.get("/{order_id}", response_model=OrderSchema)
def retrieve_order(order_id: int, db: Session = Depends(get_db)):
    order = get_order(order_id, db)
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    return order

@router.get("/user/{user_id}", response_model=list[OrderSchema])
def user_orders(user_id: int, db: Session = Depends(get_db)):
    return get_user_orders(user_id, db)

@router.post("/", response_model=OrderSchema)
def add_order(order: OrderSchema, db: Session = Depends(get_db)):
    return create_order(order.dict(), db)

@router.put("/{order_id}", response_model=OrderSchema)
def edit_order(order_id: int, order: OrderSchema, db: Session = Depends(get_db)):
    updated = update_order(order_id, order.dict(), db)
    if not updated:
        raise HTTPException(status_code=404, detail="Order not found")
    return updated

@router.delete("/{order_id}")
def remove_order(order_id: int, db: Session = Depends(get_db)):
    deleted = delete_order(order_id, db)
    if not deleted:
        raise HTTPException(status_code=404, detail="Order not found")
    return {"message": "Order deleted"}
