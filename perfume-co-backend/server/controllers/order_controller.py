from fastapi import APIRouter
from models.order import Order

router = APIRouter(prefix="/orders", tags=["Orders"])

@router.post("/")
def create_order(user_email: str, total: float):
    return {"message": "Order created", "total": total}
