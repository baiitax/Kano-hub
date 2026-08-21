"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Button, Card, PageHead, StatCard } from "@/components/ui";
import { nipQueue } from "@/data/bank";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="bank">
      <PageHead title="NIP / transfers" sub="Instant payments via licensed rails" />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Success 24h" value="98.2%" />
        <StatCard label="Pending" value="1" />
        <StatCard label="Failed" value="1" />
      </div>
      {nipQueue.map((n) => (
        <Card key={n.id} className="mt-3 flex flex-wrap items-center justify-between gap-2 p-4 text-sm">
          <div>
            <p className="font-semibold">
              {n.id} · {n.dir} · {n.party}
            </p>
            <p className="text-slate-500">{n.ref}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">{naira(n.amount)}</span>
            <Badge tone={n.status === "Failed" ? "red" : n.status === "Pending" ? "amber" : "green"}>{n.status}</Badge>
            {n.status !== "Posted" && (
              <Button size="sm" variant="outline" onClick={() => toast("Retry queued", n.id)}>
                Retry
              </Button>
            )}
          </div>
        </Card>
      ))}
    </PortalShell>
  );
}
