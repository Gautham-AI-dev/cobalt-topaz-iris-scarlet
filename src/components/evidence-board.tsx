import { format } from "date-fns";
import { useState } from "react";
import { COASTAL_STRIP, STAGES } from "@/lib/catalog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useHouse } from "@/lib/store";
import type { Project } from "@/lib/types";
import { toast } from "sonner";

export function EvidenceBoard({ project }: { project: Project }) {
  const seat = useHouse((s) => s.seat);
  const logNote = useHouse((s) => s.logNote);
  const [note, setNote] = useState("");
  const holds = STAGES.filter((s) => s.hold).map((s) => ({
    ...s,
    status: project.stages.find((x) => x.id === s.id)?.status ?? "locked",
  }));

  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">
          Coastal exposure · this plot
        </p>
        <p className="mt-2 font-display text-2xl">
          Class {COASTAL_STRIP.class} · {COASTAL_STRIP.grade} · cover{" "}
          {COASTAL_STRIP.cover}
        </p>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          {COASTAL_STRIP.proof} {COASTAL_STRIP.note}
        </p>
        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-xs text-muted">Cement</dt>
            <dd className="font-mono tabular-nums">{COASTAL_STRIP.cement}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">Max w/c</dt>
            <dd className="font-mono tabular-nums">{COASTAL_STRIP.wc}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">Grade</dt>
            <dd className="font-mono tabular-nums">{COASTAL_STRIP.grade}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted">Cover</dt>
            <dd className="font-mono tabular-nums">{COASTAL_STRIP.cover}</dd>
          </div>
        </dl>
      </div>

      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted">
          Irreversible holds
        </p>
        <ul className="mt-3 space-y-2">
          {holds.map((h) => (
            <li
              key={h.id}
              className="flex flex-wrap items-start justify-between gap-2 rounded-lg bg-surface px-4 py-3 shadow-[var(--shadow-border)]"
            >
              <div>
                <p className="text-sm font-medium">
                  {String(h.id).padStart(2, "0")} · {h.short}
                </p>
                <p className="text-xs text-muted">{h.hold}</p>
              </div>
              <span className="text-xs capitalize text-muted">{h.status.replace("_", " ")}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted">
          Shared log
        </p>
        <form
          className="mt-3 flex flex-col gap-2 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            if (!note.trim()) return;
            logNote(note);
            setNote("");
            toast.success("On the shared file.");
          }}
        >
          <Input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder={
              seat === "owner"
                ? "A question or a decision, in writing"
                : "Site note, instruction, or exception"
            }
          />
          <Button type="submit" variant="outline" className="sm:w-36">
            Post to file
          </Button>
        </form>
        <ol className="mt-4 space-y-3">
          {project.activity.map((a) => (
            <li key={a.id} className="grid grid-cols-[88px_1fr] gap-3 text-sm">
              <time className="font-mono text-xs tabular-nums text-muted">
                {format(new Date(a.at), "dd MMM HH:mm")}
              </time>
              <div>
                <p>
                  <span className="font-medium capitalize">{a.actor}</span>
                  {a.stageId ? (
                    <span className="text-muted">
                      {" "}
                      · stage {String(a.stageId).padStart(2, "0")}
                    </span>
                  ) : null}
                </p>
                <p className="text-muted">{a.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
