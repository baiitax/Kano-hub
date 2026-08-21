"use client";
import { GovShell } from "@/components/gov-shell";
import { govProgrammes } from "@/data/gov";

export default function Page() {
  return (
    <GovShell>
      <h1 className="text-xl font-bold">Programmes</h1>
      <div className="mt-4 space-y-3">
        {govProgrammes.map((p) => (
          <div key={p.name} className="rounded-xl border border-white/10 p-4">
            <p className="font-semibold">{p.name}</p>
            <p className="text-xs text-emerald-400">{p.status}</p>
            <p className="mt-1 text-sm text-slate-400">{p.note}</p>
          </div>
        ))}
      </div>
    </GovShell>
  );
}
