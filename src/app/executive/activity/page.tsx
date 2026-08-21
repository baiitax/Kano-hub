"use client";
import { ExecShell } from "@/components/exec-shell";
import { Badge, Card } from "@/components/ui";
import { execActivity } from "@/data/executive";

export default function Page() {
  return (
    <ExecShell>
      <h1 className="text-2xl font-extrabold text-white">Live activity</h1>
      <p className="text-sm text-slate-400">Operating tape across commerce, credit, logistics and SOC — illustrative.</p>
      <div className="mt-4 space-y-2">
        {execActivity.map((a, i) => (
          <Card key={i} className="bg-slate-900/80 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-emerald-400">{a.t}</span>
              <Badge>{a.type}</Badge>
            </div>
            <p className="mt-2 text-sm text-slate-200">{a.text}</p>
          </Card>
        ))}
      </div>
    </ExecShell>
  );
}
