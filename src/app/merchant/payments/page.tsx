"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Card, PageHead, StatCard } from "@/components/ui";
import { naira, transactions } from "@/data/mock";

export default function Page() {
  return (
    <AppShell>
      <PageHead title="Payments" sub="Powered by participating licensed payment partners" />
      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Total received" value={naira(4280500)} />
        <StatCard label="Today" value={naira(151000)} />
        <StatCard label="Pending" value={naira(42000)} />
        <StatCard label="Net settlement" value={naira(4012000)} hint="After partner fees" />
      </div>
      <Card className="mt-4 divide-y divide-white/40">
        {transactions.map((t) => (
          <div key={t.id} className="flex flex-wrap justify-between gap-2 p-4 text-sm">
            <div>
              <p className="font-semibold">{t.id}</p>
              <p className="text-slate-500">
                {t.type} · {t.party} · {t.method} · {t.date}
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold">{naira(t.amount)}</p>
              <Badge tone="green">{t.status}</Badge>
            </div>
          </div>
        ))}
      </Card>
    </AppShell>
  );
}
