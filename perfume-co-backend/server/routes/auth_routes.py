from flask import Blueprint
from controllers.auth_controller import register, login, profile
from middleware.auth_middleware import token_required

auth_routes = Blueprint("auth_routes", __name__)

# Register user
auth_routes.route("/register", methods=["POST"])(register)

# Login user
auth_routes.route("/login", methods=["POST"])(login)

# Get logged-in user profile
auth_routes.route("/profile", methods=["GET"])(token_required(profile))
