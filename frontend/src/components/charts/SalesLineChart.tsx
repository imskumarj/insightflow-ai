import React from "react";

import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";

export default function SalesLineChart({ data }: any) {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="date" tick={{ fill: "#cbd5f5", fontSize: 12 }} />
        <YAxis tick={{ fill: "#cbd5f5", fontSize: 12 }} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#6366f1"
          strokeWidth={3}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
