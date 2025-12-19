import express from "express";
import multer from "multer";
import FormData from "form-data";
import axios from "axios";
import { ingestDataset } from "../services/ml.service.js";

const router = express.Router();
const upload = multer();

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const formData = new FormData();

    formData.append("file", req.file.buffer, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });

    // 1️⃣ Ingest dataset
    const response = await ingestDataset(formData, formData.getHeaders());
    const { datasetId } = response.data;

    // 2️⃣ Auto-train ML model
    try {
      await axios.post("http://localhost:8000/train", {
        datasetId,
      });
      console.log("✅ Model trained for dataset:", datasetId);
    } catch (err) {
      console.error("⚠️ Training failed:", err.message);
    }

    // 3️⃣ Respond to frontend
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Dataset upload failed" });
  }
});

router.get("/sample", (_, res) => {
  res.json({ datasetId: "sample_superstore" });
});

export default router;
