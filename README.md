# 🚀 InsightFlow AI

### End-to-End Intelligent Analytics & ML Prediction Platform

> **InsightFlow AI** is a **production-ready, full-stack data analytics and machine learning platform** that transforms raw CSV datasets into **actionable insights, interactive visual analytics, and real-time ML predictions** — all through a modern, SaaS-grade dashboard.

This is **not a demo dashboard** or a notebook-based project.
It is a **real system**, designed using **industry-grade architecture patterns** used in analytics startups and ML-driven products.

---

## 🧠 What InsightFlow AI Does (In One Line)

> Upload a dataset → get **automated EDA**, **business insights**, **correlation intelligence**, and **live ML predictions** — instantly.

---

## ✨ Key Highlights
```
✔ Automated Exploratory Data Analysis (EDA)
✔ Interactive, responsive analytics dashboard
✔ ML model training + real-time prediction
✔ Lightweight model versioning (`v1`, `v2`, …)
✔ Robust data cleaning & validation
✔ Error-safe UX & API design
✔ Clean microservice architecture
✔ Cloud-ready deployment setup
```
---

## 🏗️ High-Level Architecture

```text
Frontend (React + TypeScript + Tailwind)
            ↓ REST APIs
Node API (Express.js)
            ↓ HTTP
ML Service (FastAPI + Pandas + Scikit-Learn)
```

### Why This Architecture?

• Clear separation of concerns
• Independent scaling of ML workloads
• Production-grade service boundaries
• Easy extension to LLMs, forecasting & agents
• Mirrors real SaaS analytics platforms

---

## 🖥️ Frontend (Client-Facing Dashboard)

### Tech Stack

* **React + TypeScript**
* **Vite**
* **TailwindCSS**
* **Recharts**
* Custom React Hooks (`useEDA`)
* Glassmorphic, gradient-based UI

### What the User Sees

#### 📤 Dataset Upload

* Upload CSV files (schema-agnostic)
* Automatic dataset versioning (`datasetId`)
* Immediate EDA trigger

#### 📊 Analytics Dashboard

* **KPIs**

  * Total Sales
  * Total Profit
  * Average Discount
* **Visual Analytics**

  * Sales Trend (Time Series)
  * Category Revenue Bar Chart
  * Discount vs Profit Scatter Plot
  * Sales & Profit Histograms
  * Feature Correlation Heatmap
* **AI-Generated Insights**

  * Business-focused insights derived from data patterns

#### 🔮 Live Prediction Panel

* Interactive sliders for:

  * Discount
  * Quantity
* Real-time sales prediction
* Safety note for extrapolation awareness

---

## ⚙️ Node API (Orchestration Layer)

### Responsibilities

* File upload handling
* Dataset lifecycle management
* API gateway for ML service
* Error normalization for frontend
* Environment-safe routing

### Key Endpoints

```http
POST /api/data/upload
GET  /api/eda/:datasetId
POST /api/model/train
POST /api/model/predict
```

### Stack

* Node.js
* Express.js
* Axios
* Multer
* Centralized error middleware

---

## 🧪 ML & Analytics Service (FastAPI)

### Tech Stack

* **FastAPI**
* **Pandas**
* **NumPy**
* **Scikit-Learn**
* **Joblib**
* **Uvicorn**

---

## 📊 Automated EDA Engine

When a dataset is uploaded, the ML service:

### 1️⃣ Normalizes Columns

```text
"Order Date" → order_date
"Sales $"    → sales
```

### 2️⃣ Safely Coerces Numeric Data

* Handles currency symbols
* Handles commas
* Converts invalid values to NaN safely

### 3️⃣ Generates Analytics

#### KPIs

* Total Sales
* Total Profit
* Average Discount
* Row & column counts

#### Visual Data

* Monthly sales trends
* Category revenue distribution
* Discount vs profit scatter
* Histograms for sales & profit
* Correlation heatmap (numeric features)

#### AI-Style Insights (Rule-Driven)

* Top revenue category detection
* Discount risk signals
* Profitability warnings

---

## 🤖 Machine Learning Pipeline

### Model Type

**Linear Regression (Baseline, Interpretable)**

### Features Used

```text
discount
quantity
```

### Target

```text
sales
```

---

### 🧬 Model Versioning (Lightweight)

Models are versioned on disk:

```text
models/
├── sales_model_v1.joblib
├── sales_model_v2.joblib
```

API responses include:

```json
{
  "model": "LinearRegression",
  "model_version": "v1"
}
```

This demonstrates **real ML lifecycle awareness** without over-engineering.

---

### 📈 Training Output

```json
{
  "model": "LinearRegression",
  "model_version": "v1",
  "metrics": {
    "r2": 0.147,
    "rmse": 517.79
  },
  "features": ["discount", "quantity"],
  "feature_importance": {
    "discount": -420.12,
    "quantity": 85.34
  }
}
```

---

### 🔮 Prediction API

```json
POST /predict
{
  "datasetId": "...",
  "discount": 0.12,
  "quantity": 10
}
```

```json
{
  "predicted_sales": 1411.69,
  "note": "Prediction is reliable only within the training data range"
}
```

---

## 🛡️ Error-Safe Design (Professional Touch)

Handled gracefully:

✔ Empty CSV uploads
✔ Missing required columns
✔ Prediction before training
✔ Invalid numeric values
✔ Out-of-range user inputs

User receives **clear UI feedback**, not crashes.

---

## 📂 Project Structure

```text
InsightFlowAI/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   │   ├── charts/
│   │   │   └── ui/
│   │   ├── hooks/
│   │   ├── pages/
│   │   └── index.css
│
├── backend/
│   ├── node-api/
│   │   ├── routes/
│   │   ├── services/
│   │   └── middleware/
│   │
│   └── ml-service/
│       ├── app/
│       │   ├── routes/
│       │   ├── services/
│       │   ├── models/
│       │   └── utils/
│       └── requirements.txt
│
└── README.md
```

---

## 🧪 Local Setup

### ML Service

```bash
cd backend/ml-service
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### Node API

```bash
cd backend/node-api
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open: **[http://localhost:5000](http://localhost:5000)**

---

## ☁️ Cloud Deployment (Ready)

Designed for:

* **Frontend** → Vercel / Netlify
* **Node API** → AWS EC2 / Railway / Render
* **ML Service** → AWS EC2 / ECS / Azure App Service
* **Storage** → S3 (future)

Dockerfiles already included for smooth CI/CD.

---

## 🚀 Roadmap

* LLM-powered insight explanations
* Time-series forecasting
* Anomaly detection
* PDF / PPT report export
* Authentication & multi-tenant datasets
* Auto-retraining pipelines

---

## 🎯 Why This Project Stands Out

This project demonstrates:

✔ Full-stack engineering
✔ Data science thinking
✔ ML lifecycle awareness
✔ UX maturity
✔ Cloud readiness

This is **exactly how analytics products are built in real companies**.

---

## 👨‍💻 Author

**Sudhansu Kumar**
Full-Stack • Data • ML • Cloud
