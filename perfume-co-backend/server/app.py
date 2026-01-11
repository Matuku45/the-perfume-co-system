from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

def create_app():
    app = Flask(__name__)

    # Basic configuration
    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "dev_secret_key")
    app.config["ENV"] = os.getenv("FLASK_ENV", "development")

    # Enable CORS
    CORS(app, supports_credentials=True)

    # ===== IMPORT ROUTES =====
    from routes.auth_routes import auth_routes
    from routes.product_routes import product_routes
    from routes.order_routes import order_routes
    from routes.payment_routes import payment_routes

    # ===== REGISTER ROUTES =====
    app.register_blueprint(auth_routes, url_prefix="/api/auth")
    app.register_blueprint(product_routes, url_prefix="/api/products")
    app.register_blueprint(order_routes, url_prefix="/api/orders")
    app.register_blueprint(payment_routes, url_prefix="/api/payments")

    # ===== HEALTH CHECK =====
    @app.route("/api/health", methods=["GET"])
    def health_check():
        return {"status": "OK", "message": "Perfume Co API is running"}

    return app
