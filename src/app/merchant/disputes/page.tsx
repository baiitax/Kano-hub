"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, ProtoNote } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { disputes, setDisputeStatus } = useStore();
  return (
    <AppShell>
      <PageHead title="Dispute holds" sub="Buyer cases that pause partner settlement" />
      <ProtoNote>Reply does not release funds until the partner desk confirms.</ProtoNote>
      {disputes.map((d) => (
        <Card key={d.id} className="mb-3 p-4">
          <div className="flex justify-between">
            <p className="font-semibold">
              {d.id} · {d.orderId}
            </p>
            <Badge tone="red">{d.status}</Badge>
          </div>
          <p className="text-sm">
            {d.reason} · {naira(d.amount)} · {d.party}
          </p>
          <Button className="mt-2" size="sm" onClick={() => setDisputeStatus(d.id, "Merchant reply")}>
            Reply with evidence
          </Button>
        </Card>
      ))}
    </AppShell>
  );
}
