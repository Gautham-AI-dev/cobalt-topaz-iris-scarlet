import { cn } from "@/lib/utils";

export function PlotMark({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", invert ? "text-bg" : "text-ink", className)}
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="3.5"
        width="25"
        height="25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect
        x="9"
        y="11"
        width="14"
        height="13"
        className={invert ? "fill-mist" : "fill-accent"}
      />
    </svg>
  );
}
