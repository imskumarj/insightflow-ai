from fastapi import APIRouter
from app.services.ml_service import train_sales_model
from app.routes.ingest import DATASETS

router = APIRouter()

@router.post("/train")
def train(payload: dict):
    dataset_id = payload.get("datasetId")
    df = DATASETS.get(dataset_id)

    if df is None:
        return {"error": "Dataset not found"}

    result = train_sales_model(df)
    return result
