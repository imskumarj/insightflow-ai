import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const uploadDataset = (formData: FormData) =>
  API.post("/data/upload", formData);

export const getEDA = (datasetId: string) =>
  API.get(`/eda/${datasetId}`);

export const trainModel = (payload: any) =>
  API.post("/model/train", payload);

// src/api/api.ts
export const predictModel = (datasetId: string) =>
  API.post("/model/predict", { datasetId });

export default API;
