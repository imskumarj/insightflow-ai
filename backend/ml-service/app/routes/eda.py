from fastapi import APIRouter
from app.services.eda_service import generate_eda
from app.routes.ingest import DATASETS
from app.utils.json_sanitizer import sanitize

router = APIRouter()

@router.get("/eda/{dataset_id}")
def eda(dataset_id: str):
    df = DATASETS.get(dataset_id)
    if df is None:
        return {"error": "Dataset not found"}

    eda_result = generate_eda(df)
    return sanitize(eda_result)
