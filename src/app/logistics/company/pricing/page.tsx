"use client";
import { CompanyShell } from "@/components/logistics-shell";
import { Card, PageHead } from "@/components/ui";

const rows = [
  ["0–3 km", "₦800", "45 min"],
  ["3–7 km", "₦1,500", "60 min"],
  ["7–12 km", "₦2,200", "90 min"],
  ["Express +30 min", "+₦1,000", "30 min"],
];

export default function Page() {
  return (
    <CompanyShell>
      <PageHead title="Pricing" sub="Metro Kano · partner rates" />
      {rows.map(([d, f, t]) => (
        <Card key={d} className="mb-2 flex justify-between p-4 text-sm">
          <span>{d}</span>
          <span className="font-bold">
            {f} · SLA {t}
          </span>
        </Card>
      ))}
    </CompanyShell>
  );
}
