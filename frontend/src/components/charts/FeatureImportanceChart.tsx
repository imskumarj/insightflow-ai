import React from "react";

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function FeatureImportanceChart({ data }: any) {
  const chartData = Object.entries(data).map(([key, value]) => ({
    feature: key,
    importance: value
  }));

  return (
    <div className="glass rounded-2xl p-6 glow">
      <h4 className="font-semibold mb-4 gradient-text">
        Feature Importance
      </h4>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={chartData}>
          <XAxis dataKey="feature" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="importance" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
