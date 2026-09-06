import { useState } from "react";
import { ArrowRight, LandPlot, Wallet } from "lucide-react";
import { Footprint } from "@/components/footprint";
import { PlotMark } from "@/components/plot-mark";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FLOOR_COPY,
  LOCALITIES,
  OWNER_ONLY_JOBS,
  PLOT_NOTES,
  PLOT_SIZES,
  TEAM_RUNS,
  type FloorIntent,
  type Locality,
  type PlotSize,
} from "@/lib/catalog";
import { useHouse } from "@/lib/store";
import { cn, sqFtFromYards } from "@/lib/utils";

export function Landing({ ready = true }: { ready?: boolean }) {
  const startFromPlot = useHouse((s) => s.startFromPlot);
  const openDemo = useHouse((s) => s.openDemo);
  const [name, setName] = useState("Ananya Rao");
  const [size, setSize] = useState<PlotSize>(200);
  const [locality, setLocality] = useState<Locality>("MVP Colony");
  const [floors, setFloors] = useState<FloorIntent>("G+1");
  const [budget, setBudget] = useState(68);

  return (
    <div className="min-h-dvh bg-bg">
      <header className="flex items-center justify-between px-5 py-5 md:px-10">
        <div className="flex items-center gap-3">
          <PlotMark />
          <div>
            <p className="text-sm font-semibold tracking-tight">BuildVizag</p>
            <p className="text-xs text-muted">Visakhapatnam · one house</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          disabled={!ready}
          onClick={openDemo}
        >
          Open a house on site
        </Button>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-4 md:grid-cols-12 md:px-10 md:pt-10">
        <div className="md:col-span-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Plot and cash. We run the rest.
          </p>
          <h1 className="mt-4 max-w-lg text-4xl text-ink md:text-5xl">
            One residential unit. Two seats. The same file.
          </h1>
          <p className="mt-5 max-w-md text-base text-muted">
            You bring a 120–220 sq yd plot and a cash envelope. The team
            recruits the specialists, holds the pours, and opens every gate
            against evidence — while you watch the same journey they do.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <DutyCard
              icon={LandPlot}
              title="You"
              items={OWNER_ONLY_JOBS.slice(0, 3)}
            />
            <DutyCard icon={Wallet} title="The team" items={TEAM_RUNS.slice(0, 3)} />
          </div>
        </div>

        <form
          className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] md:col-span-6 md:p-6"
          onSubmit={(e) => {
            e.preventDefault();
            startFromPlot({
              ownerName: name,
              sizeYd: size,
              locality,
              floors,
              budgetLakhs: budget,
            });
          }}
        >
          <p className="font-display text-2xl">Hand over the plot</p>
          <p className="mt-1 text-sm text-muted">
            Four facts. Everything after this is a named specialist and a
            gate.
          </p>

          <label className="mt-6 block text-xs font-medium uppercase tracking-wider text-muted">
            Your name
            <Input
              className="mt-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </label>

          <p className="mt-5 text-xs font-medium uppercase tracking-wider text-muted">
            Plot size
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {PLOT_SIZES.map((yd) => (
              <button
                key={yd}
                type="button"
                onClick={() => setSize(yd)}
                className={cn(
                  "rounded-lg p-2 text-left transition-shadow duration-150",
                  size === yd
                    ? "bg-accent text-accent-fg shadow-[var(--shadow-border)]"
                    : "bg-surface-2 text-ink hover:bg-line",
                )}
              >
                <Footprint
                  size={yd}
                  active={size === yd}
                  className={cn(
                    "h-12 w-full",
                    size === yd ? "text-mist" : "text-ink",
                  )}
                />
                <p className="mt-1 text-sm font-semibold">{yd} sq yd</p>
                <p
                  className={cn(
                    "text-xs",
                    size === yd ? "text-mist" : "text-muted",
                  )}
                >
                  {sqFtFromYards(yd).toLocaleString("en-IN")} sq ft
                </p>
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted">{PLOT_NOTES[size]}</p>

          <p className="mt-5 text-xs font-medium uppercase tracking-wider text-muted">
            Locality
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {LOCALITIES.map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => setLocality(loc)}
                className={cn(
                  "h-9 rounded-full px-3 text-xs font-medium",
                  locality === loc
                    ? "bg-ink text-bg"
                    : "bg-surface-2 text-ink hover:bg-line",
                )}
              >
                {loc}
              </button>
            ))}
          </div>

          <p className="mt-5 text-xs font-medium uppercase tracking-wider text-muted">
            Floors
          </p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {(Object.keys(FLOOR_COPY) as FloorIntent[]).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFloors(f)}
                className={cn(
                  "rounded-lg px-3 py-3 text-left",
                  floors === f ? "bg-ink text-bg" : "bg-surface-2",
                )}
              >
                <p className="text-sm font-semibold">{FLOOR_COPY[f].label}</p>
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted">{FLOOR_COPY[floors].note}</p>

          <label className="mt-5 block text-xs font-medium uppercase tracking-wider text-muted">
            Cash envelope · {budget} lakh
            <input
              type="range"
              min={28}
              max={120}
              step={1}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-mist accent-accent"
            />
          </label>
          <p className="mt-2 text-xs text-muted">
            A budget basis, not a quote. Payments later move only against a
            signed gate pack.
          </p>

          <Button
            type="submit"
            className="mt-6 w-full"
            size="lg"
            disabled={!ready}
          >
            Open the house file
            <ArrowRight />
          </Button>
        </form>
      </section>
    </div>
  );
}

function DutyCard({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof LandPlot;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
      <div className="flex items-center gap-2 text-accent">
        <Icon className="size-4" strokeWidth={1.75} />
        <p className="text-xs font-semibold uppercase tracking-wider">{title}</p>
      </div>
      <ul className="mt-3 space-y-2 text-sm text-muted">
        {items.map((item) => (
          <li key={item} className="leading-snug">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
