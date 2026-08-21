"use client";
import { AppShell } from "@/components/chrome";
import { Card, PageHead, StatCard } from "@/components/ui";
import { customers, naira, orders } from "@/data/mock";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const c = customers.find((x) => x.id === id) || customers[0];
  return (
    <AppShell>
      <PageHead title={c.name} sub={c.phone} />
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Total spent" value={naira(c.spent)} />
        <StatCard label="Orders" value={String(c.orders)} />
        <StatCard label="Outstanding" value={naira(c.outstanding)} />
      </div>
      <Card className="mt-4 p-4 text-sm">
        {orders
          .filter((o) => o.customer === c.name)
          .map((o) => (
            <p key={o.id}>
              {o.id} · {naira(o.amount)} · {o.status}
            </p>
          ))}
      </Card>
    </AppShell>
  );
}
