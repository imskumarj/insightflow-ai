from fastapi import APIRouter
from app.services.ml_service import predict_sales

router = APIRouter()

@router.post("/predict")
def predict(payload: dict):
    return predict_sales(payload)
