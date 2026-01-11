from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class OrderSchema(BaseModel):
    id: int
    user_id: int
    product_ids: List[int]  # list of product IDs in the order
    total_price: float
    status: str
    created_at: datetime

    class Config:
        from_attributes = True  # for SQLAlchemy compatibility
