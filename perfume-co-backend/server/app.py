from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import routers
from routes.auth_routes import router as auth_router
from routes.product_routes import router as product_router
from routes.order_routes import router as order_router
from routes.payment_routes import router as payment_router

# Create FastAPI app
app = FastAPI(title="Perfume Co Backend", version="0.1.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include all routers
app.include_router(auth_router, prefix="/auth", tags=["Auth"])
app.include_router(product_router, prefix="/products", tags=["Products"])
app.include_router(order_router, prefix="/orders", tags=["Orders"])
app.include_router(payment_router, prefix="/payments", tags=["Payments"])

# Root endpoint
@app.get("/")
def root():
    return {"status": "Perfume Co API running"}
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import routers
from routes.auth_routes import router as auth_router
from routes.product_routes import router as product_router
from routes.order_routes import router as order_router
from routes.payment_routes import router as payment_router

# Create FastAPI app
app = FastAPI(title="Perfume Co Backend", version="0.1.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include all routers
app.include_router(auth_router, prefix="/auth", tags=["Auth"])
app.include_router(product_router, prefix="/products", tags=["Products"])
app.include_router(order_router, prefix="/orders", tags=["Orders"])
app.include_router(payment_router, prefix="/payments", tags=["Payments"])

# Root endpoint
@app.get("/")
def root():
    return {"status": "Perfume Co API running"}
