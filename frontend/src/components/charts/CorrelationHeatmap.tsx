import React from "react";

type Props = {
  labels: string[];
  matrix: number[][];
};

export default function CorrelationHeatmap({ labels, matrix }: Props) {
  return (
    <div className="glass rounded-3xl p-6 glow overflow-x-auto">
      <h4 className="font-semibold mb-4 gradient-text">
        Feature Correlation Heatmap
      </h4>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `120px repeat(${labels.length}, 80px)`,
          gap: "8px",
          alignItems: "center",
        }}
      >
        {/* Header */}
        <div />
        {labels.map((label) => (
          <div
            key={label}
            className="text-xs text-center text-slate-400 font-semibold"
          >
            {label}
          </div>
        ))}

        {/* Matrix */}
        {matrix.map((row, i) => (
          <React.Fragment key={labels[i]}>
            <div className="text-xs text-slate-400 font-semibold">
              {labels[i]}
            </div>

            {row.map((value, j) => {
              const intensity = Math.min(Math.abs(value), 1);
              const bg =
                value >= 0
                  ? `rgba(99,102,241,${intensity})`
                  : `rgba(239,68,68,${intensity})`;

              return (
                <div
                  key={`${i}-${j}`}
                  style={{
                    height: 42,
                    width: 80,
                    backgroundColor: bg,
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "white",
                  }}
                >
                  {value.toFixed(2)}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
