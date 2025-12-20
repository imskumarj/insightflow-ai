import React from "react";

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";

export default function CategoryBarChart({ data }: any) {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="category" tick={{ fill: "#cbd5f5" }} />
        <YAxis tick={{ fill: "#cbd5f5" }} />
        <Tooltip />
        <Bar
          dataKey="sales"
          radius={[8, 8, 0, 0]}
          fill="url(#barGradient)"
        />
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
}
