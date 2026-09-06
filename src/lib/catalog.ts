export const PLOT_SIZES = [120, 150, 200, 220] as const;
export type PlotSize = (typeof PLOT_SIZES)[number];

export const LOCALITIES = [
  "MVP Colony",
  "Madhurawada",
  "Lawsons Bay",
  "Sagar Nagar",
  "Yendada",
  "Seethammadhara",
  "Gajuwaka",
  "Pendurthi",
] as const;

export type Locality = (typeof LOCALITIES)[number];
export type FloorIntent = "G" | "G+1" | "G+2";
export type Seat = "owner" | "team" | "together";
export type Tab = "journey" | "cash" | "people" | "evidence";
export type StageStatus =
  | "locked"
  | "ready"
  | "in_progress"
  | "held"
  | "released"
  | "complete";
export type EvidenceGrade = "standard" | "plot" | "contract";
export type GateStatus = "upcoming" | "submitted" | "payable" | "paid";

export const FLOOR_COPY: Record<
  FloorIntent,
  { label: string; note: string }
> = {
  G: {
    label: "Ground only",
    note: "Simplest envelope. Stair and parking still have to fit.",
  },
  "G+1": {
    label: "Ground + one",
    note: "The usual Vizag family house. Permission is not automatic.",
  },
  "G+2": {
    label: "Ground + two",
    note: "Needs the verified envelope, soil, structure and budget. Not a promise.",
  },
};

export const PLOT_NOTES: Record<PlotSize, string> = {
  120: "Stair and parking must be decided before design. A late vehicle bay eats the living room.",
  150: "A two-bedroom G+1 can be tested. Three bedrooms mean trade-offs in width, light or parking.",
  200: "More room for parking, services or a future floor — not a guaranteed floor count.",
  220: "Ten percent more than 200 sq yd. Comfort, not an automatic statutory uplift.",
};

export type SpecialistId =
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

export interface SpecialistDef {
  id: SpecialistId;
  title: string;
  signs: string;
  ownerSees: string;
  teamSees: string;
}

export const SPECIALISTS: SpecialistDef[] = [
  {
    id: "principal",
    title: "Principal",
    signs: "Brief, money, gates, customer record — never structural safety",
    ownerSees: "Your single accountable person. They hold the gates.",
    teamSees: "Owns integration, cash, change control and release authority.",
  },
  {
    id: "surveyor",
    title: "Licensed surveyor",
    signs: "Boundary, levels, benchmarks, setting-out",
    ownerSees: "The drawing that every wall is measured from.",
    teamSees: "Engage before design and again for as-built checks.",
  },
  {
    id: "geotech",
    title: "Geotechnical engineer",
    signs: "Bore logs, soil parameters, foundation recommendation",
    ownerSees: "What the ground will actually carry on this plot.",
    teamSees: "No copied footing. Parameters go to the structural engineer.",
  },
  {
    id: "architect",
    title: "Architect",
    signs: "Plans, specifications, authority submission",
    ownerSees: "Rooms, light, the sanctioned set.",
    teamSees: "Coordinates the building. Does not replace structure or MEP.",
  },
  {
    id: "structural",
    title: "Structural engineer",
    signs: "Calculations, RCC drawings, pour releases",
    ownerSees: "The person who says the frame is safe to pour.",
    teamSees: "Design and checking are never the same signature.",
  },
  {
    id: "mep",
    title: "MEP designer",
    signs: "Routes, loads, test certificates",
    ownerSees: "Water, power, drainage that still work after plaster.",
    teamSees: "Sleeves before pour. Rough-in before plaster.",
  },
  {
    id: "qs",
    title: "Quantity surveyor",
    signs: "Measured BOQ, valuations, variations",
    ownerSees: "Why a rupee is due, tied to a drawing.",
    teamSees: "Measurement is independent of the trade that built it.",
  },
  {
    id: "lab",
    title: "NABL laboratory",
    signs: "Concrete, steel, water, soil tests in scope",
    ownerSees: "A result that is not the contractor talking.",
    teamSees: "Check the current scope, not the logo on the letterhead.",
  },
  {
    id: "inspector",
    title: "Independent inspector",
    signs: "Hold-point releases, NCRs, snag closure",
    ownerSees: "Someone who is not paid to pour the concrete.",
    teamSees: "Witness before concealment. Close only after reinspection.",
  },
  {
    id: "safety",
    title: "Safety consultant",
    signs: "Risk assessment, scaffold and excavation checks",
    ownerSees: "Stop-work authority that does not sit with the pour.",
    teamSees: "Site-specific, not a copied checklist.",
  },
  {
    id: "waterproofing",
    title: "Waterproofing specialist",
    signs: "System, flood test, warranty",
    ownerSees: "The monsoon test, done before tiles hide it.",
    teamSees: "Substrate, upstands, ponding. No visual-dry pass.",
  },
  {
    id: "supervisor",
    title: "Site engineer",
    signs: "Daily diary, pour cards, levels",
    ownerSees: "The running record while you are at work.",
    teamSees: "Not a substitute for the structural engineer or inspector.",
  },
];

export interface StageDef {
  id: number;
  short: string;
  name: string;
  phase: string;
  grade: EvidenceGrade;
  ownerWhy: string;
  ownerGets: string;
  teamDoes: string;
  principalOwns: string;
  specialists: SpecialistId[];
  hold?: string;
  artifacts: string[];
  irreversible?: string;
}

export const STAGES: StageDef[] = [
  {
    id: 1,
    short: "Brief",
    name: "Enquiry and brief",
    phase: "Brief",
    grade: "plot",
    ownerWhy:
      "Stops a fixed-price promise being made before the ground and the permission are known.",
    ownerGets: "Dated brief, assumptions, go / no-go.",
    teamDoes:
      "Record plot, floors, occupancy, budget basis, coastal exposure and who decides.",
    principalOwns: "Relationship, scope, budget premise.",
    specialists: ["principal"],
    artifacts: ["Enquiry record", "Assumptions register", "Signed brief"],
  },
  {
    id: 2,
    short: "Title",
    name: "Site and title diligence",
    phase: "Diligence",
    grade: "contract",
    ownerWhy:
      "Excavating an unverified plot is the most expensive way to discover a boundary problem.",
    ownerGets: "Title opinion, utility notes, approval tracker.",
    teamDoes:
      "Collect title, access, services, flooding and the current GVMC / VMRDA instrument for this plot.",
    principalOwns: "Approval gate. Does not certify title.",
    specialists: ["principal", "surveyor", "architect"],
    artifacts: ["Due-diligence register", "Title opinion", "Approval tracker"],
  },
  {
    id: 3,
    short: "Survey",
    name: "Measured survey",
    phase: "Diligence",
    grade: "plot",
    ownerWhy:
      "The benchmark controls every setback, excavation and floor after this.",
    ownerGets: "Signed survey, photos, discrepancy note.",
    teamDoes:
      "Licensed surveyor measures boundary, levels, road edge, trees and utilities. Principal witnesses key points.",
    principalOwns: "Acceptance of the benchmark. Never visual pacing.",
    specialists: ["surveyor", "architect"],
    artifacts: ["Signed survey drawing", "Benchmark sheet", "Photographs"],
  },
  {
    id: 4,
    short: "Ground",
    name: "Geotechnical investigation",
    phase: "Diligence",
    grade: "plot",
    ownerWhy:
      "Coastal fill and groundwater make a copied footing a guess.",
    ownerGets: "Signed soil report and a plain-language foundation decision.",
    teamDoes:
      "Bores, groundwater, aggressiveness. Structural engineer accepts parameters before sizing.",
    principalOwns: "That the investigation happened on this plot.",
    specialists: ["geotech", "structural", "lab"],
    artifacts: ["Bore logs", "Lab sheets", "Foundation recommendation"],
  },
  {
    id: 5,
    short: "Design",
    name: "Concept and freeze",
    phase: "Design",
    grade: "contract",
    ownerWhy:
      "Rooms, shafts and beams become expensive once they are in concrete.",
    ownerGets: "Approved concept pack and a freeze log.",
    teamDoes:
      "Architect, structural and MEP coordinate. Changes after freeze are variations.",
    principalOwns: "Design intent and affordability. Not structural safety.",
    specialists: ["architect", "structural", "mep", "principal"],
    artifacts: ["Concept pack", "Design basis", "Freeze / variation log"],
  },
  {
    id: 6,
    short: "Approval",
    name: "Statutory approval",
    phase: "Design",
    grade: "contract",
    ownerWhy: "Physical work must not outrun the sanctioned set.",
    ownerGets: "Sanctioned drawings and a list of conditions.",
    teamDoes:
      "Licensed architect submits. Principal tracks queries and stores the sanctioned set.",
    principalOwns: "The hard gate. Does not sign as the licensed professional.",
    specialists: ["architect"],
    hold: "No excavation until the sanctioned set is on the file.",
    artifacts: ["Submitted set", "Sanctioned set", "Conditions log"],
  },
  {
    id: 7,
    short: "Contract",
    name: "Estimate and contract",
    phase: "Design",
    grade: "contract",
    ownerWhy: "The money baseline is what stops informal scope drift.",
    ownerGets: "BOQ, signed contract, payment schedule.",
    teamDoes:
      "QS measures. Principal owns cash, exclusions and the change procedure.",
    principalOwns: "Commercial recommendation and change approvals.",
    specialists: ["qs", "principal"],
    artifacts: ["Measured BOQ", "Signed contract", "Payment schedule"],
  },
  {
    id: 8,
    short: "Mobilise",
    name: "Mobilisation",
    phase: "Build",
    grade: "contract",
    ownerWhy:
      "A messy setup damages coastal materials, the benchmark and the neighbours.",
    ownerGets: "Fenced site, displayed programme, induction record.",
    teamDoes:
      "Access, storage, temporary power, protection, ITP, neighbour notice.",
    principalOwns: "Readiness gate. Does not delegate it blindly.",
    specialists: ["supervisor", "safety", "principal"],
    artifacts: ["Mobilisation checklist", "ITP", "Baseline photographs"],
  },
  {
    id: 9,
    short: "Found",
    name: "Excavation and foundation",
    phase: "Build",
    grade: "plot",
    ownerWhy: "Once concrete covers the steel, correction is demolition.",
    ownerGets: "Signed founding, pre-pour photos, cube records.",
    teamDoes:
      "Founding strata inspected. Rebar, cover, blinding and cleanliness checked before pour.",
    principalOwns: "Inspection release. No verbal foundation change.",
    specialists: ["structural", "geotech", "inspector", "lab", "supervisor"],
    hold: "Founding strata accepted before footing concrete.",
    irreversible: "Reinforcement disappears under the pour.",
    artifacts: [
      "Setting-out report",
      "Founding acceptance",
      "Pre-pour checklist",
      "Pour card",
    ],
  },
  {
    id: 10,
    short: "Plinth",
    name: "Plinth and buried services",
    phase: "Build",
    grade: "plot",
    ownerWhy: "A buried sleeve in the wrong place means breaking finished work.",
    ownerGets: "Level report, DPC record, underground as-built.",
    teamDoes:
      "Datum, drainage falls, damp-proofing, sleeves. No backfill over an unrecorded route.",
    principalOwns: "Concealment release against records.",
    specialists: ["structural", "mep", "supervisor"],
    hold: "Plinth, drainage and sleeves accepted before concealment.",
    artifacts: ["Level survey", "DPC checklist", "Underground as-built"],
  },
  {
    id: 11,
    short: "Frame",
    name: "RCC frame, floor by floor",
    phase: "Build",
    grade: "standard",
    ownerWhy:
      "The frame sets the geometry of the whole house. Errors travel through every finish.",
    ownerGets: "Floor pour cards, cube certificates, as-built frame.",
    teamDoes:
      "Each cycle: rebar, sleeves, pour, cure. Engineer signs. Cover is irreversible.",
    principalOwns: "Sequence, traceability, customer report. Not structural adequacy.",
    specialists: ["structural", "mep", "lab", "inspector", "supervisor"],
    hold: "Reinforcement, cover and MEP sleeves signed before each pour.",
    irreversible: "Cover and embedded services after the pour.",
    artifacts: [
      "Bar-bending schedule",
      "Mill certificates",
      "Cube register",
      "Curing log",
    ],
  },
  {
    id: 12,
    short: "Envelope",
    name: "Masonry, roof, waterproofing",
    phase: "Build",
    grade: "plot",
    ownerWhy:
      "Vizag rain, humidity and salt punish envelope defects that finishes then hide.",
    ownerGets: "Roof report, flood-test record, photos before cover.",
    teamDoes:
      "Openings, falls, upstands, ponding test. Plaster waits on a pass.",
    principalOwns: "Sample approval, test witnessing, concealment release.",
    specialists: ["architect", "waterproofing", "inspector", "supervisor"],
    hold: "Envelope and waterproofing tested before plaster and flooring.",
    irreversible: "Flooring covering untested waterproofing.",
    artifacts: [
      "Masonry checks",
      "Waterproofing method",
      "Ponding test",
      "Retest record",
    ],
  },
  {
    id: 13,
    short: "Services",
    name: "MEP rough-in and second fix",
    phase: "Build",
    grade: "contract",
    ownerWhy:
      "A socket can still move before plaster. After plaster it is demolition.",
    ownerGets: "Layouts, concealed-work photos, pressure and continuity tests.",
    teamDoes:
      "Freeze outlets with the owner. Test before plaster. Second-fix after finishes.",
    principalOwns: "User locations and the concealment hold.",
    specialists: ["mep", "inspector", "supervisor"],
    hold: "Concealed conduits and pipes tested and photographed before plaster.",
    artifacts: [
      "Coordinated MEP drawings",
      "Pressure / continuity tests",
      "Window and door schedule",
    ],
  },
  {
    id: 14,
    short: "Finishes",
    name: "Plaster, floor, paint",
    phase: "Build",
    grade: "plot",
    ownerWhy:
      "Finish quality is visual. Samples turn a dispute into an agreed benchmark.",
    ownerGets: "Sample board, room sheets, snag list.",
    teamDoes:
      "Mock-ups, moisture checks, wet-area tests, room-by-room sign-off.",
    principalOwns: "Aesthetic acceptance and protection.",
    specialists: ["architect", "waterproofing", "inspector", "supervisor"],
    artifacts: ["Sample board", "Finish schedule", "Room inspection sheets"],
  },
  {
    id: 15,
    short: "External",
    name: "Compound and drainage",
    phase: "Build",
    grade: "plot",
    ownerWhy:
      "Bad grading sends monsoon water at the plinth and undoes the house.",
    ownerGets: "As-built external plan, drainage test, utility records.",
    teamDoes:
      "Gate, paving, falls away from the building, connections, reinstatement.",
    principalOwns: "External scope and owner acceptance.",
    specialists: ["surveyor", "mep", "architect", "supervisor"],
    artifacts: ["External layout", "Level / fall survey", "Drainage flow test"],
  },
  {
    id: 16,
    short: "Handover",
    name: "Commissioning and handover",
    phase: "Close",
    grade: "contract",
    ownerWhy:
      "Handover is evidence transfer, not a set of keys. Missing records make defects unarguable.",
    ownerGets:
      "Commissioning certificates, as-builts, warranties, keys, signed handover.",
    teamDoes:
      "Room-by-room walk, tests, snag close, final account, training.",
    principalOwns: "Completeness, money reconciliation, training.",
    specialists: ["mep", "inspector", "architect", "qs", "principal"],
    hold: "Life-safety and water issues closed before keys move.",
    artifacts: [
      "Commissioning sheets",
      "Closed snag list",
      "As-builts",
      "Handover certificate",
    ],
  },
  {
    id: 17,
    short: "Defects",
    name: "Defect liability",
    phase: "Close",
    grade: "contract",
    ownerWhy:
      "A dated register separates workmanship from later alteration. Duration is in the contract, not a slogan.",
    ownerGets: "Defect register, repair photos, close-out statement.",
    teamDoes:
      "Triage leaks and safety first. Specialist diagnosis when it exceeds the principal.",
    principalOwns: "The single support channel and closure verification.",
    specialists: ["principal", "waterproofing", "mep", "structural"],
    artifacts: ["Defect register", "Repair evidence", "Close-out statement"],
  },
];

export interface CashGateDef {
  id: string;
  label: string;
  afterStage: number;
  ownerNote: string;
  teamNote: string;
  evidence: string[];
}

export const CASH_GATES: CashGateDef[] = [
  {
    id: "design",
    label: "Design and approval set",
    afterStage: 7,
    ownerNote: "You are paying for a priced, sanctioned design — not a sketch.",
    teamNote: "Release only with signed contract, BOQ and sanctioned set.",
    evidence: ["Sanctioned drawings", "Signed contract", "BOQ revision 0"],
  },
  {
    id: "substructure",
    label: "Substructure complete",
    afterStage: 10,
    ownerNote: "Founding and plinth are buried. Pay against the signed hold points.",
    teamNote: "Founding sign-off, cubes, DPC and underground as-built.",
    evidence: ["Founding acceptance", "Cube reports", "Underground as-built"],
  },
  {
    id: "frame",
    label: "Frame complete",
    afterStage: 11,
    ownerNote: "The RCC cycle is the last time the steel is visible.",
    teamNote: "Every floor pour card, cubes and engineer release.",
    evidence: ["Pour cards", "Cube group acceptance", "As-built frame"],
  },
  {
    id: "services",
    label: "Envelope and services rough-in",
    afterStage: 13,
    ownerNote: "Waterproofing and concealed pipes must be tested before finishes.",
    teamNote: "Ponding pass, pressure / continuity, pre-plaster photos.",
    evidence: ["Ponding test", "Pressure tests", "Concealed-work photos"],
  },
  {
    id: "finishes",
    label: "Finishes complete",
    afterStage: 14,
    ownerNote: "Room-by-room acceptance, not a corridor walk.",
    teamNote: "Samples, room sheets, open snags listed — not hidden.",
    evidence: ["Room sheets", "Snag list", "Wet-area retests"],
  },
  {
    id: "handover",
    label: "Handover and defects closed",
    afterStage: 16,
    ownerNote: "Keys move with the dossier. Retention waits on the contract gate.",
    teamNote: "Commissioning, as-builts, warranties, final account.",
    evidence: ["Handover certificate", "Dossier manifest", "Final account"],
  },
];

export const COASTAL_STRIP = {
  class: "Severe",
  proof:
    "IS 456:2000 Table 3 places coastal environment in severe — not very severe. Very severe is sea-water spray. Extreme is the tidal zone.",
  grade: "M30",
  cement: "320 kg/m³",
  wc: "0.45",
  cover: "45 mm",
  note: "Each member is still the structural engineer’s call, written on the drawings.",
};

export const OWNER_ONLY_JOBS = [
  "Bring a plot with a clear title path",
  "Set a cash envelope and keep it funded at the gates",
  "Freeze rooms and outlets while they can still move",
  "Approve variations before they are built",
  "Walk the hold points you are asked to see",
];

export const TEAM_RUNS = [
  "Survey, soil, design and statutory submission",
  "Named specialists who sign their own work",
  "Pours that wait on hold points",
  "Tests with chain of custody",
  "A dossier another builder could pick up",
];
