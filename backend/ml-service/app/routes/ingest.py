from fastapi import APIRouter, UploadFile
import pandas as pd
import uuid

router = APIRouter()
DATASETS = {}

@router.post("/ingest")
async def ingest(file: UploadFile):
    df = pd.read_csv(file.file)

    # 🔹 Normalize column names
    df.columns = (
        df.columns
        .str.strip()
        .str.lower()
        .str.replace(" ", "_")
        .str.replace("\ufeff", "")
    )

    # 🔹 Clean numeric columns BEFORE storing
    for col in ["sales", "profit", "discount", "quantity"]:
        if col in df.columns:
            df[col] = (
                df[col]
                .astype(str)
                .str.replace(",", "", regex=False)
                .str.replace("₹", "", regex=False)
                .str.replace("$", "", regex=False)
                .str.strip()
            )
            df[col] = pd.to_numeric(df[col], errors="coerce")

    # 🔹 Parse dates ONCE
    if "order_date" in df.columns:
        df["order_date"] = pd.to_datetime(df["order_date"], errors="coerce")

    dataset_id = str(uuid.uuid4())

    # print(df.dtypes)
    # print("INGEST SALES SUM:", df["sales"].sum())

    # 🔥 STORE ONLY CLEAN DATA
    DATASETS[dataset_id] = df

    return {
        "datasetId": dataset_id,
        "columns": list(df.columns),
        "rows": int(len(df))
    }
