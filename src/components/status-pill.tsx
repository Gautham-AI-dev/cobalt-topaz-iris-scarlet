import { Badge } from "@/components/ui/badge";
import type { GateStatus, StageStatus } from "@/lib/catalog";

const STAGE_TONE: Record<
  StageStatus,
  { tone: "faint" | "mist" | "hold" | "ok" | "accent"; label: string }
> = {
  locked: { tone: "faint", label: "Locked" },
  ready: { tone: "mist", label: "Ready" },
  in_progress: { tone: "accent", label: "On site" },
  held: { tone: "hold", label: "Held" },
  released: { tone: "ok", label: "Released" },
  complete: { tone: "ok", label: "Complete" },
};

const GATE_TONE: Record<
  GateStatus,
  { tone: "faint" | "mist" | "hold" | "ok" | "accent"; label: string }
> = {
  upcoming: { tone: "faint", label: "Not due" },
  submitted: { tone: "mist", label: "Pack in" },
  payable: { tone: "hold", label: "Waiting on you" },
  paid: { tone: "ok", label: "Paid" },
};

export function StagePill({ status }: { status: StageStatus }) {
  const t = STAGE_TONE[status];
  return <Badge tone={t.tone}>{t.label}</Badge>;
}

export function GatePill({ status }: { status: GateStatus }) {
  const t = GATE_TONE[status];
  return <Badge tone={t.tone}>{t.label}</Badge>;
}

export function GradeChip({
  grade,
}: {
  grade: "standard" | "plot" | "contract";
}) {
  const label =
    grade === "standard"
      ? "From the standard"
      : grade === "plot"
        ? "From this plot"
        : "From the contract";
  return <Badge tone="faint">{label}</Badge>;
}
