# controllers/payment_controller.py
from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from config.db import SessionLocal
from models.payment import Payment
from datetime import datetime

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def initiate_payment(order_id: int, amount: float, db: Session = Depends(get_db)):
    """
    Create a payment record.
    """
    payment = Payment(
        order_id=order_id,
        amount=amount,
        status="pending",
        created_at=datetime.utcnow()
    )
    db.add(payment)
    db.commit()
    db.refresh(payment)
    return payment
