"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Card, PageHead } from "@/components/ui";
import { bankTx } from "@/data/intel";
import { naira } from "@/data/mock";

export default function Page() {
  return (
    <PortalShell kind="bank">
      <PageHead title="Transaction ledger" />
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
