import React, { useEffect, useState } from "react";
import { predictModel } from "../api/api";

export function usePredict(datasetId: string | null, enabled: boolean) {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!datasetId || !enabled) return;

    const run = async () => {
      try {
        setLoading(true);
        const res = await predictModel(datasetId);
        setResult(res.data);
      } catch (e) {
        console.error("Prediction error:", e);
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [datasetId, enabled]);

  return { result, loading };
}
