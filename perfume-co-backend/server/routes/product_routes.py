from flask import Blueprint
from controllers.product_controller import (
    get_products,
    get_product,
    create_product,
    update_product,
    delete_product
)
from middleware.auth_middleware import token_required
from middleware.admin_middleware import admin_required

product_routes = Blueprint("product_routes", __name__)

# Public
product_routes.route("/", methods=["GET"])(get_products)
product_routes.route("/<int:product_id>", methods=["GET"])(get_product)

# Admin only
product_routes.route("/", methods=["POST"])(token_required(admin_required(create_product)))
product_routes.route("/<int:product_id>", methods=["PUT"])(token_required(admin_required(update_product)))
product_routes.route("/<int:product_id>", methods=["DELETE"])(token_required(admin_required(delete_product)))
