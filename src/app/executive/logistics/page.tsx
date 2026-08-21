"use client";
import { ExecShell } from "@/components/exec-shell";
import { Card, StatCard } from "@/components/ui";
import { logisticsCompanies, riders } from "@/data/logistics";

export default function Page() {
  return (
    <ExecShell>
      <h1 className="text-2xl font-extrabold text-white">Logistics</h1>
      <div className="mt-4 grid gap-3 sm:grid-cols-4">
        <StatCard label="Deliveries YTD" value="141,200" />
        <StatCard label="Success" value="96.4%" />
        <StatCard label="Avg minutes" value="54" />
        <StatCard label="Active riders" value="1,204" />
      </div>
      {logisticsCompanies.map((c) => (
        <Card key={c.id} className="mt-3 bg-slate-900/80 p-4 text-sm text-slate-200">
          <p className="font-bold text-white">{c.name}</p>
          <p>
            {c.riders} riders · {c.fleet} bikes · {c.areas} · {c.rate}
          </p>
        </Card>
      ))}
      <Card className="mt-3 bg-slate-900/80 p-4 text-sm text-slate-200">
        <p className="font-semibold text-white">Sample riders on shift</p>
        {riders.map((r) => (
          <p key={r.id} className="mt-1">
            {r.name} · {r.status} · {r.lga} · {r.today} jobs
          </p>
        ))}
      </Card>
    </ExecShell>
  );
}
