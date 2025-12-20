import express from "express";
import cors from "cors";

import dataRoutes from "./routes/data.routes.js";
import edaRoutes from "./routes/eda.routes.js";
import modelRoutes from "./routes/model.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import healthRoutes from "./routes/health.routes.js";
import mlRoutes from "./routes/ml.routes.js";

const app = express();

app.use(cors({
  origin: "https://insightflowai.vercel.app",
  credentials: true
}));

app.use(express.json());

app.use("/api/data", dataRoutes);
app.use("/api/eda", edaRoutes);
app.use("/api/model", modelRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/health", healthRoutes);
app.use("/api/ml", mlRoutes);

import errorMiddleware from "./middleware/error.middleware.js";
app.use(errorMiddleware);

export default app;
