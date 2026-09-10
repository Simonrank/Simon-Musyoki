/**
 * Decorative time-series motif. Deterministic, no data claims, no JS —
 * it exists to make the page read as an instrument rather than a brochure.
 */

const WIDTH = 320;
const HEIGHT = 72;

const series = [
  38, 30, 44, 26, 52, 41, 58, 34, 62, 47, 55, 39, 66, 50, 44, 59, 36, 48, 30, 42,
];

function pointAt(index: number, value: number) {
  const x = (index / (series.length - 1)) * WIDTH;
  const y = HEIGHT - (value / 72) * HEIGHT;
  return [x, y] as const;
}

const linePath = series
  .map((value, index) => {
    const [x, y] = pointAt(index, value);
    return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  })
  .join(" ");

export default function SignalPlot({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox={`0 -4 ${WIDTH} ${HEIGHT + 8}`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {[0, 1, 2, 3].map((row) => (
        <line
          key={row}
          x1="0"
          x2={WIDTH}
          y1={(HEIGHT / 3) * row}
          y2={(HEIGHT / 3) * row}
          stroke="var(--border)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      ))}

      <path
        d={linePath}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        className="signal-path"
      />

      {series.map((value, index) => {
        if (index % 4 !== 0) return null;
        const [x, y] = pointAt(index, value);
        return (
          <circle key={index} cx={x} cy={y} r="2" fill="var(--accent)" />
        );
      })}
    </svg>
  );
}
