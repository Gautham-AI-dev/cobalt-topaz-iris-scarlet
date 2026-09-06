import {
  CASH_GATES,
  SPECIALISTS,
  STAGES,
  type FloorIntent,
  type Locality,
  type PlotSize,
} from "./catalog";
import type { Project } from "./types";

function id(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

function nowIso() {
  return new Date().toISOString();
}

function houseNameFrom(ownerName: string) {
  const last = ownerName.trim().split(/\s+/).filter(Boolean).at(-1);
  return last ? `${last} House` : "The House File";
}

export function createHouseFromIntake(input: {
  ownerName: string;
  sizeYd: PlotSize;
  locality: Locality;
  floors: FloorIntent;
  budgetLakhs: number;
}): Project {
  const budget = input.budgetLakhs;
  const designAmount = Math.round(budget * 0.08 * 10) / 10;
  const remainingGates = CASH_GATES.slice(1);
  const rest = budget - designAmount - Math.round(budget * 0.05 * 10) / 10;
  const each = Math.round((rest / remainingGates.length) * 10) / 10;

  return {
    id: id("house"),
    createdAt: nowIso(),
    plot: {
      sizeYd: input.sizeYd,
      locality: input.locality,
      floors: input.floors,
      ownerName: input.ownerName.trim() || "Owner",
      houseName: houseNameFrom(input.ownerName),
    },
    cash: {
      budgetLakhs: budget,
      paidLakhs: 0,
      committedLakhs: designAmount,
      retentionLakhs: Math.round(budget * 0.05 * 10) / 10,
      contingencyLakhs: Math.round(budget * 0.06 * 10) / 10,
    },
    stages: STAGES.map((s, i) => ({
      id: s.id,
      status: i === 0 ? "in_progress" : "locked",
    })),
    gates: CASH_GATES.map((g, i) => ({
      id: g.id,
      status: i === 0 ? "upcoming" : "upcoming",
      amountLakhs: i === 0 ? designAmount : each,
    })),
    specialists: SPECIALISTS.map((s) => ({
      id: s.id,
      status: s.id === "principal" ? "engaged" : "pending",
    })),
    ncrs: [],
    variations: [],
    activity: [
      {
        id: id("act"),
        at: nowIso(),
        actor: "system",
        text: `${houseNameFrom(input.ownerName)} opened. Plot ${input.sizeYd} sq yd in ${input.locality}. Cash envelope ${budget} L. Brief is the first gate.`,
        stageId: 1,
      },
    ],
    currentStageId: 1,
  };
}

export function createDemoHouse(): Project {
  const budget = 68;
  return {
    id: "demo-rao-house",
    createdAt: "2026-04-12T08:00:00.000Z",
    plot: {
      sizeYd: 200,
      locality: "MVP Colony",
      floors: "G+1",
      ownerName: "Ananya Rao",
      houseName: "Rao House",
    },
    cash: {
      budgetLakhs: budget,
      paidLakhs: 31.4,
      committedLakhs: 42.1,
      retentionLakhs: 3.4,
      contingencyLakhs: 2.8,
    },
    stages: STAGES.map((s) => {
      if (s.id < 11) return { id: s.id, status: "complete" as const };
      if (s.id === 11) return { id: s.id, status: "held" as const };
      if (s.id === 12) return { id: s.id, status: "ready" as const };
      return { id: s.id, status: "locked" as const };
    }),
    gates: [
      { id: "design", status: "paid", amountLakhs: 5.4 },
      {
        id: "substructure",
        status: "payable",
        amountLakhs: 12.6,
        submittedAt: "2026-08-28T10:00:00.000Z",
      },
      { id: "frame", status: "upcoming", amountLakhs: 14.2 },
      { id: "services", status: "upcoming", amountLakhs: 11.0 },
      { id: "finishes", status: "upcoming", amountLakhs: 13.4 },
      { id: "handover", status: "upcoming", amountLakhs: 8.0 },
    ],
    specialists: SPECIALISTS.map((s) => {
      const signed: SpecialistIdDemo[] = [
        "principal",
        "surveyor",
        "geotech",
        "architect",
        "structural",
        "qs",
        "lab",
        "inspector",
        "safety",
        "supervisor",
      ];
      const engaged: SpecialistIdDemo[] = ["mep", "waterproofing"];
      if (signed.includes(s.id as SpecialistIdDemo)) {
        return { id: s.id, status: "signed" as const };
      }
      if (engaged.includes(s.id as SpecialistIdDemo)) {
        return { id: s.id, status: "engaged" as const };
      }
      return { id: s.id, status: "pending" as const };
    }),
    ncrs: [
      {
        id: "ncr-c2",
        title: "Cover blocks missing at column C2",
        location: "First floor, grid C2",
        severity: "hold",
        status: "open",
        stageId: 11,
      },
    ],
    variations: [
      {
        id: "var-balcony",
        title: "Extra balcony waterproofing upstand",
        amountLakhs: 1.4,
        status: "proposed",
        effect: "Adds two days after the envelope gate. No structural change.",
      },
    ],
    activity: [
      {
        id: "a1",
        at: "2026-04-12T08:00:00.000Z",
        actor: "owner",
        text: "Ananya handed over a 200 sq yd plot in MVP Colony and a ₹68 L envelope.",
        stageId: 1,
      },
      {
        id: "a2",
        at: "2026-05-03T11:20:00.000Z",
        actor: "team",
        text: "Sanctioned set logged. Approval gate released.",
        stageId: 6,
      },
      {
        id: "a3",
        at: "2026-06-18T07:40:00.000Z",
        actor: "team",
        text: "Founding strata accepted by geotech and structural. Footing poured.",
        stageId: 9,
      },
      {
        id: "a4",
        at: "2026-08-28T10:05:00.000Z",
        actor: "team",
        text: "Substructure payment pack submitted — founding, cubes, underground as-built.",
        stageId: 10,
      },
      {
        id: "a5",
        at: "2026-09-04T16:10:00.000Z",
        actor: "team",
        text: "First-floor slab held. Column C2 cover blocks not accepted.",
        stageId: 11,
      },
      {
        id: "a6",
        at: "2026-09-05T09:15:00.000Z",
        actor: "system",
        text: "Both seats are looking at the same file. The pour waits.",
        stageId: 11,
      },
    ],
    currentStageId: 11,
  };
}

type SpecialistIdDemo =
  | "principal"
  | "surveyor"
  | "geotech"
  | "architect"
  | "structural"
  | "mep"
  | "qs"
  | "lab"
  | "inspector"
  | "safety"
  | "waterproofing"
  | "supervisor";
