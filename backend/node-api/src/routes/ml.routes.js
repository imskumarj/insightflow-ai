import express from "express";
import { trainModel, predictSales } from "../services/ml.service.js";

const router = express.Router();

router.post("/train/:datasetId", async (req, res) => {
  const { data } = await trainModel(req.params.datasetId);
  res.json(data);
});

router.post("/predict", async (req, res) => {
  const { data } = await predictSales(req.body);
  res.json(data);
});

export default router;
