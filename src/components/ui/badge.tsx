import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide",
  {
    variants: {
      tone: {
        ink: "bg-ink/8 text-ink",
        mist: "bg-mist text-accent",
        hold: "bg-hold/12 text-hold",
        ok: "bg-ok/12 text-ok",
        faint: "bg-surface-2 text-muted",
        accent: "bg-accent text-accent-fg",
      },
    },
    defaultVariants: { tone: "ink" },
  },
);

export function Badge({
  className,
  tone,
  ...props
}: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ tone }), className)} {...props} />
  );
}
