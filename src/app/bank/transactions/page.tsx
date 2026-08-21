"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Card, PageHead, StatCard } from "@/components/ui";
import { bankTx } from "@/data/intel";
import { naira } from "@/data/mock";

export default function Page() {
  return (
    <PortalShell kind="bank">
      <PageHead title="Transaction ledger" />
      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <StatCard label="Posted today" value="12,840" />
        <StatCard label="Failed" value="18" />
        <StatCard label="Value" value="₦182.4M" />
      </div>
      <Card className="divide-y divide-white/40">
        {bankTx.map((t) => (
          <div key={t.id} className="flex flex-wrap justify-between gap-2 p-4 text-sm">
            <div>
              <p className="font-semibold">{t.id}</p>
              <p className="text-slate-500">
                {t.type} · {t.party} · {t.time}
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold">{naira(t.amount)}</p>
              <Badge tone={t.status === "Failed" ? "red" : "green"}>{t.status}</Badge>
            </div>
          </div>
        ))}
      </Card>
    </PortalShell>
  );
}
