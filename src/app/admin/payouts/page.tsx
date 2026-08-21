"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, StatCard } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

const rows = [
  { id: "PO-8821", merchant: "Aisha Fashion House", amount: 428050, status: "Queued" },
  { id: "PO-8819", merchant: "Baita Electronics", amount: 912000, status: "Sent" },
  { id: "PO-8801", merchant: "Kano Fresh Foods", amount: 186000, status: "Held" },
];

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell kind="admin">
      <PageHead title="Payouts" sub="Merchant settlements via payment partners" />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Queued" value="₦42.1M" />
        <StatCard label="Held" value={naira(186000)} />
        <StatCard label="Sent today" value="₦1.12B" />
      </div>
      {rows.map((r) => (
        <Card key={r.id} className="mt-3 flex flex-wrap items-center justify-between gap-2 p-4 text-sm">
          <span>
            {r.id} · {r.merchant} · {naira(r.amount)}
          </span>
          <div className="flex items-center gap-2">
            <Badge tone={r.status === "Held" ? "amber" : "green"}>{r.status}</Badge>
            <Button size="sm" variant="outline" onClick={() => toast("Released", r.id)}>
              Release
            </Button>
          </div>
        </Card>
      ))}
    </AppShell>
  );
}
