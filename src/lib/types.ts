import type {
  FloorIntent,
  GateStatus,
  Locality,
  PlotSize,
  Seat,
  SpecialistId,
  StageStatus,
  Tab,
} from "./catalog";

export interface Plot {
  sizeYd: PlotSize;
  locality: Locality;
  floors: FloorIntent;
  ownerName: string;
  houseName: string;
}

export interface CashState {
  budgetLakhs: number;
  paidLakhs: number;
  committedLakhs: number;
  retentionLakhs: number;
  contingencyLakhs: number;
}

export interface StageState {
  id: number;
  status: StageStatus;
}

export interface CashGateState {
  id: string;
  status: GateStatus;
  amountLakhs: number;
  submittedAt?: string;
}

export interface SpecialistState {
  id: SpecialistId;
  status: "pending" | "engaged" | "signed";
}

export interface Ncr {
  id: string;
  title: string;
  location: string;
  severity: "low" | "hold" | "safety";
  status: "open" | "closed";
  stageId: number;
}

export interface Activity {
  id: string;
  at: string;
  actor: "owner" | "team" | "system";
  text: string;
  stageId?: number;
}

export interface Variation {
  id: string;
  title: string;
  amountLakhs: number;
  status: "proposed" | "approved" | "declined";
  effect: string;
}

export interface Project {
  id: string;
  createdAt: string;
  plot: Plot;
  cash: CashState;
  stages: StageState[];
  gates: CashGateState[];
  specialists: SpecialistState[];
  ncrs: Ncr[];
  variations: Variation[];
  activity: Activity[];
  currentStageId: number;
}

export interface AppPersisted {
  seat: Seat;
  tab: Tab;
  selectedStageId: number;
  project: Project | null;
  hasSeenIntro: boolean;
}
