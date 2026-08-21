"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Card, PageHead } from "@/components/ui";

export default function Page() {
  return (
    <PortalShell kind="bank">
      <PageHead title="Compliance" sub="AML / KYC checklist for partner operations" />
      {[
        ["CBN circular alignment", "Documented"],
        ["KYC tier mapping", "Tier 1–3 live"],
        ["STR workflow", "Prototype"],
        ["Data residency", "NG cloud (planned)"],
      ].map(([k, v]) => (
        <Card key={k} className="mb-2 flex justify-between p-3 text-sm">
          <span>{k}</span>
          <Badge>{v}</Badge>
        </Card>
      ))}
    </PortalShell>
  );
}
