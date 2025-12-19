import os
import joblib
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_squared_error

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_DIR = os.path.join(BASE_DIR, "models")
MODEL_PATH = os.path.join(MODEL_DIR, "sales_model.joblib")

os.makedirs(MODEL_DIR, exist_ok=True)
MODEL_PATH = os.path.join(MODEL_DIR, "sales_model.joblib")

os.makedirs(MODEL_DIR, exist_ok=True)


def train_sales_model(df: pd.DataFrame):
    X = df[["discount", "quantity"]]
    y = df["sales"]

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    model = LinearRegression()
    model.fit(X_train, y_train)

    preds = model.predict(X_test)

    metrics = {
        "r2": round(r2_score(y_test, preds), 3),
        "rmse": round(mean_squared_error(y_test, preds, squared=False), 2),
    }

    # 🔥 SAVE MODEL
    joblib.dump(model, MODEL_PATH)

    return {
        "model": "LinearRegression",
        "metrics": metrics,
        "features": list(X.columns),
    }

def predict_sales(payload: dict):
    if not os.path.exists(MODEL_PATH):
        raise FileNotFoundError("Model not trained yet")

    model = joblib.load(MODEL_PATH)

    # Example static prediction (for now)
    sample = [[0.1, 2]]  # discount, quantity
    prediction = model.predict(sample)[0]

    return {
        "model": "LinearRegression",
        "predicted_sales": round(float(prediction), 2),
    }
