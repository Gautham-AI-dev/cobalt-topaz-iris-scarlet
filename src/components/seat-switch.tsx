import { Columns2, HardHat, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Seat } from "@/lib/catalog";

const SEATS: { id: Seat; label: string; hint: string; icon: typeof Home }[] = [
  { id: "owner", label: "You", hint: "Owner", icon: Home },
  { id: "together", label: "Together", hint: "Both seats", icon: Columns2 },
  { id: "team", label: "Team", hint: "Site", icon: HardHat },
];

export function SeatSwitch({
  value,
  onChange,
}: {
  value: Seat;
  onChange: (seat: Seat) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Whose seat"
      className="grid grid-cols-3 rounded-lg bg-surface-2 p-1"
    >
      {SEATS.map((s) => {
        const Icon = s.icon;
        const active = value === s.id;
        return (
          <button
            key={s.id}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(s.id)}
            className={cn(
              "flex h-10 items-center justify-center gap-1.5 rounded-md px-2 text-xs font-medium transition-[background-color,color,box-shadow] duration-150",
              active
                ? "bg-surface text-ink shadow-[var(--shadow-border)]"
                : "text-muted hover:text-ink",
            )}
          >
            <Icon className="size-3.5" strokeWidth={1.75} />
            <span className="hidden sm:inline">{s.label}</span>
            <span className="sm:hidden">{s.label}</span>
          </button>
        );
      })}
    </div>
  );
}
