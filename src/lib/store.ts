import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  CASH_GATES,
  STAGES,
  type Seat,
  type Tab,
} from "./catalog";
import { createDemoHouse, createHouseFromIntake } from "./project-factory";
import type { FloorIntent, Locality, PlotSize } from "./catalog";
import type { Project } from "./types";

function nid(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

function stamp() {
  return new Date().toISOString();
}

interface Store {
  seat: Seat;
  tab: Tab;
  selectedStageId: number;
  project: Project | null;
  hasSeenIntro: boolean;
  setSeat: (seat: Seat) => void;
  setTab: (tab: Tab) => void;
  selectStage: (id: number) => void;
  startFromPlot: (input: {
    ownerName: string;
    sizeYd: PlotSize;
    locality: Locality;
    floors: FloorIntent;
    budgetLakhs: number;
  }) => void;
  openDemo: () => void;
  resetHouse: () => void;
  completeBrief: () => void;
  releaseHold: () => void;
  raiseNcr: (title: string, location: string) => void;
  closeNcr: (id: string) => void;
  submitGate: (gateId: string) => void;
  approveGate: (gateId: string) => void;
  decideVariation: (id: string, approved: boolean) => void;
  logNote: (text: string) => void;
}

export const useHouse = create<Store>()(
  persist(
    (set, get) => ({
      seat: "together",
      tab: "journey",
      selectedStageId: 11,
      project: null,
      hasSeenIntro: false,

      setSeat: (seat) => set({ seat }),
      setTab: (tab) => set({ tab }),
      selectStage: (id) => set({ selectedStageId: id }),

      startFromPlot: (input) => {
        const project = createHouseFromIntake(input);
        set({
          project,
          selectedStageId: 1,
          tab: "journey",
          seat: "together",
          hasSeenIntro: true,
        });
      },

      openDemo: () => {
        const project = createDemoHouse();
        set({
          project,
          selectedStageId: 11,
          tab: "journey",
          seat: "together",
          hasSeenIntro: true,
        });
      },

      resetHouse: () =>
        set({
          project: null,
          selectedStageId: 1,
          tab: "journey",
          hasSeenIntro: false,
        }),

      completeBrief: () => {
        const project = get().project;
        if (!project) return;
        const stages = project.stages.map((s) => {
          if (s.id === 1) return { ...s, status: "complete" as const };
          if (s.id === 2) return { ...s, status: "in_progress" as const };
          return s;
        });
        const specialists = project.specialists.map((s) =>
          s.id === "surveyor" || s.id === "architect"
            ? { ...s, status: "engaged" as const }
            : s,
        );
        set({
          project: {
            ...project,
            stages,
            specialists,
            currentStageId: 2,
            activity: [
              {
                id: nid("act"),
                at: stamp(),
                actor: "owner",
                text: "Brief signed. Title and survey may start.",
                stageId: 1,
              },
              ...project.activity,
            ],
          },
          selectedStageId: 2,
        });
      },

      releaseHold: () => {
        const project = get().project;
        if (!project) return;
        const openHoldNcr = project.ncrs.find(
          (n) => n.status === "open" && n.severity === "hold",
        );
        if (openHoldNcr) return;

        const current = project.stages.find(
          (s) => s.id === project.currentStageId,
        );
        if (
          !current ||
          (current.status !== "held" && current.status !== "in_progress")
        ) {
          return;
        }

        const nextId = Math.min(current.id + 1, 17);
        const nextDef = STAGES.find((s) => s.id === nextId);
        const nextHeld = Boolean(nextDef?.hold) && nextId !== current.id;

        const stages = project.stages.map((s) => {
          if (s.id === current.id) return { ...s, status: "complete" as const };
          if (s.id === nextId && nextId !== current.id) {
            return {
              ...s,
              status: nextHeld ? ("held" as const) : ("in_progress" as const),
            };
          }
          return s;
        });

        const specialists = project.specialists.map((s) => {
          if (nextId >= 12 && s.id === "waterproofing") {
            return { ...s, status: "engaged" as const };
          }
          if (current.id >= 11 && s.id === "structural") {
            return { ...s, status: "signed" as const };
          }
          return s;
        });

        set({
          project: {
            ...project,
            stages,
            specialists,
            currentStageId: nextId,
            activity: [
              {
                id: nid("act"),
                at: stamp(),
                actor: "team",
                text: `${STAGES.find((s) => s.id === current.id)?.name ?? "Stage"} released. Next: ${nextDef?.name ?? "close-out"}.`,
                stageId: current.id,
              },
              ...project.activity,
            ],
          },
          selectedStageId: nextId,
        });
      },

      raiseNcr: (title, location) => {
        const project = get().project;
        if (!project) return;
        const ncr = {
          id: nid("ncr"),
          title,
          location,
          severity: "hold" as const,
          status: "open" as const,
          stageId: project.currentStageId,
        };
        const stages = project.stages.map((s) =>
          s.id === project.currentStageId ? { ...s, status: "held" as const } : s,
        );
        set({
          project: {
            ...project,
            ncrs: [ncr, ...project.ncrs],
            stages,
            activity: [
              {
                id: nid("act"),
                at: stamp(),
                actor: "team",
                text: `NCR raised: ${title}. Gate held.`,
                stageId: project.currentStageId,
              },
              ...project.activity,
            ],
          },
        });
      },

      closeNcr: (id) => {
        const project = get().project;
        if (!project) return;
        const ncrs = project.ncrs.map((n) =>
          n.id === id ? { ...n, status: "closed" as const } : n,
        );
        const stillHeld = ncrs.some(
          (n) => n.status === "open" && n.severity === "hold",
        );
        const stages = project.stages.map((s) =>
          s.id === project.currentStageId && s.status === "held" && !stillHeld
            ? { ...s, status: "in_progress" as const }
            : s,
        );
        const closed = project.ncrs.find((n) => n.id === id);
        set({
          project: {
            ...project,
            ncrs,
            stages,
            activity: [
              {
                id: nid("act"),
                at: stamp(),
                actor: "team",
                text: `NCR closed: ${closed?.title ?? id}.`,
                stageId: closed?.stageId,
              },
              ...project.activity,
            ],
          },
        });
      },

      submitGate: (gateId) => {
        const project = get().project;
        if (!project) return;
        const def = CASH_GATES.find((g) => g.id === gateId);
        const gate = project.gates.find((g) => g.id === gateId);
        if (!gate || gate.status === "paid" || gate.status === "payable") return;
        const gates = project.gates.map((g) =>
          g.id === gateId
            ? { ...g, status: "payable" as const, submittedAt: stamp() }
            : g,
        );
        set({
          project: {
            ...project,
            gates,
            activity: [
              {
                id: nid("act"),
                at: stamp(),
                actor: "team",
                text: `Payment pack submitted for ${def?.label ?? gateId} — ${gate.amountLakhs} L.`,
                stageId: def?.afterStage,
              },
              ...project.activity,
            ],
          },
          tab: "cash",
        });
      },

      approveGate: (gateId) => {
        const project = get().project;
        if (!project) return;
        const gate = project.gates.find((g) => g.id === gateId);
        const def = CASH_GATES.find((g) => g.id === gateId);
        if (!gate || gate.status !== "payable") return;
        const gates = project.gates.map((g) =>
          g.id === gateId ? { ...g, status: "paid" as const } : g,
        );
        set({
          project: {
            ...project,
            gates,
            cash: {
              ...project.cash,
              paidLakhs:
                Math.round((project.cash.paidLakhs + gate.amountLakhs) * 10) /
                10,
            },
            activity: [
              {
                id: nid("act"),
                at: stamp(),
                actor: "owner",
                text: `Released ${gate.amountLakhs} L against ${def?.label ?? gateId}.`,
                stageId: def?.afterStage,
              },
              ...project.activity,
            ],
          },
        });
      },

      decideVariation: (id, approved) => {
        const project = get().project;
        if (!project) return;
        const v = project.variations.find((x) => x.id === id);
        if (!v || v.status !== "proposed") return;
        const variations = project.variations.map((x) =>
          x.id === id
            ? {
                ...x,
                status: approved ? ("approved" as const) : ("declined" as const),
              }
            : x,
        );
        const cash = approved
          ? {
              ...project.cash,
              committedLakhs:
                Math.round(
                  (project.cash.committedLakhs + v.amountLakhs) * 10,
                ) / 10,
              budgetLakhs:
                Math.round((project.cash.budgetLakhs + v.amountLakhs) * 10) /
                10,
            }
          : project.cash;
        set({
          project: {
            ...project,
            variations,
            cash,
            activity: [
              {
                id: nid("act"),
                at: stamp(),
                actor: "owner",
                text: approved
                  ? `Variation approved: ${v.title} (+${v.amountLakhs} L).`
                  : `Variation declined: ${v.title}.`,
              },
              ...project.activity,
            ],
          },
        });
      },

      logNote: (text) => {
        const project = get().project;
        if (!project || !text.trim()) return;
        const actor = get().seat === "owner" ? "owner" : "team";
        set({
          project: {
            ...project,
            activity: [
              {
                id: nid("act"),
                at: stamp(),
                actor,
                text: text.trim(),
                stageId: project.currentStageId,
              },
              ...project.activity,
            ],
          },
        });
      },
    }),
    {
      name: "buildvizag-house-v1",
      skipHydration: true,
      partialize: (s) => ({
        seat: s.seat,
        tab: s.tab,
        selectedStageId: s.selectedStageId,
        project: s.project,
        hasSeenIntro: s.hasSeenIntro,
      }),
    },
  ),
);
