from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from controllers.payment_controller import initiate_payment
from config.db import SessionLocal

# Create FastAPI router
router = APIRouter(
    prefix="/payments",
    tags=["Payments"]
)

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Route to initiate a payment
@router.post("/")
def create_payment(order_id: int, amount: float, db: Session = Depends(get_db)):
    """
    Initiate a payment for a specific order.
    """
    try:
        payment = initiate_payment(order_id, amount, db)
        return {"message": "Payment initiated", "payment": payment}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
