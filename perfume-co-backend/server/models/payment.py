from sqlalchemy import Column, Integer, String, Float
from config.db import Base

class Payment(Base):
    __tablename__ = "payments"

    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer)
    amount = Column(Float)
    status = Column(String)
