import {
  BookOpen,
  IndianRupee,
  Layers,
  Users,
} from "lucide-react";
import { CashBoard } from "@/components/cash-board";
import { EvidenceBoard } from "@/components/evidence-board";
import { Journey } from "@/components/journey";
import { PeopleBoard } from "@/components/people-board";
import { PlotMark } from "@/components/plot-mark";
import { SeatSwitch } from "@/components/seat-switch";
import { Button } from "@/components/ui/button";
import { STAGES, type Tab } from "@/lib/catalog";
import { useHouse } from "@/lib/store";
import { cn, formatLakhs, sqFtFromYards } from "@/lib/utils";

const TABS: { id: Tab; label: string; icon: typeof Layers }[] = [
  { id: "journey", label: "Journey", icon: Layers },
  { id: "cash", label: "Cash", icon: IndianRupee },
  { id: "people", label: "People", icon: Users },
  { id: "evidence", label: "Evidence", icon: BookOpen },
];

export function HouseShell() {
  const project = useHouse((s) => s.project);
  const seat = useHouse((s) => s.seat);
  const tab = useHouse((s) => s.tab);
  const setSeat = useHouse((s) => s.setSeat);
  const setTab = useHouse((s) => s.setTab);
  const resetHouse = useHouse((s) => s.resetHouse);

  if (!project) return null;

  const current = STAGES.find((s) => s.id === project.currentStageId);
  const currentStatus = project.stages.find(
    (s) => s.id === project.currentStageId,
  )?.status;
  const payable = project.gates.filter((g) => g.status === "payable");
  const openHolds = project.ncrs.filter((n) => n.status === "open");
  const done = project.stages.filter((s) => s.status === "complete").length;

  return (
    <div className="min-h-dvh bg-bg pb-24 md:pb-10">
      <header className="border-b border-line bg-surface/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <PlotMark />
              <div>
                <p className="text-sm font-semibold leading-tight">
                  {project.plot.houseName}
                </p>
                <p className="text-xs text-muted">
                  {project.plot.sizeYd} sq yd ·{" "}
                  {sqFtFromYards(project.plot.sizeYd).toLocaleString("en-IN")} sq
                  ft · {project.plot.locality} · {project.plot.floors}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={resetHouse}>
                New plot
              </Button>
              <div className="w-56 sm:w-72">
                <SeatSwitch value={seat} onChange={setSeat} />
              </div>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-3">
            <Strip
              label="Now"
              value={`${String(project.currentStageId).padStart(2, "0")} ${current?.short ?? ""}`}
              hint={
                currentStatus === "held"
                  ? "Held until evidence exists"
                  : current?.name
              }
            />
            <Strip
              label="Cash"
              value={formatLakhs(project.cash.paidLakhs)}
              hint={
                payable.length
                  ? `${payable.length} pack waiting on the owner`
                  : `${formatLakhs(project.cash.budgetLakhs)} envelope`
              }
            />
            <Strip
              label="Gates"
              value={`${done} / 17`}
              hint={
                openHolds.length
                  ? `${openHolds.length} open hold`
                  : "No open hold items"
              }
            />
          </div>
        </div>
      </header>

      <nav className="sticky top-0 z-20 border-b border-line bg-bg/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 md:px-8">
          {TABS.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  "flex h-11 shrink-0 items-center gap-2 rounded-md px-3 text-sm font-medium",
                  active ? "bg-ink text-bg" : "text-muted hover:bg-surface-2",
                )}
              >
                <Icon className="size-4" strokeWidth={1.75} />
                {t.label}
              </button>
            );
          })}
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-8">
        {tab === "journey" && seat === "together" && (
          <p className="mb-5 max-w-2xl text-sm text-muted">
            Together mode is the middle of the file: your decisions on the
            left of a gate, the team’s signatures on the right. Same house.
            Same numbers.
          </p>
        )}
        {tab === "journey" && <Journey project={project} />}
        {tab === "cash" && <CashBoard project={project} />}
        {tab === "people" && <PeopleBoard project={project} />}
        {tab === "evidence" && <EvidenceBoard project={project} />}
      </main>
    </div>
  );
}

function Strip({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-lg bg-bg px-3 py-2">
      <p className="text-xs font-medium uppercase tracking-wider text-muted">
        {label}
      </p>
      <p className="font-medium tabular-nums">{value}</p>
      {hint ? <p className="truncate text-xs text-muted">{hint}</p> : null}
    </div>
  );
}
