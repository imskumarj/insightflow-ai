import pandas as pd
import numpy as np

def py(v):
    if pd.isna(v):
        return None
    if hasattr(v, "item"):
        return v.item()
    return v

def generate_eda(df: pd.DataFrame):

    # 🔹 Normalize column names FIRST
    df.columns = (
        df.columns
        .str.strip()
        .str.lower()
        .str.replace(" ", "_")
        .str.replace("\ufeff", "")
    )

    # 🔹 Force numeric conversion FIRST
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

    # 🔹 NOW detect numeric columns (THIS WAS THE BUG)
    numeric_cols = df.select_dtypes(include="number").columns.tolist()

    # print(df[["sales", "profit", "discount"]].head())
    # print(df[["sales", "profit", "discount"]].dtypes)

    # 🔹 SUMMARY
    summary = {
        "rows": py(len(df)),
        "columns": py(len(df.columns)),
        "totalSales": py(df["sales"].sum()) if "sales" in df else 0,
        "totalProfit": py(df["profit"].sum()) if "profit" in df else 0,
        "avgDiscount": py(df["discount"].mean()) if "discount" in df else 0,
    }

    # 🔹 HISTOGRAMS
    histograms = {}
    for col in ["sales", "profit"]:
        if col in df.columns:
            counts, bins = np.histogram(df[col].dropna(), bins=10)
            histograms[col] = {
                "bins": [py(b) for b in bins.tolist()],
                "counts": [py(c) for c in counts.tolist()],
            }

    # 🔹 CATEGORY BAR
    category_chart = []
    if "category" in df and "sales" in df:
        grouped = df.groupby("category")["sales"].sum()
        category_chart = [
            {"category": str(k), "sales": py(v)}
            for k, v in grouped.items()
        ]

    # 🔹 TIME SERIES
    time_series = []
    if "order_date" in df and "sales" in df:
        df["order_date"] = pd.to_datetime(df["order_date"], errors="coerce")
        ts = df.groupby(df["order_date"].dt.to_period("M"))["sales"].sum()
        time_series = [
            {"date": str(idx), "sales": py(val)}
            for idx, val in ts.items()
        ]

    # 🔹 CORRELATION
    heatmap = {}
    if len(numeric_cols) > 1:
        corr = df[numeric_cols].corr().fillna(0).round(2)
        heatmap = {
            "labels": numeric_cols,
            "matrix": [[py(v) for v in row] for row in corr.values.tolist()],
        }

    # 🔹 SCATTER
    scatter = []
    if "discount" in df and "profit" in df:
        sample = df.sample(min(300, len(df)))
        scatter = [
            {"discount": py(r["discount"]), "profit": py(r["profit"])}
            for _, r in sample.iterrows()
        ]

    # 🔹 INSIGHTS
    insights = []

    if summary["avgDiscount"] and summary["avgDiscount"] > 0.3:
        insights.append("High average discounts detected — profit may be impacted.")

    if summary["totalProfit"] and summary["totalProfit"] < 0:
        insights.append("Overall loss detected in dataset.")

    if category_chart:
        top = max(category_chart, key=lambda x: x["sales"])
        insights.append(f"{top['category']} is the highest revenue category.")

    # 🔹 Discount risk
    if "discount" in df and "profit" in df:
        risky = df[(df["discount"] > 0.3) & (df["profit"] < 0)]
        if len(risky) > 0:
            insights.append(
                "High discounts above 30% are frequently associated with losses."
            )

    # 🔹 Quantity-profit signal
    if "quantity" in df and "profit" in df:
        corr = df["quantity"].corr(df["profit"])
        if corr < -0.3:
            insights.append(
                "Higher quantities may be reducing profit margins — review bulk pricing strategy."
            )

    # 🔹 Actionable recommendation
    if summary["avgDiscount"] > 0.25:
        insights.append(
            "Consider tightening discount policies or introducing approval thresholds."
        ) 

    return {
        "summary": summary,
        "histograms": histograms,
        "categoryChart": category_chart,
        "timeSeries": time_series,
        "correlationHeatmap": heatmap,
        "scatter": scatter,
        "insights": insights,
    }
