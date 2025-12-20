import React from "react";

import { useState } from "react";
import { predictModel } from "../../api/api";

export default function PredictionCard({ datasetId }: any) {
  const [discount, setDiscount] = useState(0.1);
  const [quantity, setQuantity] = useState(1);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<any>(null);

  const runPrediction = async () => {
    setError(null);

    try {
      const res = await predictModel({
        datasetId,
        discount,
        quantity
      });

      if (res.data.error) {
        setError(res.data.error);
        return;
      }

      setResult(res.data.predicted_sales);
      setMeta(res.data);
    } catch {
      setError("Prediction failed. Please try again.");
    }
  };

  return (
    <div className="glass rounded-2xl p-6 glow space-y-4">
      <h4 className="font-semibold gradient-text">Predict Sales</h4>

      <label className="text-sm">Discount: {discount}</label>
      <input
        type="range"
        min="0"
        max="0.5"
        step="0.01"
        value={discount}
        onChange={(e) => setDiscount(+e.target.value)}
      />

      <label className="text-sm">Quantity</label>
      <input
        type="number"
        min={1}
        max={100}
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
        className="input"
      />

      <button onClick={runPrediction} className="primary-btn">
        Predict
      </button>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      {result !== null && (
        <div className="text-sm text-slate-300 space-y-1">
          <p className="text-lg font-semibold text-indigo-400">
            Predicted Sales: ₹{result}
          </p>
          <p>Model: {meta?.model}</p>
          <p>Version: {meta?.model_version}</p>
          <p className="text-xs text-slate-400">{meta?.note}</p>
        </div>
      )}
    </div>
  );
}
