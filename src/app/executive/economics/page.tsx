"use client";
import { ExecShell } from "@/components/exec-shell";
import { Card, ProtoNote } from "@/components/ui";
import { unitEcon } from "@/data/executive";

export default function Page() {
  return (
    <ExecShell>
      <h1 className="text-2xl font-extrabold text-white">Unit economics</h1>
      <ProtoNote>Board model — not audited. Payment economics sit with licensed partners.</ProtoNote>
      <div className="grid gap-3 sm:grid-cols-2">
        {unitEcon.map((u) => (
          <Card key={u.k} className="bg-slate-900/80 p-4">
            <p className="text-xs uppercase text-slate-500">{u.k}</p>
            <p className="text-2xl font-extrabold text-white">{u.v}</p>
            <p className="text-sm text-slate-400">{u.n}</p>
          </Card>
        ))}
      </div>
    </ExecShell>
  );
}
