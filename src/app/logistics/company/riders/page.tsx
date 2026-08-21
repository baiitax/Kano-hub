"use client";
import { CompanyShell } from "@/components/logistics-shell";
import { Badge, Card, PageHead, StatCard } from "@/components/ui";
import { naira } from "@/data/mock";
import { riders } from "@/data/logistics";

export default function Page() {
  return (
    <CompanyShell>
      <PageHead title="Riders" />
      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <StatCard label="Roster" value="61" />
        <StatCard label="Online" value={String(riders.filter((r) => r.status !== "Offline").length)} />
        <StatCard label="On trip" value={String(riders.filter((r) => r.status === "On trip").length)} />
      </div>
      {riders.map((r) => (
        <Card key={r.id} className="mb-2 flex justify-between p-4 text-sm">
          <div>
            <p className="font-semibold">{r.name}</p>
            <p className="text-slate-500">
              {r.bike} · {r.lga} · {r.phone} · {r.today} jobs · ★{r.rating}
            </p>
          </div>
          <div className="text-right">
            <Badge tone={r.status === "On trip" ? "amber" : r.status === "Online" ? "green" : "slate"}>{r.status}</Badge>
            <p className="font-bold">{naira(r.earnings)}</p>
          </div>
        </Card>
      ))}
    </CompanyShell>
  );
}
