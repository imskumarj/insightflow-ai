import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface HistogramProps {
  bins: number[];
  counts: number[];
  label: string;
}

export default function HistogramChart({
  bins,
  counts,
  label,
}: HistogramProps) {
  const data = bins.slice(0, -1).map((bin, i) => ({
    range: `${Math.round(bin)}–${Math.round(bins[i + 1])}`,
    value: counts[i],
  }));

  return (
    <div className="glass rounded-2xl p-4">
      <h3 className="mb-3 font-semibold gradient-text">
        {label} Distribution
      </h3>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis tick={{ fill: "#cbd5f5", fontSize: 11 }} />
          <YAxis tick={{ fill: "#cbd5f5", fontSize: 11 }} />
          <Tooltip />
          <Bar
            dataKey="value"
            radius={[6, 6, 0, 0]}
            fill="url(#histGradient)"
          />
          <defs>
            <linearGradient id="histGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
