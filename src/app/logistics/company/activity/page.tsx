"use client";
import { CompanyShell } from "@/components/logistics-shell";
import { Badge, Card, PageHead } from "@/components/ui";
import { companyTape } from "@/data/fleet";

export default function Page() {
  return (
    <CompanyShell>
      <PageHead title="HQ tape" />
      {companyTape.map((e) => (
        <Card key={e.t + e.text} className="mb-2 p-4">
          <Badge>{e.type}</Badge> <span className="font-mono text-xs">{e.t}</span>
          <p className="mt-1 text-sm">{e.text}</p>
        </Card>
      ))}
    </CompanyShell>
  );
}
