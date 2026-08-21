"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { bankTx } from "@/data/intel";
import { naira } from "@/data/mock";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Payments" actions={<Button href="/bank" size="sm">Bank desk</Button>} />
      <ProtoNote>Payment services provided through licensed payment partners.</ProtoNote>
      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Volume" value="₦4.1B" />
        <StatCard label="Success rate" value="98.2%" />
        <StatCard label="Failed" value="1.1%" />
        <StatCard label="Refunds" value="₦12.4M" />
      </div>
      <Card className="mt-4 divide-y divide-white/40">
        {bankTx.map((t) => (
          <div key={t.id} className="flex justify-between p-3 text-sm">
            <span>
              {t.type} · {t.party}
            </span>
            <span>
              {naira(t.amount)} <Badge>{t.status}</Badge>
            </span>
          </div>
        ))}
      </Card>
    </AppShell>
  );
}
