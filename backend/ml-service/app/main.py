from fastapi import FastAPI
from app.routes import ingest, eda, train, predict, llm

app = FastAPI(title="InsightFlow ML Service")

app.include_router(ingest.router)
app.include_router(eda.router)
app.include_router(train.router)
app.include_router(predict.router)
app.include_router(llm.router)
