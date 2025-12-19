import express from "express";
import { trainModel, predictSales } from "../services/ml.service.js";

const router = express.Router();

router.post("/train", async (req, res, next) => {
  try {
    const response = await trainModel(req.body);
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

router.post("/predict", async (req, res, next) => {
  try {
    const response = await predictSales(req.body);
    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

export default router;
