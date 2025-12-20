import React from "react";

import {
  ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";

export default function ProfitScatter({ data }: any) {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <ScatterChart>
        <CartesianGrid stroke="#334155" />
        <XAxis
          dataKey="discount"
          tick={{ fill: "#cbd5f5" }}
          name="Discount"
        />
        <YAxis
          dataKey="profit"
          tick={{ fill: "#cbd5f5" }}
          name="Profit"
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter
          data={data}
          fill="#f43f5e"
          shape="circle"
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
