import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Lock, c as IndianRupee, d as Columns2, f as ClipboardCheck, g as ArrowRight, h as Ban, i as ShieldAlert, l as House, m as BookOpen, n as Users, o as Layers, p as Check, s as LandPlot, t as Wallet, u as HardHat } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as ResponsiveContainer, i as Bar, n as YAxis, o as Tooltip, r as XAxis, t as BarChart } from "../_libs/recharts+[...].mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as format } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DUMgfpqr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatLakhs(n) {
	const abs = Math.abs(n);
	const body = abs >= 10 ? abs.toFixed(1).replace(/\.0$/, "") : abs.toFixed(1);
	return `₹${n < 0 ? "-" : ""}${body} L`;
}
function sqFtFromYards(yd) {
	return yd * 9;
}
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide", {
	variants: { tone: {
		ink: "bg-ink/8 text-ink",
		mist: "bg-mist text-accent",
		hold: "bg-hold/12 text-hold",
		ok: "bg-ok/12 text-ok",
		faint: "bg-surface-2 text-muted",
		accent: "bg-accent text-accent-fg"
	} },
	defaultVariants: { tone: "ink" }
});
function Badge({ className, tone, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ tone }), className),
		...props
	});
}
var STAGE_TONE = {
	locked: {
		tone: "faint",
		label: "Locked"
	},
	ready: {
		tone: "mist",
		label: "Ready"
	},
	in_progress: {
		tone: "accent",
		label: "On site"
	},
	held: {
		tone: "hold",
		label: "Held"
	},
	released: {
		tone: "ok",
		label: "Released"
	},
	complete: {
		tone: "ok",
		label: "Complete"
	}
};
var GATE_TONE = {
	upcoming: {
		tone: "faint",
		label: "Not due"
	},
	submitted: {
		tone: "mist",
		label: "Pack in"
	},
	payable: {
		tone: "hold",
		label: "Waiting on you"
	},
	paid: {
		tone: "ok",
		label: "Paid"
	}
};
function StagePill({ status }) {
	const t = STAGE_TONE[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		tone: t.tone,
		children: t.label
	});
}
function GatePill({ status }) {
	const t = GATE_TONE[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		tone: t.tone,
		children: t.label
	});
}
function GradeChip({ grade }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		tone: "faint",
		children: grade === "standard" ? "From the standard" : grade === "plot" ? "From this plot" : "From the contract"
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:opacity-90",
			invert: "bg-bg-deep text-bg hover:opacity-90",
			outline: "bg-surface text-ink shadow-[var(--shadow-border)] hover:bg-surface-2",
			ghost: "text-ink hover:bg-surface-2",
			hold: "bg-hold text-hold-fg hover:opacity-90",
			ok: "bg-ok text-ok-fg hover:opacity-90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 rounded-sm px-3 text-xs",
			lg: "h-12 rounded-lg px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var PLOT_SIZES = [
	120,
	150,
	200,
	220
];
var LOCALITIES = [
	"MVP Colony",
	"Madhurawada",
	"Lawsons Bay",
	"Sagar Nagar",
	"Yendada",
	"Seethammadhara",
	"Gajuwaka",
	"Pendurthi"
];
var FLOOR_COPY = {
	G: {
		label: "Ground only",
		note: "Simplest envelope. Stair and parking still have to fit."
	},
	"G+1": {
		label: "Ground + one",
		note: "The usual Vizag family house. Permission is not automatic."
	},
	"G+2": {
		label: "Ground + two",
		note: "Needs the verified envelope, soil, structure and budget. Not a promise."
	}
};
var PLOT_NOTES = {
	120: "Stair and parking must be decided before design. A late vehicle bay eats the living room.",
	150: "A two-bedroom G+1 can be tested. Three bedrooms mean trade-offs in width, light or parking.",
	200: "More room for parking, services or a future floor — not a guaranteed floor count.",
	220: "Ten percent more than 200 sq yd. Comfort, not an automatic statutory uplift."
};
var SPECIALISTS = [
	{
		id: "principal",
		title: "Principal",
		signs: "Brief, money, gates, customer record — never structural safety",
		ownerSees: "Your single accountable person. They hold the gates.",
		teamSees: "Owns integration, cash, change control and release authority."
	},
	{
		id: "surveyor",
		title: "Licensed surveyor",
		signs: "Boundary, levels, benchmarks, setting-out",
		ownerSees: "The drawing that every wall is measured from.",
		teamSees: "Engage before design and again for as-built checks."
	},
	{
		id: "geotech",
		title: "Geotechnical engineer",
		signs: "Bore logs, soil parameters, foundation recommendation",
		ownerSees: "What the ground will actually carry on this plot.",
		teamSees: "No copied footing. Parameters go to the structural engineer."
	},
	{
		id: "architect",
		title: "Architect",
		signs: "Plans, specifications, authority submission",
		ownerSees: "Rooms, light, the sanctioned set.",
		teamSees: "Coordinates the building. Does not replace structure or MEP."
	},
	{
		id: "structural",
		title: "Structural engineer",
		signs: "Calculations, RCC drawings, pour releases",
		ownerSees: "The person who says the frame is safe to pour.",
		teamSees: "Design and checking are never the same signature."
	},
	{
		id: "mep",
		title: "MEP designer",
		signs: "Routes, loads, test certificates",
		ownerSees: "Water, power, drainage that still work after plaster.",
		teamSees: "Sleeves before pour. Rough-in before plaster."
	},
	{
		id: "qs",
		title: "Quantity surveyor",
		signs: "Measured BOQ, valuations, variations",
		ownerSees: "Why a rupee is due, tied to a drawing.",
		teamSees: "Measurement is independent of the trade that built it."
	},
	{
		id: "lab",
		title: "NABL laboratory",
		signs: "Concrete, steel, water, soil tests in scope",
		ownerSees: "A result that is not the contractor talking.",
		teamSees: "Check the current scope, not the logo on the letterhead."
	},
	{
		id: "inspector",
		title: "Independent inspector",
		signs: "Hold-point releases, NCRs, snag closure",
		ownerSees: "Someone who is not paid to pour the concrete.",
		teamSees: "Witness before concealment. Close only after reinspection."
	},
	{
		id: "safety",
		title: "Safety consultant",
		signs: "Risk assessment, scaffold and excavation checks",
		ownerSees: "Stop-work authority that does not sit with the pour.",
		teamSees: "Site-specific, not a copied checklist."
	},
	{
		id: "waterproofing",
		title: "Waterproofing specialist",
		signs: "System, flood test, warranty",
		ownerSees: "The monsoon test, done before tiles hide it.",
		teamSees: "Substrate, upstands, ponding. No visual-dry pass."
	},
	{
		id: "supervisor",
		title: "Site engineer",
		signs: "Daily diary, pour cards, levels",
		ownerSees: "The running record while you are at work.",
		teamSees: "Not a substitute for the structural engineer or inspector."
	}
];
var STAGES = [
	{
		id: 1,
		short: "Brief",
		name: "Enquiry and brief",
		phase: "Brief",
		grade: "plot",
		ownerWhy: "Stops a fixed-price promise being made before the ground and the permission are known.",
		ownerGets: "Dated brief, assumptions, go / no-go.",
		teamDoes: "Record plot, floors, occupancy, budget basis, coastal exposure and who decides.",
		principalOwns: "Relationship, scope, budget premise.",
		specialists: ["principal"],
		artifacts: [
			"Enquiry record",
			"Assumptions register",
			"Signed brief"
		]
	},
	{
		id: 2,
		short: "Title",
		name: "Site and title diligence",
		phase: "Diligence",
		grade: "contract",
		ownerWhy: "Excavating an unverified plot is the most expensive way to discover a boundary problem.",
		ownerGets: "Title opinion, utility notes, approval tracker.",
		teamDoes: "Collect title, access, services, flooding and the current GVMC / VMRDA instrument for this plot.",
		principalOwns: "Approval gate. Does not certify title.",
		specialists: [
			"principal",
			"surveyor",
			"architect"
		],
		artifacts: [
			"Due-diligence register",
			"Title opinion",
			"Approval tracker"
		]
	},
	{
		id: 3,
		short: "Survey",
		name: "Measured survey",
		phase: "Diligence",
		grade: "plot",
		ownerWhy: "The benchmark controls every setback, excavation and floor after this.",
		ownerGets: "Signed survey, photos, discrepancy note.",
		teamDoes: "Licensed surveyor measures boundary, levels, road edge, trees and utilities. Principal witnesses key points.",
		principalOwns: "Acceptance of the benchmark. Never visual pacing.",
		specialists: ["surveyor", "architect"],
		artifacts: [
			"Signed survey drawing",
			"Benchmark sheet",
			"Photographs"
		]
	},
	{
		id: 4,
		short: "Ground",
		name: "Geotechnical investigation",
		phase: "Diligence",
		grade: "plot",
		ownerWhy: "Coastal fill and groundwater make a copied footing a guess.",
		ownerGets: "Signed soil report and a plain-language foundation decision.",
		teamDoes: "Bores, groundwater, aggressiveness. Structural engineer accepts parameters before sizing.",
		principalOwns: "That the investigation happened on this plot.",
		specialists: [
			"geotech",
			"structural",
			"lab"
		],
		artifacts: [
			"Bore logs",
			"Lab sheets",
			"Foundation recommendation"
		]
	},
	{
		id: 5,
		short: "Design",
		name: "Concept and freeze",
		phase: "Design",
		grade: "contract",
		ownerWhy: "Rooms, shafts and beams become expensive once they are in concrete.",
		ownerGets: "Approved concept pack and a freeze log.",
		teamDoes: "Architect, structural and MEP coordinate. Changes after freeze are variations.",
		principalOwns: "Design intent and affordability. Not structural safety.",
		specialists: [
			"architect",
			"structural",
			"mep",
			"principal"
		],
		artifacts: [
			"Concept pack",
			"Design basis",
			"Freeze / variation log"
		]
	},
	{
		id: 6,
		short: "Approval",
		name: "Statutory approval",
		phase: "Design",
		grade: "contract",
		ownerWhy: "Physical work must not outrun the sanctioned set.",
		ownerGets: "Sanctioned drawings and a list of conditions.",
		teamDoes: "Licensed architect submits. Principal tracks queries and stores the sanctioned set.",
		principalOwns: "The hard gate. Does not sign as the licensed professional.",
		specialists: ["architect"],
		hold: "No excavation until the sanctioned set is on the file.",
		artifacts: [
			"Submitted set",
			"Sanctioned set",
			"Conditions log"
		]
	},
	{
		id: 7,
		short: "Contract",
		name: "Estimate and contract",
		phase: "Design",
		grade: "contract",
		ownerWhy: "The money baseline is what stops informal scope drift.",
		ownerGets: "BOQ, signed contract, payment schedule.",
		teamDoes: "QS measures. Principal owns cash, exclusions and the change procedure.",
		principalOwns: "Commercial recommendation and change approvals.",
		specialists: ["qs", "principal"],
		artifacts: [
			"Measured BOQ",
			"Signed contract",
			"Payment schedule"
		]
	},
	{
		id: 8,
		short: "Mobilise",
		name: "Mobilisation",
		phase: "Build",
		grade: "contract",
		ownerWhy: "A messy setup damages coastal materials, the benchmark and the neighbours.",
		ownerGets: "Fenced site, displayed programme, induction record.",
		teamDoes: "Access, storage, temporary power, protection, ITP, neighbour notice.",
		principalOwns: "Readiness gate. Does not delegate it blindly.",
		specialists: [
			"supervisor",
			"safety",
			"principal"
		],
		artifacts: [
			"Mobilisation checklist",
			"ITP",
			"Baseline photographs"
		]
	},
	{
		id: 9,
		short: "Found",
		name: "Excavation and foundation",
		phase: "Build",
		grade: "plot",
		ownerWhy: "Once concrete covers the steel, correction is demolition.",
		ownerGets: "Signed founding, pre-pour photos, cube records.",
		teamDoes: "Founding strata inspected. Rebar, cover, blinding and cleanliness checked before pour.",
		principalOwns: "Inspection release. No verbal foundation change.",
		specialists: [
			"structural",
			"geotech",
			"inspector",
			"lab",
			"supervisor"
		],
		hold: "Founding strata accepted before footing concrete.",
		irreversible: "Reinforcement disappears under the pour.",
		artifacts: [
			"Setting-out report",
			"Founding acceptance",
			"Pre-pour checklist",
			"Pour card"
		]
	},
	{
		id: 10,
		short: "Plinth",
		name: "Plinth and buried services",
		phase: "Build",
		grade: "plot",
		ownerWhy: "A buried sleeve in the wrong place means breaking finished work.",
		ownerGets: "Level report, DPC record, underground as-built.",
		teamDoes: "Datum, drainage falls, damp-proofing, sleeves. No backfill over an unrecorded route.",
		principalOwns: "Concealment release against records.",
		specialists: [
			"structural",
			"mep",
			"supervisor"
		],
		hold: "Plinth, drainage and sleeves accepted before concealment.",
		artifacts: [
			"Level survey",
			"DPC checklist",
			"Underground as-built"
		]
	},
	{
		id: 11,
		short: "Frame",
		name: "RCC frame, floor by floor",
		phase: "Build",
		grade: "standard",
		ownerWhy: "The frame sets the geometry of the whole house. Errors travel through every finish.",
		ownerGets: "Floor pour cards, cube certificates, as-built frame.",
		teamDoes: "Each cycle: rebar, sleeves, pour, cure. Engineer signs. Cover is irreversible.",
		principalOwns: "Sequence, traceability, customer report. Not structural adequacy.",
		specialists: [
			"structural",
			"mep",
			"lab",
			"inspector",
			"supervisor"
		],
		hold: "Reinforcement, cover and MEP sleeves signed before each pour.",
		irreversible: "Cover and embedded services after the pour.",
		artifacts: [
			"Bar-bending schedule",
			"Mill certificates",
			"Cube register",
			"Curing log"
		]
	},
	{
		id: 12,
		short: "Envelope",
		name: "Masonry, roof, waterproofing",
		phase: "Build",
		grade: "plot",
		ownerWhy: "Vizag rain, humidity and salt punish envelope defects that finishes then hide.",
		ownerGets: "Roof report, flood-test record, photos before cover.",
		teamDoes: "Openings, falls, upstands, ponding test. Plaster waits on a pass.",
		principalOwns: "Sample approval, test witnessing, concealment release.",
		specialists: [
			"architect",
			"waterproofing",
			"inspector",
			"supervisor"
		],
		hold: "Envelope and waterproofing tested before plaster and flooring.",
		irreversible: "Flooring covering untested waterproofing.",
		artifacts: [
			"Masonry checks",
			"Waterproofing method",
			"Ponding test",
			"Retest record"
		]
	},
	{
		id: 13,
		short: "Services",
		name: "MEP rough-in and second fix",
		phase: "Build",
		grade: "contract",
		ownerWhy: "A socket can still move before plaster. After plaster it is demolition.",
		ownerGets: "Layouts, concealed-work photos, pressure and continuity tests.",
		teamDoes: "Freeze outlets with the owner. Test before plaster. Second-fix after finishes.",
		principalOwns: "User locations and the concealment hold.",
		specialists: [
			"mep",
			"inspector",
			"supervisor"
		],
		hold: "Concealed conduits and pipes tested and photographed before plaster.",
		artifacts: [
			"Coordinated MEP drawings",
			"Pressure / continuity tests",
			"Window and door schedule"
		]
	},
	{
		id: 14,
		short: "Finishes",
		name: "Plaster, floor, paint",
		phase: "Build",
		grade: "plot",
		ownerWhy: "Finish quality is visual. Samples turn a dispute into an agreed benchmark.",
		ownerGets: "Sample board, room sheets, snag list.",
		teamDoes: "Mock-ups, moisture checks, wet-area tests, room-by-room sign-off.",
		principalOwns: "Aesthetic acceptance and protection.",
		specialists: [
			"architect",
			"waterproofing",
			"inspector",
			"supervisor"
		],
		artifacts: [
			"Sample board",
			"Finish schedule",
			"Room inspection sheets"
		]
	},
	{
		id: 15,
		short: "External",
		name: "Compound and drainage",
		phase: "Build",
		grade: "plot",
		ownerWhy: "Bad grading sends monsoon water at the plinth and undoes the house.",
		ownerGets: "As-built external plan, drainage test, utility records.",
		teamDoes: "Gate, paving, falls away from the building, connections, reinstatement.",
		principalOwns: "External scope and owner acceptance.",
		specialists: [
			"surveyor",
			"mep",
			"architect",
			"supervisor"
		],
		artifacts: [
			"External layout",
			"Level / fall survey",
			"Drainage flow test"
		]
	},
	{
		id: 16,
		short: "Handover",
		name: "Commissioning and handover",
		phase: "Close",
		grade: "contract",
		ownerWhy: "Handover is evidence transfer, not a set of keys. Missing records make defects unarguable.",
		ownerGets: "Commissioning certificates, as-builts, warranties, keys, signed handover.",
		teamDoes: "Room-by-room walk, tests, snag close, final account, training.",
		principalOwns: "Completeness, money reconciliation, training.",
		specialists: [
			"mep",
			"inspector",
			"architect",
			"qs",
			"principal"
		],
		hold: "Life-safety and water issues closed before keys move.",
		artifacts: [
			"Commissioning sheets",
			"Closed snag list",
			"As-builts",
			"Handover certificate"
		]
	},
	{
		id: 17,
		short: "Defects",
		name: "Defect liability",
		phase: "Close",
		grade: "contract",
		ownerWhy: "A dated register separates workmanship from later alteration. Duration is in the contract, not a slogan.",
		ownerGets: "Defect register, repair photos, close-out statement.",
		teamDoes: "Triage leaks and safety first. Specialist diagnosis when it exceeds the principal.",
		principalOwns: "The single support channel and closure verification.",
		specialists: [
			"principal",
			"waterproofing",
			"mep",
			"structural"
		],
		artifacts: [
			"Defect register",
			"Repair evidence",
			"Close-out statement"
		]
	}
];
var CASH_GATES = [
	{
		id: "design",
		label: "Design and approval set",
		afterStage: 7,
		ownerNote: "You are paying for a priced, sanctioned design — not a sketch.",
		teamNote: "Release only with signed contract, BOQ and sanctioned set.",
		evidence: [
			"Sanctioned drawings",
			"Signed contract",
			"BOQ revision 0"
		]
	},
	{
		id: "substructure",
		label: "Substructure complete",
		afterStage: 10,
		ownerNote: "Founding and plinth are buried. Pay against the signed hold points.",
		teamNote: "Founding sign-off, cubes, DPC and underground as-built.",
		evidence: [
			"Founding acceptance",
			"Cube reports",
			"Underground as-built"
		]
	},
	{
		id: "frame",
		label: "Frame complete",
		afterStage: 11,
		ownerNote: "The RCC cycle is the last time the steel is visible.",
		teamNote: "Every floor pour card, cubes and engineer release.",
		evidence: [
			"Pour cards",
			"Cube group acceptance",
			"As-built frame"
		]
	},
	{
		id: "services",
		label: "Envelope and services rough-in",
		afterStage: 13,
		ownerNote: "Waterproofing and concealed pipes must be tested before finishes.",
		teamNote: "Ponding pass, pressure / continuity, pre-plaster photos.",
		evidence: [
			"Ponding test",
			"Pressure tests",
			"Concealed-work photos"
		]
	},
	{
		id: "finishes",
		label: "Finishes complete",
		afterStage: 14,
		ownerNote: "Room-by-room acceptance, not a corridor walk.",
		teamNote: "Samples, room sheets, open snags listed — not hidden.",
		evidence: [
			"Room sheets",
			"Snag list",
			"Wet-area retests"
		]
	},
	{
		id: "handover",
		label: "Handover and defects closed",
		afterStage: 16,
		ownerNote: "Keys move with the dossier. Retention waits on the contract gate.",
		teamNote: "Commissioning, as-builts, warranties, final account.",
		evidence: [
			"Handover certificate",
			"Dossier manifest",
			"Final account"
		]
	}
];
var COASTAL_STRIP = {
	class: "Severe",
	proof: "IS 456:2000 Table 3 places coastal environment in severe — not very severe. Very severe is sea-water spray. Extreme is the tidal zone.",
	grade: "M30",
	cement: "320 kg/m³",
	wc: "0.45",
	cover: "45 mm",
	note: "Each member is still the structural engineer’s call, written on the drawings."
};
var OWNER_ONLY_JOBS = [
	"Bring a plot with a clear title path",
	"Set a cash envelope and keep it funded at the gates",
	"Freeze rooms and outlets while they can still move",
	"Approve variations before they are built",
	"Walk the hold points you are asked to see"
];
var TEAM_RUNS = [
	"Survey, soil, design and statutory submission",
	"Named specialists who sign their own work",
	"Pours that wait on hold points",
	"Tests with chain of custody",
	"A dossier another builder could pick up"
];
function id(prefix) {
	return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}
function nowIso() {
	return (/* @__PURE__ */ new Date()).toISOString();
}
function houseNameFrom(ownerName) {
	const last = ownerName.trim().split(/\s+/).filter(Boolean).at(-1);
	return last ? `${last} House` : "The House File";
}
function createHouseFromIntake(input) {
	const budget = input.budgetLakhs;
	const designAmount = Math.round(budget * .08 * 10) / 10;
	const remainingGates = CASH_GATES.slice(1);
	const rest = budget - designAmount - Math.round(budget * .05 * 10) / 10;
	const each = Math.round(rest / remainingGates.length * 10) / 10;
	return {
		id: id("house"),
		createdAt: nowIso(),
		plot: {
			sizeYd: input.sizeYd,
			locality: input.locality,
			floors: input.floors,
			ownerName: input.ownerName.trim() || "Owner",
			houseName: houseNameFrom(input.ownerName)
		},
		cash: {
			budgetLakhs: budget,
			paidLakhs: 0,
			committedLakhs: designAmount,
			retentionLakhs: Math.round(budget * .05 * 10) / 10,
			contingencyLakhs: Math.round(budget * .06 * 10) / 10
		},
		stages: STAGES.map((s, i) => ({
			id: s.id,
			status: i === 0 ? "in_progress" : "locked"
		})),
		gates: CASH_GATES.map((g, i) => ({
			id: g.id,
			status: i === 0 ? "upcoming" : "upcoming",
			amountLakhs: i === 0 ? designAmount : each
		})),
		specialists: SPECIALISTS.map((s) => ({
			id: s.id,
			status: s.id === "principal" ? "engaged" : "pending"
		})),
		ncrs: [],
		variations: [],
		activity: [{
			id: id("act"),
			at: nowIso(),
			actor: "system",
			text: `${houseNameFrom(input.ownerName)} opened. Plot ${input.sizeYd} sq yd in ${input.locality}. Cash envelope ${budget} L. Brief is the first gate.`,
			stageId: 1
		}],
		currentStageId: 1
	};
}
function createDemoHouse() {
	return {
		id: "demo-rao-house",
		createdAt: "2026-04-12T08:00:00.000Z",
		plot: {
			sizeYd: 200,
			locality: "MVP Colony",
			floors: "G+1",
			ownerName: "Ananya Rao",
			houseName: "Rao House"
		},
		cash: {
			budgetLakhs: 68,
			paidLakhs: 31.4,
			committedLakhs: 42.1,
			retentionLakhs: 3.4,
			contingencyLakhs: 2.8
		},
		stages: STAGES.map((s) => {
			if (s.id < 11) return {
				id: s.id,
				status: "complete"
			};
			if (s.id === 11) return {
				id: s.id,
				status: "held"
			};
			if (s.id === 12) return {
				id: s.id,
				status: "ready"
			};
			return {
				id: s.id,
				status: "locked"
			};
		}),
		gates: [
			{
				id: "design",
				status: "paid",
				amountLakhs: 5.4
			},
			{
				id: "substructure",
				status: "payable",
				amountLakhs: 12.6,
				submittedAt: "2026-08-28T10:00:00.000Z"
			},
			{
				id: "frame",
				status: "upcoming",
				amountLakhs: 14.2
			},
			{
				id: "services",
				status: "upcoming",
				amountLakhs: 11
			},
			{
				id: "finishes",
				status: "upcoming",
				amountLakhs: 13.4
			},
			{
				id: "handover",
				status: "upcoming",
				amountLakhs: 8
			}
		],
		specialists: SPECIALISTS.map((s) => {
			const signed = [
				"principal",
				"surveyor",
				"geotech",
				"architect",
				"structural",
				"qs",
				"lab",
				"inspector",
				"safety",
				"supervisor"
			];
			const engaged = ["mep", "waterproofing"];
			if (signed.includes(s.id)) return {
				id: s.id,
				status: "signed"
			};
			if (engaged.includes(s.id)) return {
				id: s.id,
				status: "engaged"
			};
			return {
				id: s.id,
				status: "pending"
			};
		}),
		ncrs: [{
			id: "ncr-c2",
			title: "Cover blocks missing at column C2",
			location: "First floor, grid C2",
			severity: "hold",
			status: "open",
			stageId: 11
		}],
		variations: [{
			id: "var-balcony",
			title: "Extra balcony waterproofing upstand",
			amountLakhs: 1.4,
			status: "proposed",
			effect: "Adds two days after the envelope gate. No structural change."
		}],
		activity: [
			{
				id: "a1",
				at: "2026-04-12T08:00:00.000Z",
				actor: "owner",
				text: "Ananya handed over a 200 sq yd plot in MVP Colony and a ₹68 L envelope.",
				stageId: 1
			},
			{
				id: "a2",
				at: "2026-05-03T11:20:00.000Z",
				actor: "team",
				text: "Sanctioned set logged. Approval gate released.",
				stageId: 6
			},
			{
				id: "a3",
				at: "2026-06-18T07:40:00.000Z",
				actor: "team",
				text: "Founding strata accepted by geotech and structural. Footing poured.",
				stageId: 9
			},
			{
				id: "a4",
				at: "2026-08-28T10:05:00.000Z",
				actor: "team",
				text: "Substructure payment pack submitted — founding, cubes, underground as-built.",
				stageId: 10
			},
			{
				id: "a5",
				at: "2026-09-04T16:10:00.000Z",
				actor: "team",
				text: "First-floor slab held. Column C2 cover blocks not accepted.",
				stageId: 11
			},
			{
				id: "a6",
				at: "2026-09-05T09:15:00.000Z",
				actor: "system",
				text: "Both seats are looking at the same file. The pour waits.",
				stageId: 11
			}
		],
		currentStageId: 11
	};
}
function nid(prefix) {
	return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}
function stamp() {
	return (/* @__PURE__ */ new Date()).toISOString();
}
var useHouse = create()(persist((set, get) => ({
	seat: "together",
	tab: "journey",
	selectedStageId: 11,
	project: null,
	hasSeenIntro: false,
	setSeat: (seat) => set({ seat }),
	setTab: (tab) => set({ tab }),
	selectStage: (id) => set({ selectedStageId: id }),
	startFromPlot: (input) => {
		set({
			project: createHouseFromIntake(input),
			selectedStageId: 1,
			tab: "journey",
			seat: "together",
			hasSeenIntro: true
		});
	},
	openDemo: () => {
		set({
			project: createDemoHouse(),
			selectedStageId: 11,
			tab: "journey",
			seat: "together",
			hasSeenIntro: true
		});
	},
	resetHouse: () => set({
		project: null,
		selectedStageId: 1,
		tab: "journey",
		hasSeenIntro: false
	}),
	completeBrief: () => {
		const project = get().project;
		if (!project) return;
		const stages = project.stages.map((s) => {
			if (s.id === 1) return {
				...s,
				status: "complete"
			};
			if (s.id === 2) return {
				...s,
				status: "in_progress"
			};
			return s;
		});
		const specialists = project.specialists.map((s) => s.id === "surveyor" || s.id === "architect" ? {
			...s,
			status: "engaged"
		} : s);
		set({
			project: {
				...project,
				stages,
				specialists,
				currentStageId: 2,
				activity: [{
					id: nid("act"),
					at: stamp(),
					actor: "owner",
					text: "Brief signed. Title and survey may start.",
					stageId: 1
				}, ...project.activity]
			},
			selectedStageId: 2
		});
	},
	releaseHold: () => {
		const project = get().project;
		if (!project) return;
		if (project.ncrs.find((n) => n.status === "open" && n.severity === "hold")) return;
		const current = project.stages.find((s) => s.id === project.currentStageId);
		if (!current || current.status !== "held" && current.status !== "in_progress") return;
		const nextId = Math.min(current.id + 1, 17);
		const nextDef = STAGES.find((s) => s.id === nextId);
		const nextHeld = Boolean(nextDef?.hold) && nextId !== current.id;
		const stages = project.stages.map((s) => {
			if (s.id === current.id) return {
				...s,
				status: "complete"
			};
			if (s.id === nextId && nextId !== current.id) return {
				...s,
				status: nextHeld ? "held" : "in_progress"
			};
			return s;
		});
		const specialists = project.specialists.map((s) => {
			if (nextId >= 12 && s.id === "waterproofing") return {
				...s,
				status: "engaged"
			};
			if (current.id >= 11 && s.id === "structural") return {
				...s,
				status: "signed"
			};
			return s;
		});
		set({
			project: {
				...project,
				stages,
				specialists,
				currentStageId: nextId,
				activity: [{
					id: nid("act"),
					at: stamp(),
					actor: "team",
					text: `${STAGES.find((s) => s.id === current.id)?.name ?? "Stage"} released. Next: ${nextDef?.name ?? "close-out"}.`,
					stageId: current.id
				}, ...project.activity]
			},
			selectedStageId: nextId
		});
	},
	raiseNcr: (title, location) => {
		const project = get().project;
		if (!project) return;
		const ncr = {
			id: nid("ncr"),
			title,
			location,
			severity: "hold",
			status: "open",
			stageId: project.currentStageId
		};
		const stages = project.stages.map((s) => s.id === project.currentStageId ? {
			...s,
			status: "held"
		} : s);
		set({ project: {
			...project,
			ncrs: [ncr, ...project.ncrs],
			stages,
			activity: [{
				id: nid("act"),
				at: stamp(),
				actor: "team",
				text: `NCR raised: ${title}. Gate held.`,
				stageId: project.currentStageId
			}, ...project.activity]
		} });
	},
	closeNcr: (id) => {
		const project = get().project;
		if (!project) return;
		const ncrs = project.ncrs.map((n) => n.id === id ? {
			...n,
			status: "closed"
		} : n);
		const stillHeld = ncrs.some((n) => n.status === "open" && n.severity === "hold");
		const stages = project.stages.map((s) => s.id === project.currentStageId && s.status === "held" && !stillHeld ? {
			...s,
			status: "in_progress"
		} : s);
		const closed = project.ncrs.find((n) => n.id === id);
		set({ project: {
			...project,
			ncrs,
			stages,
			activity: [{
				id: nid("act"),
				at: stamp(),
				actor: "team",
				text: `NCR closed: ${closed?.title ?? id}.`,
				stageId: closed?.stageId
			}, ...project.activity]
		} });
	},
	submitGate: (gateId) => {
		const project = get().project;
		if (!project) return;
		const def = CASH_GATES.find((g) => g.id === gateId);
		const gate = project.gates.find((g) => g.id === gateId);
		if (!gate || gate.status === "paid" || gate.status === "payable") return;
		const gates = project.gates.map((g) => g.id === gateId ? {
			...g,
			status: "payable",
			submittedAt: stamp()
		} : g);
		set({
			project: {
				...project,
				gates,
				activity: [{
					id: nid("act"),
					at: stamp(),
					actor: "team",
					text: `Payment pack submitted for ${def?.label ?? gateId} — ${gate.amountLakhs} L.`,
					stageId: def?.afterStage
				}, ...project.activity]
			},
			tab: "cash"
		});
	},
	approveGate: (gateId) => {
		const project = get().project;
		if (!project) return;
		const gate = project.gates.find((g) => g.id === gateId);
		const def = CASH_GATES.find((g) => g.id === gateId);
		if (!gate || gate.status !== "payable") return;
		const gates = project.gates.map((g) => g.id === gateId ? {
			...g,
			status: "paid"
		} : g);
		set({ project: {
			...project,
			gates,
			cash: {
				...project.cash,
				paidLakhs: Math.round((project.cash.paidLakhs + gate.amountLakhs) * 10) / 10
			},
			activity: [{
				id: nid("act"),
				at: stamp(),
				actor: "owner",
				text: `Released ${gate.amountLakhs} L against ${def?.label ?? gateId}.`,
				stageId: def?.afterStage
			}, ...project.activity]
		} });
	},
	decideVariation: (id, approved) => {
		const project = get().project;
		if (!project) return;
		const v = project.variations.find((x) => x.id === id);
		if (!v || v.status !== "proposed") return;
		const variations = project.variations.map((x) => x.id === id ? {
			...x,
			status: approved ? "approved" : "declined"
		} : x);
		const cash = approved ? {
			...project.cash,
			committedLakhs: Math.round((project.cash.committedLakhs + v.amountLakhs) * 10) / 10,
			budgetLakhs: Math.round((project.cash.budgetLakhs + v.amountLakhs) * 10) / 10
		} : project.cash;
		set({ project: {
			...project,
			variations,
			cash,
			activity: [{
				id: nid("act"),
				at: stamp(),
				actor: "owner",
				text: approved ? `Variation approved: ${v.title} (+${v.amountLakhs} L).` : `Variation declined: ${v.title}.`
			}, ...project.activity]
		} });
	},
	logNote: (text) => {
		const project = get().project;
		if (!project || !text.trim()) return;
		const actor = get().seat === "owner" ? "owner" : "team";
		set({ project: {
			...project,
			activity: [{
				id: nid("act"),
				at: stamp(),
				actor,
				text: text.trim(),
				stageId: project.currentStageId
			}, ...project.activity]
		} });
	}
}), {
	name: "buildvizag-house-v1",
	skipHydration: true,
	partialize: (s) => ({
		seat: s.seat,
		tab: s.tab,
		selectedStageId: s.selectedStageId,
		project: s.project,
		hasSeenIntro: s.hasSeenIntro
	})
}));
function CashBoard({ project }) {
	const seat = useHouse((s) => s.seat);
	const approveGate = useHouse((s) => s.approveGate);
	const submitGate = useHouse((s) => s.submitGate);
	const decideVariation = useHouse((s) => s.decideVariation);
	const remaining = Math.round((project.cash.budgetLakhs - project.cash.paidLakhs) * 10) / 10;
	const showOwner = seat === "owner" || seat === "together";
	const showTeam = seat === "team" || seat === "together";
	const chart = CASH_GATES.map((g) => {
		const state = project.gates.find((x) => x.id === g.id);
		return {
			name: g.label.split(" ")[0],
			Paid: state.status === "paid" ? state.amountLakhs : 0,
			Due: state.status === "payable" ? state.amountLakhs : 0,
			Later: state.status === "upcoming" || state.status === "submitted" ? state.amountLakhs : 0
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Envelope",
						value: formatLakhs(project.cash.budgetLakhs)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Paid against gates",
						value: formatLakhs(project.cash.paidLakhs)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Committed",
						value: formatLakhs(project.cash.committedLakhs)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Still in the file",
						value: formatLakhs(remaining)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-wider text-muted",
						children: "Cash follows evidence, not a calendar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-52",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: chart,
								barGap: 4,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "name",
										tick: {
											fill: "var(--color-muted)",
											fontSize: 11
										},
										axisLine: false,
										tickLine: false
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										tick: {
											fill: "var(--color-muted)",
											fontSize: 11
										},
										axisLine: false,
										tickLine: false,
										width: 28
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
										cursor: { fill: "color-mix(in oklab, var(--color-ink) 4%, transparent)" },
										contentStyle: {
											background: "var(--color-surface)",
											border: "1px solid var(--color-line)",
											borderRadius: 8,
											fontSize: 12
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "Paid",
										stackId: "a",
										fill: "var(--color-ok)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "Due",
										stackId: "a",
										fill: "var(--color-hold)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "Later",
										stackId: "a",
										fill: "var(--color-mist)",
										radius: [
											4,
											4,
											0,
											0
										]
									})
								]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-4 text-xs text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-sm bg-ok" }), " Paid"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-sm bg-hold" }), " Waiting on you"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-sm bg-mist" }), " Later"]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: CASH_GATES.map((g) => {
					const state = project.gates.find((x) => x.id === g.id);
					const stageDone = (project.stages.find((s) => s.id === g.afterStage)?.status ?? "locked") === "complete";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] md:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: g.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs text-muted",
									children: ["After ", STAGES.find((s) => s.id === g.afterStage)?.name]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-sm tabular-nums",
										children: formatLakhs(state.amountLakhs)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GatePill, { status: state.status })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: showOwner && showTeam ? "mt-4 grid gap-3 md:grid-cols-2" : "mt-4",
								children: [showOwner ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-ink",
										children: "You. "
									}), g.ownerNote]
								}) : null, showTeam ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-ink",
										children: "Team. "
									}), g.teamNote]
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-xs text-muted",
								children: ["Evidence: ", g.evidence.join(" · ")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: [showTeam && state.status === "upcoming" && stageDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									onClick: () => {
										submitGate(g.id);
										toast.success("Pack submitted. Waiting on the owner.");
									},
									children: "Submit payment pack"
								}) : null, showOwner && state.status === "payable" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									onClick: () => {
										approveGate(g.id);
										toast.success(`${formatLakhs(state.amountLakhs)} released.`);
									},
									children: "Release this money"
								}) : null]
							})
						]
					}, g.id);
				})
			}),
			project.variations.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wider text-muted",
					children: "Variations — written before, not billed after"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-3",
					children: project.variations.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-wrap items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: v.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: v.effect
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-sm tabular-nums",
								children: formatLakhs(v.amountLakhs)
							}), v.status === "proposed" && showOwner ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								onClick: () => {
									decideVariation(v.id, true);
									toast.success("Variation on the file.");
								},
								children: "Approve"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								variant: "outline",
								onClick: () => decideVariation(v.id, false),
								children: "Decline"
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs capitalize text-muted",
								children: v.status
							})]
						})]
					}, v.id))
				})]
			}) : null
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium uppercase tracking-wider text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 font-display text-3xl tabular-nums",
			children: value
		})]
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md border border-line bg-surface px-3 text-sm text-ink shadow-[var(--shadow-border)] placeholder:text-faint outline-none transition-shadow duration-150 focus-visible:ring-2 focus-visible:ring-accent/35", className),
		...props
	});
}
function EvidenceBoard({ project }) {
	const seat = useHouse((s) => s.seat);
	const logNote = useHouse((s) => s.logNote);
	const [note, setNote] = (0, import_react.useState)("");
	const holds = STAGES.filter((s) => s.hold).map((s) => ({
		...s,
		status: project.stages.find((x) => x.id === s.id)?.status ?? "locked"
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-wider text-muted",
						children: "Coastal exposure · this plot"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-display text-2xl",
						children: [
							"Class ",
							COASTAL_STRIP.class,
							" · ",
							COASTAL_STRIP.grade,
							" · cover",
							" ",
							COASTAL_STRIP.cover
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 max-w-2xl text-sm text-muted",
						children: [
							COASTAL_STRIP.proof,
							" ",
							COASTAL_STRIP.note
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-muted",
								children: "Cement"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-mono tabular-nums",
								children: COASTAL_STRIP.cement
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-muted",
								children: "Max w/c"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-mono tabular-nums",
								children: COASTAL_STRIP.wc
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-muted",
								children: "Grade"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-mono tabular-nums",
								children: COASTAL_STRIP.grade
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-muted",
								children: "Cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "font-mono tabular-nums",
								children: COASTAL_STRIP.cover
							})] })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-wider text-muted",
				children: "Irreversible holds"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2",
				children: holds.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-wrap items-start justify-between gap-2 rounded-lg bg-surface px-4 py-3 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-medium",
						children: [
							String(h.id).padStart(2, "0"),
							" · ",
							h.short
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: h.hold
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs capitalize text-muted",
						children: h.status.replace("_", " ")
					})]
				}, h.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wider text-muted",
					children: "Shared log"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-3 flex flex-col gap-2 sm:flex-row",
					onSubmit: (e) => {
						e.preventDefault();
						if (!note.trim()) return;
						logNote(note);
						setNote("");
						toast.success("On the shared file.");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: note,
						onChange: (e) => setNote(e.target.value),
						placeholder: seat === "owner" ? "A question or a decision, in writing" : "Site note, instruction, or exception"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						variant: "outline",
						className: "sm:w-36",
						children: "Post to file"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 space-y-3",
					children: project.activity.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[88px_1fr] gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
							className: "font-mono text-xs tabular-nums text-muted",
							children: format(new Date(a.at), "dd MMM HH:mm")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium capitalize",
							children: a.actor
						}), a.stageId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted",
							children: [
								" ",
								"· stage ",
								String(a.stageId).padStart(2, "0")
							]
						}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: a.text
						})] })]
					}, a.id))
				})
			] })
		]
	});
}
function Journey({ project }) {
	const seat = useHouse((s) => s.seat);
	const selectedStageId = useHouse((s) => s.selectedStageId);
	const selectStage = useHouse((s) => s.selectStage);
	const selected = STAGES.find((s) => s.id === selectedStageId) ?? STAGES[0];
	const status = project.stages.find((s) => s.id === selected.id)?.status ?? "locked";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible",
			children: STAGES.map((stage) => {
				const st = project.stages.find((s) => s.id === stage.id)?.status ?? "locked";
				const active = stage.id === selected.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => selectStage(stage.id),
						className: cn("flex h-11 w-full min-w-36 items-center gap-3 rounded-md px-3 text-left text-sm transition-colors duration-150 lg:min-w-0", active ? "bg-ink text-bg" : "hover:bg-surface-2"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs tabular-nums opacity-60",
								children: String(stage.id).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 truncate font-medium",
								children: stage.short
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusDot, {
								status: st,
								onInk: active
							})
						]
					})
				}, stage.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageDetail, {
			project,
			stageId: selected.id,
			status,
			seat
		})]
	});
}
function StatusDot({ status, onInk }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", status === "held" ? "bg-hold" : status === "complete" || status === "released" ? "bg-ok" : status === "in_progress" ? onInk ? "bg-mist" : "bg-accent" : onInk ? "bg-bg/40" : "bg-faint/50") });
}
function StageDetail({ project, stageId, status, seat }) {
	const def = STAGES.find((s) => s.id === stageId);
	const showOwner = seat === "owner" || seat === "together";
	const showTeam = seat === "team" || seat === "together";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-medium uppercase tracking-[0.16em] text-muted",
					children: [
						"Stage ",
						String(def.id).padStart(2, "0"),
						" · ",
						def.phase
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 text-3xl",
					children: def.name
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StagePill, { status }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GradeChip, { grade: def.grade })]
				})]
			}),
			def.hold && (status === "held" || status === "in_progress") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 flex items-start gap-2 rounded-md bg-hold/8 px-3 py-2 text-sm text-hold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, { className: "mt-0.5 size-4 shrink-0" }), def.hold]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("mt-6 grid gap-4", showOwner && showTeam ? "md:grid-cols-2" : "grid-cols-1"),
				children: [showOwner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lane, {
					kicker: "You",
					title: "Why this gate exists",
					body: def.ownerWhy,
					rec: def.ownerGets,
					recLabel: "What you receive"
				}), showTeam && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lane, {
					kicker: "Team",
					title: "What we actually do",
					body: def.teamDoes,
					rec: def.principalOwns,
					recLabel: "Principal owns"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wider text-muted",
					children: "Who signs"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-1.5",
					children: def.specialists.map((id) => {
						const spec = SPECIALISTS.find((s) => s.id === id);
						const st = project.specialists.find((s) => s.id === id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: spec?.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: st?.status === "signed" ? "Signed" : st?.status === "engaged" ? "Engaged" : "Pending"
							})]
						}, id);
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wider text-muted",
					children: "Evidence on this gate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-1.5",
					children: def.artifacts.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, { className: "size-3.5 text-accent" }), a]
					}, a))
				})] })]
			}),
			def.irreversible && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 text-sm text-muted",
				children: ["Irreversible: ", def.irreversible]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageActions, {
				project,
				stageId,
				status,
				seat
			})
		]
	});
}
function Lane({ kicker, title, body, rec, recLabel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-bg p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-wider text-accent",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 font-sans text-base font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs font-medium uppercase tracking-wider text-muted",
				children: recLabel
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm",
				children: rec
			})
		]
	});
}
function StageActions({ project, stageId, status, seat }) {
	const completeBrief = useHouse((s) => s.completeBrief);
	const releaseHold = useHouse((s) => s.releaseHold);
	const closeNcr = useHouse((s) => s.closeNcr);
	const raiseNcr = useHouse((s) => s.raiseNcr);
	const [ncrTitle, setNcrTitle] = (0, import_react.useState)("");
	const [checked, setChecked] = (0, import_react.useState)([
		false,
		false,
		false
	]);
	const openNcrs = project.ncrs.filter((n) => n.status === "open" && n.stageId === stageId);
	const isCurrent = project.currentStageId === stageId;
	const showTeam = seat === "team" || seat === "together";
	const showOwner = seat === "owner" || seat === "together";
	if (status === "locked") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-6 flex items-center gap-2 text-sm text-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4" }), "Previous gate must exist as evidence before this one opens."]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 space-y-4 border-t border-line pt-5",
		children: [
			showOwner && stageId === 1 && status === "in_progress" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: "The brief is the only thing you sign first."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						completeBrief();
						toast.success("Brief signed. Diligence is open.");
					},
					children: "Sign the brief"
				})]
			}),
			showTeam && isCurrent && openNcrs.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg bg-hold/8 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 text-sm font-medium text-hold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-4" }), "Open hold items — the pour cannot move"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: openNcrs.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-wrap items-center justify-between gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [n.title, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted",
							children: [" · ", n.location]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => {
								closeNcr(n.id);
								toast.success("NCR closed after reinspection.");
							},
							children: "Close after reinspect"
						})]
					}, n.id))
				})]
			}),
			showTeam && isCurrent && (status === "held" || status === "in_progress") && stageId !== 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg bg-bg p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium",
						children: "Release this gate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: "All three must be true. The person in a hurry cannot waive them."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 space-y-2",
						children: [
							"Photographs indexed to grid and drawing revision",
							"Discipline specialist has signed, not the principal",
							"No open hold NCR on this stage"
						].map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-start gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: "mt-1 size-4 accent-accent",
								checked: checked[i],
								onChange: (e) => {
									const next = [...checked];
									next[i] = e.target.checked;
									setChecked(next);
								}
							}), label]
						}, label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "mt-4",
						disabled: checked.some((c) => !c) || project.ncrs.some((n) => n.status === "open" && n.severity === "hold" && n.stageId === stageId),
						onClick: () => {
							releaseHold();
							setChecked([
								false,
								false,
								false
							]);
							toast.success("Gate released. Next stage is live.");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), "Release gate"]
					})
				]
			}),
			showTeam && isCurrent && status !== "complete" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-2 sm:flex-row",
				onSubmit: (e) => {
					e.preventDefault();
					if (!ncrTitle.trim()) return;
					raiseNcr(ncrTitle.trim(), `Stage ${stageId} · site`);
					setNcrTitle("");
					toast.message("Hold raised. Concealment is blocked.");
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: ncrTitle,
					onChange: (e) => setNcrTitle(e.target.value),
					placeholder: "Raise a hold — location and defect"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					variant: "hold",
					className: "sm:w-44",
					children: "Hold the gate"
				})]
			})
		]
	});
}
function PeopleBoard({ project }) {
	const seat = useHouse((s) => s.seat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-ink p-5 text-bg md:p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.16em] text-mist",
				children: "One principal, many specialists"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl font-display text-2xl md:text-3xl",
				children: "A single person can be accountable for a house. A single person cannot be the surveyor, the laboratory and the person who checks all three."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3 md:grid-cols-2",
			children: SPECIALISTS.map((s) => {
				const st = project.specialists.find((x) => x.id === s.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] md:p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: s.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: s.signs
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: st?.status === "signed" ? "ok" : st?.status === "engaged" ? "mist" : "faint",
							children: st?.status ?? "pending"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: seat === "team" ? s.teamSees : s.ownerSees
					})]
				}, s.id);
			})
		})]
	});
}
function PlotMark({ className, invert = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-8", invert ? "text-bg" : "text-ink", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "3.5",
			y: "3.5",
			width: "25",
			height: "25",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.4"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "9",
			y: "11",
			width: "14",
			height: "13",
			className: invert ? "fill-mist" : "fill-accent"
		})]
	});
}
var SEATS = [
	{
		id: "owner",
		label: "You",
		hint: "Owner",
		icon: House
	},
	{
		id: "together",
		label: "Together",
		hint: "Both seats",
		icon: Columns2
	},
	{
		id: "team",
		label: "Team",
		hint: "Site",
		icon: HardHat
	}
];
function SeatSwitch({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "tablist",
		"aria-label": "Whose seat",
		className: "grid grid-cols-3 rounded-lg bg-surface-2 p-1",
		children: SEATS.map((s) => {
			const Icon = s.icon;
			const active = value === s.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				role: "tab",
				"aria-selected": active,
				onClick: () => onChange(s.id),
				className: cn("flex h-10 items-center justify-center gap-1.5 rounded-md px-2 text-xs font-medium transition-[background-color,color,box-shadow] duration-150", active ? "bg-surface text-ink shadow-[var(--shadow-border)]" : "text-muted hover:text-ink"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "size-3.5",
						strokeWidth: 1.75
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: s.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sm:hidden",
						children: s.label
					})
				]
			}, s.id);
		})
	});
}
var TABS = [
	{
		id: "journey",
		label: "Journey",
		icon: Layers
	},
	{
		id: "cash",
		label: "Cash",
		icon: IndianRupee
	},
	{
		id: "people",
		label: "People",
		icon: Users
	},
	{
		id: "evidence",
		label: "Evidence",
		icon: BookOpen
	}
];
function HouseShell() {
	const project = useHouse((s) => s.project);
	const seat = useHouse((s) => s.seat);
	const tab = useHouse((s) => s.tab);
	const setSeat = useHouse((s) => s.setSeat);
	const setTab = useHouse((s) => s.setTab);
	const resetHouse = useHouse((s) => s.resetHouse);
	if (!project) return null;
	const current = STAGES.find((s) => s.id === project.currentStageId);
	const currentStatus = project.stages.find((s) => s.id === project.currentStageId)?.status;
	const payable = project.gates.filter((g) => g.status === "payable");
	const openHolds = project.ncrs.filter((n) => n.status === "open");
	const done = project.stages.filter((s) => s.status === "complete").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg pb-24 md:pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-line bg-surface/90 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlotMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold leading-tight",
								children: project.plot.houseName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									project.plot.sizeYd,
									" sq yd ·",
									" ",
									sqFtFromYards(project.plot.sizeYd).toLocaleString("en-IN"),
									" sq ft · ",
									project.plot.locality,
									" · ",
									project.plot.floors
								]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: resetHouse,
								children: "New plot"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-56 sm:w-72",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeatSwitch, {
									value: seat,
									onChange: setSeat
								})
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Strip, {
								label: "Now",
								value: `${String(project.currentStageId).padStart(2, "0")} ${current?.short ?? ""}`,
								hint: currentStatus === "held" ? "Held until evidence exists" : current?.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Strip, {
								label: "Cash",
								value: formatLakhs(project.cash.paidLakhs),
								hint: payable.length ? `${payable.length} pack waiting on the owner` : `${formatLakhs(project.cash.budgetLakhs)} envelope`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Strip, {
								label: "Gates",
								value: `${done} / 17`,
								hint: openHolds.length ? `${openHolds.length} open hold` : "No open hold items"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "sticky top-0 z-20 border-b border-line bg-bg/95 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2 md:px-8",
					children: TABS.map((t) => {
						const Icon = t.icon;
						const active = tab === t.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setTab(t.id),
							className: cn("flex h-11 shrink-0 items-center gap-2 rounded-md px-3 text-sm font-medium", active ? "bg-ink text-bg" : "text-muted hover:bg-surface-2"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-4",
								strokeWidth: 1.75
							}), t.label]
						}, t.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-8",
				children: [
					tab === "journey" && seat === "together" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-5 max-w-2xl text-sm text-muted",
						children: "Together mode is the middle of the file: your decisions on the left of a gate, the team’s signatures on the right. Same house. Same numbers."
					}),
					tab === "journey" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Journey, { project }),
					tab === "cash" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CashBoard, { project }),
					tab === "people" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeopleBoard, { project }),
					tab === "evidence" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceBoard, { project })
				]
			})
		]
	});
}
function Strip({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-bg px-3 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-wider text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium tabular-nums",
				children: value
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "truncate text-xs text-muted",
				children: hint
			}) : null
		]
	});
}
var SCALE = {
	120: {
		w: 72,
		h: 58
	},
	150: {
		w: 78,
		h: 66
	},
	200: {
		w: 92,
		h: 72
	},
	220: {
		w: 98,
		h: 76
	}
};
function Footprint({ size, active = false, className }) {
	const { w, h } = SCALE[size];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 120 96",
		className: cn("h-16 w-20", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: (120 - w) / 2,
			y: (96 - h) / 2,
			width: w,
			height: h,
			fill: "none",
			stroke: "currentColor",
			strokeOpacity: active ? 1 : .35,
			strokeWidth: "1.5"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: (120 - w) / 2 + w * .18,
			y: (96 - h) / 2 + h * .28,
			width: w * .64,
			height: h * .52,
			fill: "currentColor",
			fillOpacity: active ? 1 : .12
		})]
	});
}
function Landing({ ready = true }) {
	const startFromPlot = useHouse((s) => s.startFromPlot);
	const openDemo = useHouse((s) => s.openDemo);
	const [name, setName] = (0, import_react.useState)("Ananya Rao");
	const [size, setSize] = (0, import_react.useState)(200);
	const [locality, setLocality] = (0, import_react.useState)("MVP Colony");
	const [floors, setFloors] = (0, import_react.useState)("G+1");
	const [budget, setBudget] = (0, import_react.useState)(68);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center justify-between px-5 py-5 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlotMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold tracking-tight",
					children: "BuildVizag"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "Visakhapatnam · one house"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				size: "sm",
				disabled: !ready,
				onClick: openDemo,
				children: "Open a house on site"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-4 md:grid-cols-12 md:px-10 md:pt-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-accent",
						children: "Plot and cash. We run the rest."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-lg text-4xl text-ink md:text-5xl",
						children: "One residential unit. Two seats. The same file."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md text-base text-muted",
						children: "You bring a 120–220 sq yd plot and a cash envelope. The team recruits the specialists, holds the pours, and opens every gate against evidence — while you watch the same journey they do."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DutyCard, {
							icon: LandPlot,
							title: "You",
							items: OWNER_ONLY_JOBS.slice(0, 3)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DutyCard, {
							icon: Wallet,
							title: "The team",
							items: TEAM_RUNS.slice(0, 3)
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] md:col-span-6 md:p-6",
				onSubmit: (e) => {
					e.preventDefault();
					startFromPlot({
						ownerName: name,
						sizeYd: size,
						locality,
						floors,
						budgetLakhs: budget
					});
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl",
						children: "Hand over the plot"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Four facts. Everything after this is a named specialist and a gate."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-6 block text-xs font-medium uppercase tracking-wider text-muted",
						children: ["Your name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "mt-2",
							value: name,
							onChange: (e) => setName(e.target.value),
							autoComplete: "name"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-xs font-medium uppercase tracking-wider text-muted",
						children: "Plot size"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4",
						children: PLOT_SIZES.map((yd) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSize(yd),
							className: cn("rounded-lg p-2 text-left transition-shadow duration-150", size === yd ? "bg-accent text-accent-fg shadow-[var(--shadow-border)]" : "bg-surface-2 text-ink hover:bg-line"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footprint, {
									size: yd,
									active: size === yd,
									className: cn("h-12 w-full", size === yd ? "text-mist" : "text-ink")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm font-semibold",
									children: [yd, " sq yd"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: cn("text-xs", size === yd ? "text-mist" : "text-muted"),
									children: [sqFtFromYards(yd).toLocaleString("en-IN"), " sq ft"]
								})
							]
						}, yd))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted",
						children: PLOT_NOTES[size]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-xs font-medium uppercase tracking-wider text-muted",
						children: "Locality"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex flex-wrap gap-1.5",
						children: LOCALITIES.map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setLocality(loc),
							className: cn("h-9 rounded-full px-3 text-xs font-medium", locality === loc ? "bg-ink text-bg" : "bg-surface-2 text-ink hover:bg-line"),
							children: loc
						}, loc))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-xs font-medium uppercase tracking-wider text-muted",
						children: "Floors"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid grid-cols-3 gap-2",
						children: Object.keys(FLOOR_COPY).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setFloors(f),
							className: cn("rounded-lg px-3 py-3 text-left", floors === f ? "bg-ink text-bg" : "bg-surface-2"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: FLOOR_COPY[f].label
							})
						}, f))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted",
						children: FLOOR_COPY[floors].note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-5 block text-xs font-medium uppercase tracking-wider text-muted",
						children: [
							"Cash envelope · ",
							budget,
							" lakh",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 28,
								max: 120,
								step: 1,
								value: budget,
								onChange: (e) => setBudget(Number(e.target.value)),
								className: "mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-mist accent-accent"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted",
						children: "A budget basis, not a quote. Payments later move only against a signed gate pack."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						className: "mt-6 w-full",
						size: "lg",
						disabled: !ready,
						children: ["Open the house file", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				]
			})]
		})]
	});
}
function DutyCard({ icon: Icon, title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-accent",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-4",
				strokeWidth: 1.75
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-wider",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-2 text-sm text-muted",
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "leading-snug",
				children: item
			}, item))
		})]
	});
}
function Home() {
	const project = useHouse((s) => s.project);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const persist = useHouse.persist;
		if (!persist) {
			setReady(true);
			return;
		}
		const unsub = persist.onFinishHydration?.(() => setReady(true));
		persist.rehydrate?.();
		if (persist.hasHydrated?.()) setReady(true);
		const fallback = window.setTimeout(() => setReady(true), 400);
		return () => {
			unsub?.();
			window.clearTimeout(fallback);
		};
	}, []);
	if (ready && project) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseShell, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landing, { ready });
}
//#endregion
export { Home as component };
