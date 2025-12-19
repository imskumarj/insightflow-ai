from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score
import pandas as pd
from app.models.registry import MODELS, MODEL_FEATURES

def train_model(df: pd.DataFrame, target: str):
    X = df.drop(columns=[target]).select_dtypes(include="number")
    y = df[target]

    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X, y)

    predictions = model.predict(X)

    metrics = {
        "rmse": round(mean_squared_error(y, predictions, squared=False), 2),
        "r2": round(r2_score(y, predictions), 2)
    }

    feature_importance = dict(
        zip(X.columns, model.feature_importances_.round(3))
    )

    model_id = "model_latest"
    MODELS[model_id] = model
    MODEL_FEATURES[model_id] = list(X.columns)

    return model_id, metrics, feature_importance
