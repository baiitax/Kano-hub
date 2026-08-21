"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { nostro } from "@/data/bank";
import { naira } from "@/data/mock";

export default function Page() {
  return (
    <PortalShell kind="bank">
      <PageHead title="Treasury / nostro" />
      <ProtoNote>Balances sit with licensed partners. KanoHub does not hold customer deposits.</ProtoNote>
      <StatCard label="Total nostro (illustrative)" value={naira(nostro.reduce((s, n) => s + n.bal, 0))} />
      {nostro.map((n) => (
        <Card key={n.rail} className="mt-3 flex justify-between p-4 text-sm">
          <span className="font-semibold">{n.rail}</span>
          <span>
            {naira(n.bal)} <Badge tone="green">{n.status}</Badge>
          </span>
        </Card>
      ))}
    </PortalShell>
  );
}
