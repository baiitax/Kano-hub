"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, ProtoNote } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { disputes, setDisputeStatus } = useStore();
  return (
    <AppShell kind="admin">
      <PageHead title="Dispute center" sub="Buyer–merchant–rider holds" />
      <ProtoNote>Hold/release is partner settlement — not KanoHub escrow banking.</ProtoNote>
      {disputes.map((c) => (
        <Card key={c.id} className="mb-2 flex flex-wrap items-center justify-between gap-2 p-3 text-sm">
          <span>
            {c.id} · {c.shop} · {c.orderId}
            <p className="text-xs text-slate-500">
              {c.reason} · {naira(c.amount)}
            </p>
          </span>
          <span className="flex items-center gap-2">
            <Badge tone={c.status === "Hold" ? "red" : "green"}>{c.status}</Badge>
            <Button size="sm" variant="outline" onClick={() => setDisputeStatus(c.id, "Released")}>
              Release
            </Button>
          </span>
        </Card>
      ))}
    </AppShell>
  );
}
