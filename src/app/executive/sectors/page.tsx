"use client";
import { ExecShell } from "@/components/exec-shell";
import { Card } from "@/components/ui";
import { sectors } from "@/data/executive";

export default function Page() {
  return (
    <ExecShell>
      <h1 className="text-2xl font-extrabold text-white">Sectors</h1>
      <div className="mt-4 space-y-2">
        {sectors.map((s) => (
          <Card key={s.name} className="flex flex-wrap items-center justify-between gap-2 bg-slate-900/80 p-4 text-sm text-slate-200">
            <div>
              <p className="font-semibold text-white">{s.name}</p>
              <p className="text-slate-400">{s.merchants.toLocaleString()} merchants</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold">₦{s.gmv.toFixed(2)}B</p>
              <p className="text-emerald-400">+{s.growth}% MoM</p>
            </div>
          </Card>
        ))}
      </div>
    </ExecShell>
  );
}
