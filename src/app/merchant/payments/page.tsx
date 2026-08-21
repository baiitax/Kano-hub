"use client";
import { AppShell } from "@/components/chrome";
import { Card, PageHead, StatCard } from "@/components/ui";
import { naira, transactions } from "@/data/mock";

export default function Page() {
  return (
    <AppShell>
      <PageHead title="Payments" sub="Powered by participating licensed payment partners" />
      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Total received" value={naira(4280500)} />
        <StatCard label="Today" value={naira(151000)} />
        <StatCard label="Pending" value={naira(42000)} />
        <StatCard label="Net settlement" value={naira(4012000)} />
      </div>
      <Card className="mt-4 divide-y">
        {transactions.map((t) => (
          <div key={t.id} className="flex justify-between p-4 text-sm">
            <span>
              {t.id} · {t.party}
            </span>
            <span className="font-semibold">{naira(t.amount)}</span>
          </div>
        ))}
      </Card>
    </AppShell>
  );
}
