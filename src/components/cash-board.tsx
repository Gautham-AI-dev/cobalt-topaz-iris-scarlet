import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { GatePill } from "@/components/status-pill";
import { Button } from "@/components/ui/button";
import { CASH_GATES, STAGES } from "@/lib/catalog";
import { useHouse } from "@/lib/store";
import type { Project } from "@/lib/types";
import { formatLakhs } from "@/lib/utils";
import { toast } from "sonner";

export function CashBoard({ project }: { project: Project }) {
  const seat = useHouse((s) => s.seat);
  const approveGate = useHouse((s) => s.approveGate);
  const submitGate = useHouse((s) => s.submitGate);
  const decideVariation = useHouse((s) => s.decideVariation);
  const remaining =
    Math.round((project.cash.budgetLakhs - project.cash.paidLakhs) * 10) / 10;
  const showOwner = seat === "owner" || seat === "together";
  const showTeam = seat === "team" || seat === "together";

  const chart = CASH_GATES.map((g) => {
    const state = project.gates.find((x) => x.id === g.id)!;
    return {
      name: g.label.split(" ")[0],
      Paid: state.status === "paid" ? state.amountLakhs : 0,
      Due: state.status === "payable" ? state.amountLakhs : 0,
      Later:
        state.status === "upcoming" || state.status === "submitted"
          ? state.amountLakhs
          : 0,
    };
  });

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Envelope" value={formatLakhs(project.cash.budgetLakhs)} />
        <Stat
          label="Paid against gates"
          value={formatLakhs(project.cash.paidLakhs)}
        />
        <Stat
          label="Committed"
          value={formatLakhs(project.cash.committedLakhs)}
        />
        <Stat label="Still in the file" value={formatLakhs(remaining)} />
      </div>

      <div className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">
          Cash follows evidence, not a calendar
        </p>
        <div className="mt-4 h-52">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chart} barGap={4}>
              <XAxis
                dataKey="name"
                tick={{ fill: "var(--color-muted)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "var(--color-muted)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                width={28}
              />
              <Tooltip
                cursor={{
                  fill: "color-mix(in oklab, var(--color-ink) 4%, transparent)",
                }}
                contentStyle={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-line)",
                  borderRadius: 8,
                  fontSize: 12,
                }}
              />
              <Bar dataKey="Paid" stackId="a" fill="var(--color-ok)" />
              <Bar dataKey="Due" stackId="a" fill="var(--color-hold)" />
              <Bar
                dataKey="Later"
                stackId="a"
                fill="var(--color-mist)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-sm bg-ok" /> Paid
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-sm bg-hold" /> Waiting on you
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2 rounded-sm bg-mist" /> Later
          </span>
        </div>
      </div>

      <ul className="space-y-3">
        {CASH_GATES.map((g) => {
          const state = project.gates.find((x) => x.id === g.id)!;
          const stageDone =
            (project.stages.find((s) => s.id === g.afterStage)?.status ??
              "locked") === "complete";
          return (
            <li
              key={g.id}
              className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] md:p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-medium">{g.label}</p>
                  <p className="mt-1 text-xs text-muted">
                    After {STAGES.find((s) => s.id === g.afterStage)?.name}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-mono text-sm tabular-nums">
                    {formatLakhs(state.amountLakhs)}
                  </p>
                  <GatePill status={state.status} />
                </div>
              </div>
              <div
                className={
                  showOwner && showTeam
                    ? "mt-4 grid gap-3 md:grid-cols-2"
                    : "mt-4"
                }
              >
                {showOwner ? (
                  <p className="text-sm text-muted">
                    <span className="font-medium text-ink">You. </span>
                    {g.ownerNote}
                  </p>
                ) : null}
                {showTeam ? (
                  <p className="text-sm text-muted">
                    <span className="font-medium text-ink">Team. </span>
                    {g.teamNote}
                  </p>
                ) : null}
              </div>
              <p className="mt-3 text-xs text-muted">
                Evidence: {g.evidence.join(" · ")}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {showTeam && state.status === "upcoming" && stageDone ? (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      submitGate(g.id);
                      toast.success("Pack submitted. Waiting on the owner.");
                    }}
                  >
                    Submit payment pack
                  </Button>
                ) : null}
                {showOwner && state.status === "payable" ? (
                  <Button
                    size="sm"
                    onClick={() => {
                      approveGate(g.id);
                      toast.success(
                        `${formatLakhs(state.amountLakhs)} released.`,
                      );
                    }}
                  >
                    Release this money
                  </Button>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>

      {project.variations.length > 0 ? (
        <div className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            Variations — written before, not billed after
          </p>
          <ul className="mt-3 space-y-3">
            {project.variations.map((v) => (
              <li
                key={v.id}
                className="flex flex-wrap items-start justify-between gap-3"
              >
                <div>
                  <p className="text-sm font-medium">{v.title}</p>
                  <p className="text-xs text-muted">{v.effect}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm tabular-nums">
                    {formatLakhs(v.amountLakhs)}
                  </span>
                  {v.status === "proposed" && showOwner ? (
                    <>
                      <Button
                        size="sm"
                        onClick={() => {
                          decideVariation(v.id, true);
                          toast.success("Variation on the file.");
                        }}
                      >
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => decideVariation(v.id, false)}
                      >
                        Decline
                      </Button>
                    </>
                  ) : (
                    <span className="text-xs capitalize text-muted">
                      {v.status}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
      <p className="text-xs font-medium uppercase tracking-wider text-muted">
        {label}
      </p>
      <p className="mt-2 font-display text-3xl tabular-nums">{value}</p>
    </div>
  );
}
