"use client";
import { ExecShell } from "@/components/exec-shell";
import { Card, ProtoNote, StatCard } from "@/components/ui";

export default function Page() {
  return (
    <ExecShell>
      <h1 className="text-2xl font-extrabold text-white">Jobs & inclusion</h1>
      <ProtoNote>Modelled livelihoods — not a labour-force survey.</ProtoNote>
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Jobs supported" value="21,400" />
        <StatCard label="Women-owned shops" value="38%" />
        <StatCard label="Informal → digital" value="6,120" hint="First digital shop" />
      </div>
      <Card className="mt-4 space-y-2 bg-slate-900/80 p-4 text-sm text-slate-300">
        <p>Riders earning on-platform: 1,204</p>
        <p>Stall assistants / cashiers clocked in POS: ~4,800</p>
        <p>Youth (18–35) merchant owners: 44% of new Aug cohort</p>
        <p>Hausa-first sessions: 29% of merchant app time</p>
      </Card>
    </ExecShell>
  );
}
