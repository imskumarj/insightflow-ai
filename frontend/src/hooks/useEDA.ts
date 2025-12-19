import React, { useEffect, useState } from "react";
import { getEDA } from "../api/api";

export function useEDA(
  datasetId: string | null,
  refreshKey: number
) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!datasetId) return;

    setLoading(true);
    getEDA(datasetId)
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }, [datasetId, refreshKey]); // 👈 this is the whole point

  return { data, loading };
}
