"use client";
import { CompanyShell } from "@/components/logistics-shell";
import { Badge, Card, PageHead } from "@/components/ui";
import { riders } from "@/data/logistics";

export default function Page() {
  return (
    <CompanyShell>
      <PageHead title="Fleet" sub="Bikes, insurance, fitness" />
      {riders.map((r) => (
        <Card key={r.id} className="mb-2 p-4 text-sm">
          <p className="font-semibold">{r.bike}</p>
          <p>
            Assigned {r.name} · {r.lga} <Badge>{r.status === "Offline" ? "Idle" : "Out"}</Badge>
          </p>
        </Card>
      ))}
    </CompanyShell>
  );
}
