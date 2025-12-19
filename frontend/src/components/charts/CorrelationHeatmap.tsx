import React from "react";

interface HeatmapProps {
  labels: string[];
  matrix: number[][];
}

export default function CorrelationHeatmap({
  labels,
  matrix,
}: HeatmapProps) {
  return (
    <div className="glass rounded-2xl p-5 overflow-x-auto">
      <h3 className="font-semibold mb-4 gradient-text">
        Feature Correlation Heatmap
      </h3>

      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${labels.length + 1}, minmax(80px, 1fr))`,
        }}
      >
        {/* Empty top-left cell */}
        <div />

        {/* Column labels */}
        {labels.map((label) => (
          <div
            key={`col-${label}`}
            className="text-xs text-center text-slate-400"
          >
            {label}
          </div>
        ))}

        {/* Rows */}
        {matrix.map((row, rowIdx) => (
          <React.Fragment key={`row-${labels[rowIdx]}`}>
            {/* Row label */}
            <div className="text-xs text-slate-400">
              {labels[rowIdx]}
            </div>

            {/* Cells */}
            {row.map((val, colIdx) => (
              <div
                key={`cell-${rowIdx}-${colIdx}`}
                className="text-center py-2 rounded-md text-sm font-medium transition"
                style={{
                  background: `rgba(99, 102, 241, ${Math.abs(val)})`,
                  color: Math.abs(val) > 0.6 ? "white" : "#0f172a",
                }}
              >
                {val}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
