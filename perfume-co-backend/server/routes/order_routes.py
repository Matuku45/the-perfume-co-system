from flask import Blueprint
from controllers.order_controller import (
    create_order,
    get_user_orders,
    get_order,
    update_order_status
)
from middleware.auth_middleware import token_required
from middleware.admin_middleware import admin_required

order_routes = Blueprint("order_routes", __name__)

# User
order_routes.route("/", methods=["POST"])(token_required(create_order))
order_routes.route("/", methods=["GET"])(token_required(get_user_orders))
order_routes.route("/<int:order_id>", methods=["GET"])(token_required(get_order))

# Admin
order_routes.route("/<int:order_id>/status", methods=["PUT"])(
    token_required(admin_required(update_order_status))
)
