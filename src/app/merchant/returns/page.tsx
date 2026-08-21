"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, StatCard } from "@/components/ui";
import { naira } from "@/data/mock";
import { returns } from "@/data/merchant-ops";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell>
      <PageHead title="Returns" sub="Refunds restock inventory and reverse revenue" />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Open" value="1" />
        <StatCard label="Refunded 30d" value={naira(12500)} />
        <StatCard label="Rate" value="0.7%" />
      </div>
      {returns.map((r) => (
        <Card key={r.id} className="mt-3 p-4">
          <div className="flex flex-wrap justify-between gap-2">
            <div>
              <p className="font-bold">
                {r.id} · {r.item}
              </p>
              <p className="text-sm text-slate-600">
                {r.order} · {r.customer} · {naira(r.amount)}
              </p>
            </div>
            <Badge tone={r.status === "Open" ? "amber" : "green"}>{r.status}</Badge>
          </div>
          {r.status === "Open" && (
            <Button className="mt-3" size="sm" onClick={() => toast("Refund posted · stock +1", r.id)}>
              Approve refund
            </Button>
          )}
        </Card>
      ))}
    </AppShell>
  );
}
