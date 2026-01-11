from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.auth_routes import router as auth_router
from routes.product_routes import router as product_router
from routes.order_routes import router as order_router
from routes.payment_routes import router as payment_router

app = FastAPI(title="Perfume Co Backend")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(auth_router)
app.include_router(product_router)
app.include_router(order_router)
app.include_router(payment_router)

@app.get("/")
def root():
    return {"status": "Perfume Co API running"}
