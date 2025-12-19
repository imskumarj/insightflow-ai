# 🚀 InsightFlow AI

> **An End‑to‑End Intelligent Data Analytics Platform**

InsightFlow AI is a **production‑grade, full‑stack data analytics platform** that allows users to upload raw CSV datasets and instantly receive **automated Exploratory Data Analysis (EDA)** with **KPIs, interactive charts, insights, and AI‑ready analytics** — all through a modern, responsive, SaaS‑style dashboard.

This project is designed to demonstrate **real‑world Data Science + Full‑Stack Engineering workflows**, not toy notebooks.

---

## ✨ What Makes InsightFlow AI Special?

✔ Upload any CSV — no schema hardcoding
✔ Automatic column normalization & type inference
✔ Real‑time EDA generation (KPIs, trends, distributions)
✔ Clean micro‑service architecture (Frontend + Node API + ML Service)
✔ Modern, glassmorphic, gradient‑infused UI
✔ Fully responsive (desktop → mobile)
✔ Production‑ready APIs & hooks

This is **not** a static dashboard — it is a **living analytics system**.

---

## 🧠 Core Capabilities

### 📤 Dataset Upload

* Upload CSV files via UI
* Automatic parsing & validation
* Dataset versioning via unique `datasetId`

### 📊 Automated EDA Engine

For every dataset, InsightFlow AI automatically computes:

#### KPIs

* Total Sales
* Total Profit
* Average Discount
* Row & column metadata

#### Visual Analytics

* 📈 **Time‑Series Trends** (monthly aggregation)
* 📊 **Category Revenue Distribution**
* 🔴 **Discount vs Profit Scatter Analysis**
* 🧮 **Correlation Heatmaps** (numeric features)

#### AI‑Style Insights

* Highest revenue category detection
* Discount impact warnings
* Profitability alerts

All results are **JSON‑serializable**, frontend‑ready, and scalable.

---

## 🏗️ System Architecture

```text
Frontend (React + Vite + Tailwind)
        ↓ REST API
Node API (Express)
        ↓ HTTP
ML Service (FastAPI + Pandas + NumPy)
```

### Why this architecture?

* **Separation of concerns**
* Independent scaling of ML workloads
* Clean production‑style service boundaries
* Easy future extension (LLMs, forecasting, agents)

---

## 🖥️ Frontend Stack

* **React (TypeScript)** — component‑driven UI
* **Vite** — lightning‑fast dev experience
* **TailwindCSS** — modern, utility‑first styling
* **Custom Hooks** — `useEDA` for data lifecycle
* **Reusable Components** — KPI cards, charts, upload

### UI Principles

* Glassmorphism & gradients
* Strong visual hierarchy
* Card‑based analytics layout
* Mobile‑first responsiveness

---

## ⚙️ Backend (Node API)

### Responsibilities

* Handle file uploads
* Manage dataset IDs
* Proxy requests to ML service
* Normalize ML responses for frontend

### Key Endpoints

```http
POST /api/data/upload
GET  /api/eda/:datasetId
```

### Technologies

* **Node.js**
* **Express.js**
* **Axios** (ML service communication)
* **Multer** (file handling)

---

## 🧪 ML / Analytics Service

### Tech Stack

* **FastAPI** — high‑performance ML APIs
* **Pandas** — data manipulation
* **NumPy** — numerical computing
* **Uvicorn** — ASGI server

### EDA Intelligence

* Automatic column normalization
* Robust numeric coercion
* Safe NaN handling
* JSON‑safe serialization

### Sample EDA Output

```json
{
  "summary": {
    "totalSales": 29080,
    "totalProfit": 3299,
    "avgDiscount": 0.13
  },
  "timeSeries": [...],
  "categoryChart": [...],
  "scatter": [...],
  "insights": ["Technology is the highest revenue category."]
}
```

---

## 📂 Project Structure

```text
InsightFlowAI/
│
├── frontend/
│   ├── src/
│   │   ├── pages/        # Dashboard, Upload
│   │   ├── components/   # UI & Charts
│   │   ├── hooks/        # useEDA
│   │   ├── api/          # API clients
│   │   └── styles/
│
├── backend/
│   ├── node-api/         # Express API
│   └── ml-service/       # FastAPI ML engine
│
└── README.md
```

---

## 🧪 How to Run Locally

### 1️⃣ ML Service

```bash
cd backend/ml-service
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### 2️⃣ Node API

```bash
cd backend/node-api
npm install
npm run dev
```

### 3️⃣ Frontend

```bash
cd frontend
npm install
npm run dev
```

Open → **[http://localhost:5000](http://localhost:5000)**

---

## 🧪 Sample Dataset

The platform works with **generic business datasets** containing columns like:

```csv
order_date,region,category,sub_category,sales,profit,discount,quantity
```

But InsightFlow AI is **schema‑agnostic** — it adapts dynamically.

---

## 🚀 Future Roadmap

* 🤖 AI chat on uploaded datasets
* 🔮 Forecasting & anomaly detection
* 📑 PDF / PPT report generation
* 🧠 LLM‑powered insight explanations
* ☁️ Cloud deployment (AWS / Azure)
* 🔐 Auth + multi‑tenant datasets

---

## 🎯 Why This Project Matters

InsightFlow AI demonstrates:

* End‑to‑end Data Science engineering
* Production‑ready ML APIs
* Clean frontend data visualization
* Real SaaS‑style UX thinking

This is **exactly the kind of system built in real analytics startups**.

---

## 🧑‍💻 Author

**Sudhansu Kumar**
Full‑Stack | Data | Cloud | Community

---

## ⭐ Final Note

If you’re looking for a project that:

* Looks premium
* Works end‑to‑end
* Is extensible
* Demonstrates real engineering depth

**InsightFlow AI delivers.**

Feel free to fork, extend, or build on top of it 🚀
