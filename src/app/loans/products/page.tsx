"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Card, PageHead } from "@/components/ui";
import { financingOffers, naira } from "@/data/mock";

export default function Page() {
  return (
    <PortalShell kind="loans">
      <PageHead title="Credit products" />
      {financingOffers.map((f) => (
        <Card key={f.id} className="mb-3 p-4">
          <Badge tone="gold">Prototype offer</Badge>
          <p className="mt-2 font-bold">{f.name}</p>
          <p>
            Up to {naira(f.amount)} · {f.duration} · {f.partner}
          </p>
        </Card>
      ))}
    </PortalShell>
  );
}
