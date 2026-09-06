import { useState } from "react";
import {
  Ban,
  Check,
  ClipboardCheck,
  Lock,
  ShieldAlert,
} from "lucide-react";
import { GradeChip, StagePill } from "@/components/status-pill";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SPECIALISTS, STAGES } from "@/lib/catalog";
import { useHouse } from "@/lib/store";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function Journey({ project }: { project: Project }) {
  const seat = useHouse((s) => s.seat);
  const selectedStageId = useHouse((s) => s.selectedStageId);
  const selectStage = useHouse((s) => s.selectStage);
  const selected =
    STAGES.find((s) => s.id === selectedStageId) ?? STAGES[0];
  const status =
    project.stages.find((s) => s.id === selected.id)?.status ?? "locked";

  return (
    <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
      <ol className="flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible">
        {STAGES.map((stage) => {
          const st =
            project.stages.find((s) => s.id === stage.id)?.status ?? "locked";
          const active = stage.id === selected.id;
          return (
            <li key={stage.id} className="shrink-0">
              <button
                onClick={() => selectStage(stage.id)}
                className={cn(
                  "flex h-11 w-full min-w-36 items-center gap-3 rounded-md px-3 text-left text-sm transition-colors duration-150 lg:min-w-0",
                  active ? "bg-ink text-bg" : "hover:bg-surface-2",
                )}
              >
                <span className="font-mono text-xs tabular-nums opacity-60">
                  {String(stage.id).padStart(2, "0")}
                </span>
                <span className="flex-1 truncate font-medium">{stage.short}</span>
                <StatusDot status={st} onInk={active} />
              </button>
            </li>
          );
        })}
      </ol>

      <StageDetail project={project} stageId={selected.id} status={status} seat={seat} />
    </div>
  );
}

function StatusDot({
  status,
  onInk,
}: {
  status: string;
  onInk?: boolean;
}) {
  const cls =
    status === "held"
      ? "bg-hold"
      : status === "complete" || status === "released"
        ? "bg-ok"
        : status === "in_progress"
          ? onInk
            ? "bg-mist"
            : "bg-accent"
          : onInk
            ? "bg-bg/40"
            : "bg-faint/50";
  return <span className={cn("size-1.5 rounded-full", cls)} />;
}

function StageDetail({
  project,
  stageId,
  status,
  seat,
}: {
  project: Project;
  stageId: number;
  status: Project["stages"][number]["status"];
  seat: "owner" | "team" | "together";
}) {
  const def = STAGES.find((s) => s.id === stageId)!;
  const showOwner = seat === "owner" || seat === "together";
  const showTeam = seat === "team" || seat === "together";

  return (
    <article className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Stage {String(def.id).padStart(2, "0")} · {def.phase}
          </p>
          <h2 className="mt-1 text-3xl">{def.name}</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <StagePill status={status} />
          <GradeChip grade={def.grade} />
        </div>
      </div>

      {def.hold && (status === "held" || status === "in_progress") && (
        <p className="mt-4 flex items-start gap-2 rounded-md bg-hold/8 px-3 py-2 text-sm text-hold">
          <Ban className="mt-0.5 size-4 shrink-0" />
          {def.hold}
        </p>
      )}

      <div
        className={cn(
          "mt-6 grid gap-4",
          showOwner && showTeam ? "md:grid-cols-2" : "grid-cols-1",
        )}
      >
        {showOwner && (
          <Lane
            kicker="You"
            title="Why this gate exists"
            body={def.ownerWhy}
            rec={def.ownerGets}
            recLabel="What you receive"
          />
        )}
        {showTeam && (
          <Lane
            kicker="Team"
            title="What we actually do"
            body={def.teamDoes}
            rec={def.principalOwns}
            recLabel="Principal owns"
          />
        )}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            Who signs
          </p>
          <ul className="mt-2 space-y-1.5">
            {def.specialists.map((id) => {
              const spec = SPECIALISTS.find((s) => s.id === id);
              const st = project.specialists.find((s) => s.id === id);
              return (
                <li
                  key={id}
                  className="flex items-center justify-between text-sm"
                >
                  <span>{spec?.title}</span>
                  <span className="text-xs text-muted">
                    {st?.status === "signed"
                      ? "Signed"
                      : st?.status === "engaged"
                        ? "Engaged"
                        : "Pending"}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            Evidence on this gate
          </p>
          <ul className="mt-2 space-y-1.5">
            {def.artifacts.map((a) => (
              <li key={a} className="flex items-center gap-2 text-sm">
                <ClipboardCheck className="size-3.5 text-accent" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {def.irreversible && (
        <p className="mt-5 text-sm text-muted">
          Irreversible: {def.irreversible}
        </p>
      )}

      <StageActions project={project} stageId={stageId} status={status} seat={seat} />
    </article>
  );
}

function Lane({
  kicker,
  title,
  body,
  rec,
  recLabel,
}: {
  kicker: string;
  title: string;
  body: string;
  rec: string;
  recLabel: string;
}) {
  return (
    <div className="rounded-lg bg-bg p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
        {kicker}
      </p>
      <h3 className="mt-2 font-sans text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted">{body}</p>
      <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted">
        {recLabel}
      </p>
      <p className="mt-1 text-sm">{rec}</p>
    </div>
  );
}

function StageActions({
  project,
  stageId,
  status,
  seat,
}: {
  project: Project;
  stageId: number;
  status: Project["stages"][number]["status"];
  seat: "owner" | "team" | "together";
}) {
  const completeBrief = useHouse((s) => s.completeBrief);
  const releaseHold = useHouse((s) => s.releaseHold);
  const closeNcr = useHouse((s) => s.closeNcr);
  const raiseNcr = useHouse((s) => s.raiseNcr);
  const [ncrTitle, setNcrTitle] = useState("");
  const [checked, setChecked] = useState([false, false, false]);
  const openNcrs = project.ncrs.filter(
    (n) => n.status === "open" && n.stageId === stageId,
  );
  const isCurrent = project.currentStageId === stageId;
  const showTeam = seat === "team" || seat === "together";
  const showOwner = seat === "owner" || seat === "together";

  if (status === "locked") {
    return (
      <p className="mt-6 flex items-center gap-2 text-sm text-muted">
        <Lock className="size-4" />
        Previous gate must exist as evidence before this one opens.
      </p>
    );
  }

  return (
    <div className="mt-6 space-y-4 border-t border-line pt-5">
      {showOwner && stageId === 1 && status === "in_progress" && (
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm">The brief is the only thing you sign first.</p>
          <Button
            onClick={() => {
              completeBrief();
              toast.success("Brief signed. Diligence is open.");
            }}
          >
            Sign the brief
          </Button>
        </div>
      )}

      {showTeam && isCurrent && openNcrs.length > 0 && (
        <div className="rounded-lg bg-hold/8 p-4">
          <p className="flex items-center gap-2 text-sm font-medium text-hold">
            <ShieldAlert className="size-4" />
            Open hold items — the pour cannot move
          </p>
          <ul className="mt-3 space-y-2">
            {openNcrs.map((n) => (
              <li
                key={n.id}
                className="flex flex-wrap items-center justify-between gap-2 text-sm"
              >
                <span>
                  {n.title}
                  <span className="text-muted"> · {n.location}</span>
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    closeNcr(n.id);
                    toast.success("NCR closed after reinspection.");
                  }}
                >
                  Close after reinspect
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showTeam &&
        isCurrent &&
        (status === "held" || status === "in_progress") &&
        stageId !== 1 && (
          <div className="rounded-lg bg-bg p-4">
            <p className="text-sm font-medium">Release this gate</p>
            <p className="mt-1 text-xs text-muted">
              All three must be true. The person in a hurry cannot waive them.
            </p>
            <div className="mt-3 space-y-2">
              {[
                "Photographs indexed to grid and drawing revision",
                "Discipline specialist has signed, not the principal",
                "No open hold NCR on this stage",
              ].map((label, i) => (
                <label key={label} className="flex items-start gap-3 text-sm">
                  <input
                    type="checkbox"
                    className="mt-1 size-4 accent-accent"
                    checked={checked[i]}
                    onChange={(e) => {
                      const next = [...checked];
                      next[i] = e.target.checked;
                      setChecked(next);
                    }}
                  />
                  {label}
                </label>
              ))}
            </div>
            <Button
              className="mt-4"
              disabled={
                checked.some((c) => !c) ||
                project.ncrs.some(
                  (n) =>
                    n.status === "open" &&
                    n.severity === "hold" &&
                    n.stageId === stageId,
                )
              }
              onClick={() => {
                releaseHold();
                setChecked([false, false, false]);
                toast.success("Gate released. Next stage is live.");
              }}
            >
              <Check />
              Release gate
            </Button>
          </div>
        )}

      {showTeam && isCurrent && status !== "complete" && (
        <form
          className="flex flex-col gap-2 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            if (!ncrTitle.trim()) return;
            raiseNcr(ncrTitle.trim(), `Stage ${stageId} · site`);
            setNcrTitle("");
            toast.message("Hold raised. Concealment is blocked.");
          }}
        >
          <Input
            value={ncrTitle}
            onChange={(e) => setNcrTitle(e.target.value)}
            placeholder="Raise a hold — location and defect"
          />
          <Button type="submit" variant="hold" className="sm:w-44">
            Hold the gate
          </Button>
        </form>
      )}
    </div>
  );
}
