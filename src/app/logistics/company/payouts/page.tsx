"use client";
import { CompanyShell } from "@/components/logistics-shell";
import { Badge, Button, Card, PageHead, StatCard } from "@/components/ui";
import { naira } from "@/data/mock";
import { riderPayouts } from "@/data/fleet";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <CompanyShell>
      <PageHead title="Rider payouts" />
      <StatCard label="Batch 18:00" value={naira(1840000)} />
      {riderPayouts.map((p) => (
        <Card key={p.id} className="mt-2 flex justify-between p-4 text-sm">
          <span>
            {p.id} · {p.when} · net {naira(p.net)}
          </span>
          <Badge tone="green">{p.status}</Badge>
        </Card>
      ))}
      <Button className="mt-4" onClick={() => toast("Payout file queued")}>
        Run batch
      </Button>
    </CompanyShell>
  );
}
