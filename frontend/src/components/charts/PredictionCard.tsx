import React from "react";

interface PredictionProps {
  value: number;
  confidence: number;
}

export default function PredictionCard({
  value,
  confidence,
}: PredictionProps) {
  return (
    <div className="glass rounded-2xl p-6 border border-indigo-400/30">
      <h3 className="font-semibold mb-2 gradient-text">
        ML Sales Prediction
      </h3>

      <p className="text-3xl font-bold text-white">
        ₹{value.toLocaleString()}
      </p>

      <p className="text-sm mt-2 text-slate-300">
        Confidence: {(confidence * 100).toFixed(1)}%
      </p>

      <div className="mt-3 h-2 rounded-full bg-slate-700">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
          style={{ width: `${confidence * 100}%` }}
        />
      </div>
    </div>
  );
}
