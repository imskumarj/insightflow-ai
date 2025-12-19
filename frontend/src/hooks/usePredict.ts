import { useEffect, useState } from "react";
import { trainModel, predictModel } from "../api/api";

export function usePredict(datasetId: string | null, enabled: boolean) {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!datasetId) return;
    if (!enabled) return;

    const run = async () => {
      try {
        setLoading(true);

        // 🚨 payload must be object
        await trainModel({ datasetId });

        const res = await predictModel(datasetId);
        setResult(res.data);

      } catch (e) {
        console.error("Prediction pipeline error:", e);
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [datasetId, enabled]);

  return { result, loading };
}
