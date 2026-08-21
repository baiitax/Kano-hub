"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, StatCard } from "@/components/ui";
import { businesses, naira, orders } from "@/data/mock";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const b = businesses.find((x) => x.id === id) || businesses[0];
  const mine = orders.filter((o) => o.merchantId === b.id);
  return (
    <AppShell kind="admin">
      <PageHead title={b.name} sub={`${b.owner} · ${b.phone} · ${b.address}`} />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Sales (sample)" value={naira(b.sales)} />
        <StatCard label="Orders" value={String(b.orders)} />
        <StatCard label="Rating" value={String(b.rating)} />
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Card className="p-4 text-sm">
          <p>
            Category {b.category} · {b.hours}
          </p>
          <p className="mt-2">{b.description}</p>
          <Badge tone={b.verified ? "green" : "amber"}>{b.status}</Badge>
        </Card>
        <Card className="p-4 text-sm">
          <p className="font-semibold">Risk & support</p>
          <p>Risk flags: none on file</p>
          <p>Audit: verification 02 Mar 2026 by Ops</p>
          <p>Tickets: 1 open (payout)</p>
          <Button href="/admin/tickets" size="sm" className="mt-2">
            Tickets
          </Button>
        </Card>
      </div>
      <Card className="mt-4 p-4 text-sm">
        <p className="font-semibold">Recent orders</p>
        {mine.map((o) => (
          <p key={o.id}>
            {o.id} · {o.customer} · {naira(o.amount)} · {o.status}
          </p>
        ))}
      </Card>
    </AppShell>
  );
}
