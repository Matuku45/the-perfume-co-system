from flask import Blueprint
from controllers.payment_controller import (
    initiate_payment,
    payment_callback,
    payment_status
)
from middleware.auth_middleware import token_required

payment_routes = Blueprint("payment_routes", __name__)

# Start payment
payment_routes.route("/pay", methods=["POST"])(token_required(initiate_payment))

# Ozow callback (no auth)
payment_routes.route("/callback", methods=["POST"])(payment_callback)

# Check payment
payment_routes.route("/status/<string:reference>", methods=["GET"])(token_required(payment_status))
