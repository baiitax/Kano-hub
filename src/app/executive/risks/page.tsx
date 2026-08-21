"use client";
import { ExecShell } from "@/components/exec-shell";
import { Badge, Card } from "@/components/ui";
import { risks } from "@/data/executive";

export default function Page() {
  return (
    <ExecShell>
      <h1 className="text-2xl font-extrabold text-white">Enterprise risks</h1>
      <div className="mt-4 space-y-3">
        {risks.map((r) => (
          <Card key={r.id} className="bg-slate-900/80 p-4">
            <div className="flex justify-between gap-2">
              <p className="font-semibold text-white">
                {r.id} · {r.title}
              </p>
              <Badge tone={r.sev === "High" ? "red" : "amber"}>{r.sev}</Badge>
            </div>
            <p className="mt-2 text-sm text-slate-300">{r.note}</p>
          </Card>
        ))}
      </div>
    </ExecShell>
  );
}
