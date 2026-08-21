"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Card, PageHead } from "@/components/ui";
import { bankTape } from "@/data/bank";

export default function Page() {
  return (
    <PortalShell kind="bank">
      <PageHead title="Live tape" sub="NIP, settlement, KYC, AML, collections" />
      {bankTape.map((e) => (
        <Card key={e.t + e.text} className="mb-2 p-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-emerald-800">{e.t}</span>
            <Badge>{e.type}</Badge>
          </div>
          <p className="mt-1 text-sm">{e.text}</p>
        </Card>
      ))}
    </PortalShell>
  );
}
