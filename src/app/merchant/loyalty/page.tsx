"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, StatCard } from "@/components/ui";
import { loyalty } from "@/data/merchant-ops";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell>
      <PageHead title="Loyalty" sub="Points, VIP tiers, Sallah campaigns" />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Members" value="173" />
        <StatCard label="VIP" value="12" />
        <StatCard label="Points issued 30d" value="48,600" />
      </div>
      {loyalty.map((l) => (
        <Card key={l.name} className="mt-2 flex items-center justify-between p-4 text-sm">
          <span>
            {l.name} · {l.visits} visits · {l.pts} pts
          </span>
          <Badge tone="gold">{l.tier}</Badge>
        </Card>
      ))}
      <Button className="mt-4" onClick={() => toast("Sallah 2× points campaign live")}>
        Launch weekend double points
      </Button>
    </AppShell>
  );
}
