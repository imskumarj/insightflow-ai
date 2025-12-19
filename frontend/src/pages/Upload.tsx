import React, { useState } from "react";
import { uploadDataset, trainModel } from "../api/api";

export default function Upload({
  onUpload,
}: {
  onUpload: (datasetId: string) => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", file);

      // 1️⃣ Upload dataset
      const res = await uploadDataset(formData);
      const datasetId = res.data.datasetId;

      localStorage.setItem("datasetId", datasetId);

      // 2️⃣ TRAIN MODEL 🔥 (THIS FIXES EVERYTHING)
      await trainModel({ datasetId });

      // 3️⃣ Notify dashboard
      onUpload(datasetId);
    } catch (err) {
      console.error("Upload or training failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 items-center">
      <input
        className="file-input"
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button className="primary-btn" disabled={loading}>
        {loading ? "Training Model..." : "Upload & Analyze"}
      </button>
    </form>
  );
}
