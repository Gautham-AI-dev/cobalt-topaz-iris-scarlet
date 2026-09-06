import { Badge } from "@/components/ui/badge";
import { SPECIALISTS } from "@/lib/catalog";
import { useHouse } from "@/lib/store";
import type { Project } from "@/lib/types";

export function PeopleBoard({ project }: { project: Project }) {
  const seat = useHouse((s) => s.seat);
  return (
    <div className="space-y-4">
      <div className="rounded-xl bg-ink p-5 text-bg md:p-6">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-mist">
          One principal, many specialists
        </p>
        <p className="mt-3 max-w-2xl font-display text-2xl md:text-3xl">
          A single person can be accountable for a house. A single person
          cannot be the surveyor, the laboratory and the person who checks
          all three.
        </p>
      </div>
      <ul className="grid gap-3 md:grid-cols-2">
        {SPECIALISTS.map((s) => {
          const st = project.specialists.find((x) => x.id === s.id);
          return (
            <li
              key={s.id}
              className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] md:p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium">{s.title}</p>
                  <p className="mt-1 text-xs text-muted">{s.signs}</p>
                </div>
                <Badge
                  tone={
                    st?.status === "signed"
                      ? "ok"
                      : st?.status === "engaged"
                        ? "mist"
                        : "faint"
                  }
                >
                  {st?.status ?? "pending"}
                </Badge>
              </div>
              <p className="mt-3 text-sm text-muted">
                {seat === "team" ? s.teamSees : s.ownerSees}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
