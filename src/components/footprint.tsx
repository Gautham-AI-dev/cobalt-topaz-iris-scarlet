import { cn } from "@/lib/utils";
import type { PlotSize } from "@/lib/catalog";

const SCALE: Record<PlotSize, { w: number; h: number }> = {
  120: { w: 72, h: 58 },
  150: { w: 78, h: 66 },
  200: { w: 92, h: 72 },
  220: { w: 98, h: 76 },
};

export function Footprint({
  size,
  active = false,
  className,
}: {
  size: PlotSize;
  active?: boolean;
  className?: string;
}) {
  const { w, h } = SCALE[size];
  return (
    <svg
      viewBox="0 0 120 96"
      className={cn("h-16 w-20", className)}
      aria-hidden="true"
    >
      <rect
        x={(120 - w) / 2}
        y={(96 - h) / 2}
        width={w}
        height={h}
        fill="none"
        stroke="currentColor"
        strokeOpacity={active ? 1 : 0.35}
        strokeWidth="1.5"
      />
      <rect
        x={(120 - w) / 2 + w * 0.18}
        y={(96 - h) / 2 + h * 0.28}
        width={w * 0.64}
        height={h * 0.52}
        fill="currentColor"
        fillOpacity={active ? 1 : 0.12}
      />
    </svg>
  );
}
