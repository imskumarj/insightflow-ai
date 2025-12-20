import axios from "axios";

export type PredictPayload = {
  datasetId: string;
  discount: number;
  quantity: number;
};

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
export const predictModel = (payload: PredictPayload) =>
  API.post("/model/predict", payload);

export default API;
