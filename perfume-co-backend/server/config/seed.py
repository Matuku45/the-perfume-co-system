# seed.py
from config.db import Base, engine, SessionLocal
from models.product import Product
from models.order import Order

# 1. Create all tables
Base.metadata.create_all(bind=engine)
print("Tables created successfully!")

# 2. Seed initial data
def seed_products():
    db = SessionLocal()
    try:
        # Check if table already has data
        if db.query(Product).first():
            print("Products already seeded!")
            return

        products = [
            Product(name="Rose Perfume", description="Floral scent", price=49.99, image="rose.jpg"),
            Product(name="Vanilla Perfume", description="Sweet scent", price=39.99, image="vanilla.jpg"),
            Product(name="Ocean Breeze", description="Fresh scent", price=29.99, image="ocean.jpg"),
        ]

        db.add_all(products)
        db.commit()
        print("Products seeded successfully!")
    finally:
        db.close()

def seed_orders():
    db = SessionLocal()
    try:
        if db.query(Order).first():
            print("Orders already seeded!")
            return

        # Get products from DB to calculate total_price
        products = {p.id: p for p in db.query(Product).all()}

        orders = [
            Order(user_id=1, product_id=1, quantity=2, total_price=2 * products[1].price),
            Order(user_id=1, product_id=2, quantity=1, total_price=1 * products[2].price),
            Order(user_id=2, product_id=3, quantity=3, total_price=3 * products[3].price),
        ]

        db.add_all(orders)
        db.commit()
        print("Orders seeded successfully!")
    finally:
        db.close()


if __name__ == "__main__":
    seed_products()
    seed_orders()
    print("Seeding complete!")
