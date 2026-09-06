import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { HouseShell } from "@/components/house-shell";
import { Landing } from "@/components/landing";
import { useHouse } from "@/lib/store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const project = useHouse((s) => s.project);
  const [ready, setReady] = useState(false);

  useEffect(() => {
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

  if (ready && project) return <HouseShell />;
  return <Landing ready={ready} />;
}
