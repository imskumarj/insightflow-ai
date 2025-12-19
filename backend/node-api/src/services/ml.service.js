import axios from "axios";

const ML_BASE = process.env.ML_SERVICE_URL;

export const ingestDataset = (formData, headers) =>
  axios.post(`${ML_BASE}/ingest`, formData, { headers });

export const getEDA = (datasetId) =>
  axios.get(`${ML_BASE}/eda/${datasetId}`);

export const trainModel = (datasetId) =>
  axios.post(`${ML_BASE}/train/${datasetId}`);

export const predictSales = (payload) =>
  axios.post(`${ML_BASE}/predict`, payload);

export const getLLMInsights = (payload) =>
  axios.post(`${ML_BASE}/llm/insights`, payload);
