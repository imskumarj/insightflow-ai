import React, { useEffect, useState } from "react";
import KpiCard from "../components/ui/KpiCard";
import SalesLineChart from "../components/charts/SalesLineChart";
import CategoryBarChart from "../components/charts/CategoryBarChart";
import ProfitScatter from "../components/charts/ProfitScatter";
import HistogramChart from "../components/charts/HistogramChart";
import CorrelationHeatmap from "../components/charts/CorrelationHeatmap";
import PredictionCard from "../components/charts/PredictionCard";
import Upload from "./Upload";
import { useEDA } from "../hooks/useEDA";

export default function Dashboard() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [datasetId, setDatasetId] = useState<string | null>(null);
  const { data, loading } = useEDA(datasetId, refreshKey);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-12">
      
      {/* HERO */}
      <section className="glass rounded-3xl p-8 glow">
        <h2 className="text-3xl font-bold gradient-text mb-2">
          Analytics Dashboard
        </h2>
        <p className="text-slate-400 mb-6 max-w-xl">
          Upload your dataset and instantly explore KPIs, trends, correlations
          and actionable insights — powered by AI-driven EDA.
        </p>

        <Upload
          onUpload={(newId: string) => {
            setDatasetId(newId);
            setRefreshKey((k) => k + 1);
          }}
        />
      </section>

      {!datasetId && (
        <div className="text-center text-slate-400">
          Upload a dataset to begin analysis.
        </div>
      )}

      {loading && (
        <div className="text-center text-indigo-400 animate-pulse">
          Crunching numbers & generating insights...
        </div>
      )}

      {data?.summary && (
        <>
          {/* KPI SECTION */}
          <section>
            <h3 className="text-xl font-semibold mb-4">
              Key Performance Indicators
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <KpiCard label="Total Sales" value={data.summary.totalSales} />
              <KpiCard label="Total Profit" value={data.summary.totalProfit} />
              <KpiCard label="Avg Discount" value={data.summary.avgDiscount} />
            </div>
          </section>

          {/* CHARTS */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass rounded-3xl p-6 glow">
              <h4 className="font-semibold mb-4 text-slate-200">
                Sales Trend Over Time
              </h4>
              <SalesLineChart data={data.timeSeries} />
            </div>

            <div className="glass rounded-3xl p-6 glow">
              <h4 className="font-semibold mb-4 text-slate-200">
                Revenue by Category
              </h4>
              <CategoryBarChart data={data.categoryChart} />
            </div>
          </section>

          {/* SCATTER */}
          <section className="glass rounded-3xl p-6 glow">
            <h4 className="font-semibold mb-4 text-slate-200">
              Discount vs Profit Distribution
            </h4>
            <ProfitScatter data={data.scatter} />
          </section>

          {data.histograms && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {data.histograms.sales && (
                <HistogramChart
                  bins={data.histograms.sales.bins}
                  counts={data.histograms.sales.counts}
                  label="Sales"
                />
              )}

              {data.histograms.profit && (
                <HistogramChart
                  bins={data.histograms.profit.bins}
                  counts={data.histograms.profit.counts}
                  label="Profit"
                />
              )}
            </div>
          )}

          {data.correlationHeatmap && (
            <CorrelationHeatmap
              labels={data.correlationHeatmap.labels}
              matrix={data.correlationHeatmap.matrix}
            />
          )}

          {datasetId && (
            <PredictionCard datasetId={datasetId} />
          )}

          {/* INSIGHTS */}
          <section className="glass rounded-3xl p-6 glow">
            <h4 className="text-lg font-semibold gradient-text mb-4">
              AI-Generated Insights
            </h4>

            {data.insights.length === 0 && (
              <p className="text-slate-400">No strong insights detected.</p>
            )}

            <ul className="space-y-2">
              {data.insights.map((i: string, idx: number) => (
                <li
                  key={idx}
                  className="text-slate-300 flex items-start gap-2"
                >
                  <span className="text-indigo-400">▸</span>
                  {i}
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  );
}
