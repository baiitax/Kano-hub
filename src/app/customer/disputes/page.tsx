"use client";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { Badge, Button, Card, PageHead, ProtoNote } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { disputes, setDisputeStatus } = useStore();
  return (
    <div className="min-h-screen pb-24">
      <PublicHeader />
      <div className="mx-auto max-w-xl px-4 py-6">
        <PageHead title="Dispute holds" sub="Buyer · merchant · rider in one case" />
        <ProtoNote>Hold/release is a partner settlement illustration. KanoHub is not an escrow bank.</ProtoNote>
        {disputes.map((d) => (
          <Card key={d.id} className="mb-3 p-4">
            <div className="flex justify-between">
              <p className="font-semibold">
                {d.id} · {d.shop}
              </p>
              <Badge tone={d.status === "Hold" ? "red" : d.status === "Released" ? "green" : "amber"}>{d.status}</Badge>
            </div>
            <p className="text-sm text-slate-600">
              {d.orderId} · {d.reason} · {naira(d.amount)}
            </p>
            <div className="mt-2 flex gap-2">
              <Button size="sm" href={`/customer/orders/${d.orderId}`}>
                Track
              </Button>
              <Button size="sm" variant="outline" onClick={() => setDisputeStatus(d.id, "Released")}>
                Release hold
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <CustomerBottom />
    </div>
  );
}
