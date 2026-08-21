"use client";
import { CompanyShell } from "@/components/logistics-shell";
import { Card, PageHead, StatCard } from "@/components/ui";
import { zones } from "@/data/fleet";

export default function Page() {
  return (
    <CompanyShell>
      <PageHead title="SLA" />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Success 24h" value="96.8%" />
        <StatCard label="Avg minutes" value="54" />
        <StatCard label="Breaches" value="2" hint="Fagge" />
      </div>
      {zones.map((z) => (
        <Card key={z.lga} className="mt-2 flex justify-between p-3 text-sm">
          <span>{z.lga}</span>
          <span>{z.sla}</span>
        </Card>
      ))}
    </CompanyShell>
  );
}
