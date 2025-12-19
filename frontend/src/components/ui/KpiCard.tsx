import React from "react";

interface Props {
  label: string;
  value: string | number;
}

export default function KpiCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="glass rounded-2xl p-6 glow">
      <p className="text-sm text-slate-400">{label}</p>
      <h3 className="text-3xl font-bold gradient-text mt-2">
        {value.toLocaleString()}
      </h3>
    </div>
  );
}
