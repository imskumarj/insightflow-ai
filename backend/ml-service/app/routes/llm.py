from fastapi import APIRouter
from app.services.llm_service import generate_insight

router = APIRouter()

@router.post("/llm/insights")
def llm_insights(payload: dict):
    question = payload.get("question", "")
    answer = generate_insight(question)

    return {"answer": answer}
