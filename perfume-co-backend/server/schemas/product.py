# schemas/product.py
from pydantic import BaseModel

class ProductSchema(BaseModel):
    id: int
    name: str
    description: str | None = None
    price: float
    image: str | None = None

    class Config:
        from_attributes = True  # FastAPI v2 replacement for orm_mode
