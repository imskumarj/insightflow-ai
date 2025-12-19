import express from "express";
import { getEDA } from "../services/ml.service.js";

const router = express.Router();

router.get("/:datasetId", async (req, res) => {
  try {
    const { data } = await getEDA(req.params.datasetId);

    // 🚀 ML already returns frontend-ready structure
    res.json(data);

  } catch (error) {
    console.error("EDA error:", error.message);
    res.status(503).json({
      error: "EDA service unavailable",
    });
  }
});

export default router;
