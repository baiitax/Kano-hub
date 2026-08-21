"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { bankTx } from "@/data/intel";
import { naira } from "@/data/mock";

export default function Page() {
  return (
    <PortalShell kind="security">
      <PageHead title="Payment intelligence" sub="Acquiring anomalies via licensed partners" />
      <ProtoNote>Payment services provided through licensed partners. No fictional licences.</ProtoNote>
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Blocked 24h" value="47" />
        <StatCard label="Failed NIP" value="1.1%" />
        <StatCard label="Chargebacks 7d" value="3" />
      </div>
      <Card className="mt-4 divide-y divide-white/40">
        {bankTx.map((t) => (
          <div key={t.id} className="flex justify-between p-3 text-sm">
            <span>
              {t.id} · {t.type} · {t.party}
            </span>
            <span>
              {naira(t.amount)} <Badge tone={t.status === "Failed" ? "red" : "green"}>{t.status}</Badge>
            </span>
          </div>
        ))}
      </Card>
    </PortalShell>
  );
}
