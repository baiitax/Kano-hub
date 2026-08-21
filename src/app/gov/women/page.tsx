"use client";
import { GovShell } from "@/components/gov-shell";

export default function Page() {
  return (
    <GovShell>
      <h1 className="text-xl font-bold">Women-owned GMV</h1>
      <p className="mt-2 text-4xl font-extrabold text-emerald-300">41%</p>
      <p className="mt-2 text-sm text-slate-400">
        Share of 30-day digital GMV from women-owned shops (Aisha Fashion House, Arewa Beauty, …). Prototype, not a
        gender census.
      </p>
    </GovShell>
  );
}
