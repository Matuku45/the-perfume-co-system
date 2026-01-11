# controllers/product_controller.py
from flask import request, jsonify
from models.product import Product
from config.db import db  # Assuming you have SQLAlchemy instance called `db`

# Get all products
def get_products():
    products = Product.query.all()
    return jsonify([p.to_dict() for p in products]), 200

# Get a single product
def get_product(product_id):
    product = Product.query.get(product_id)
    if not product:
        return jsonify({"error": "Product not found"}), 404
    return jsonify(product.to_dict()), 200

# Create product (Admin only)
def create_product():
    data = request.get_json()
    product = Product(
        name=data.get("name"),
        description=data.get("description"),
        price=data.get("price"),
        image=data.get("image")
    )
    db.session.add(product)
    db.session.commit()
    return jsonify({"message": "Product created", "product": product.to_dict()}), 201

# Update product (Admin only)
def update_product(product_id):
    product = Product.query.get(product_id)
    if not product:
        return jsonify({"error": "Product not found"}), 404
    data = request.get_json()
    product.name = data.get("name", product.name)
    product.description = data.get("description", product.description)
    product.price = data.get("price", product.price)
    product.image = data.get("image", product.image)
    db.session.commit()
    return jsonify({"message": "Product updated", "product": product.to_dict()}), 200

# Delete product (Admin only)
def delete_product(product_id):
    product = Product.query.get(product_id)
    if not product:
        return jsonify({"error": "Product not found"}), 404
    db.session.delete(product)
    db.session.commit()
    return jsonify({"message": "Product deleted"}), 200
