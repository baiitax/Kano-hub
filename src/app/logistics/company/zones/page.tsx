"use client";
import { CompanyShell } from "@/components/logistics-shell";
import { Card, PageHead } from "@/components/ui";
import { zones } from "@/data/fleet";

export default function Page() {
  return (
    <CompanyShell>
      <PageHead title="Zones / LGAs" />
      {zones.map((z) => (
        <Card key={z.lga} className="mb-2 flex justify-between p-4 text-sm">
          <span className="font-semibold">{z.lga}</span>
          <span>
            {z.jobs} jobs · {z.riders} riders · SLA {z.sla}
          </span>
        </Card>
      ))}
    </CompanyShell>
  );
}
