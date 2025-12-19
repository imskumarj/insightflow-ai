import React from "react";

import {
  ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function ProfitScatter({ data }: any) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart>
        <XAxis dataKey="discount" />
        <YAxis dataKey="profit" />
        <Tooltip />
        <Scatter data={data} fill="#dc2626" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
