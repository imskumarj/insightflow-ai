import os
import joblib
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_squared_error

# ========================
# Model Versioning
# ========================
MODEL_VERSION = "v1"

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_DIR = os.path.join(BASE_DIR, "models")
MODEL_FILENAME = f"sales_model_{MODEL_VERSION}.joblib"
MODEL_PATH = os.path.join(MODEL_DIR, MODEL_FILENAME)

os.makedirs(MODEL_DIR, exist_ok=True)

REQUIRED_COLUMNS = {"sales", "discount", "quantity"}


def train_sales_model(df: pd.DataFrame):
    # ========================
    # Error Safety
    # ========================
    missing = REQUIRED_COLUMNS - set(df.columns)
    if missing:
        return {
            "error": f"Missing required columns: {', '.join(missing)}"
        }

    if df.empty:
        return {"error": "Dataset is empty"}

    X = df[["discount", "quantity"]]
    y = df["sales"]

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    model = LinearRegression()
    model.fit(X_train, y_train)

    preds = model.predict(X_test)

    mse = mean_squared_error(y_test, preds)
    rmse = mse ** 0.5

    metrics = {
        "r2": round(r2_score(y_test, preds), 3),
        "rmse": round(float(rmse), 2),
    }

    # ========================
    # Save Versioned Model
    # ========================
    joblib.dump(model, MODEL_PATH)

    coefficients = {
        "discount": round(float(model.coef_[0]), 3),
        "quantity": round(float(model.coef_[1]), 3),
    }

    return {
        "model": "LinearRegression",
        "model_version": MODEL_VERSION,
        "metrics": metrics,
        "features": list(X.columns),
        "feature_importance": coefficients
    }


def predict_sales(payload: dict):
    if not os.path.exists(MODEL_PATH):
        return {
            "error": "Model not trained yet. Upload dataset and train first."
        }

    model = joblib.load(MODEL_PATH)

    discount = payload.get("discount")
    quantity = payload.get("quantity")

    if discount is None or quantity is None:
        return {"error": "discount and quantity are required"}

    sample = [[discount, quantity]]
    prediction = model.predict(sample)[0]

    return {
        "model": "LinearRegression",
        "model_version": MODEL_VERSION,
        "predicted_sales": round(float(prediction), 2),
        "note": "Prediction is reliable only within training data range"
    }
