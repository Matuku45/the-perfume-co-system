from pydantic import BaseModel
from datetime import datetime

class OrderSchema(BaseModel):
    id: int
    user_id: int
    product_id: int
    quantity: int
    total_price: float
    created_at: datetime

    class Config:
        from_attributes = True
