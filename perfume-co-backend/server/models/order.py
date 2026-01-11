from sqlalchemy import Column, Integer, Float, String
from config.db import Base

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    user_email = Column(String)
    total = Column(Float)
    status = Column(String, default="Pending")
