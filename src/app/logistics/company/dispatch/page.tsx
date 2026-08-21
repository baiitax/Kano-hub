"use client";
import { CompanyShell } from "@/components/logistics-shell";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { deliveries, naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <CompanyShell>
      <PageHead title="Dispatch" sub="Assign nearest online rider" />
      {deliveries.map((d) => (
        <Card key={d.id} className="mb-3 p-4 text-sm">
          <div className="flex justify-between">
            <p className="font-bold">
              {d.id} · {d.orderId}
            </p>
            <Badge>{d.status}</Badge>
          </div>
          <p>
            {d.pickup} → {d.dropoff} · {d.distance} · {naira(d.fee)}
          </p>
          <p className="text-slate-500">
            {d.customer} · currently {d.rider || "unassigned"}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <Button size="sm" onClick={() => toast("Dispatched Abdullahi Musa", d.id)}>
              Dispatch Abdullahi
            </Button>
            <Button size="sm" variant="outline" href={`/customer/orders/${d.orderId}`}>
              Customer
            </Button>
            <Button size="sm" variant="outline" href="/merchant/logistics">
              Merchant
            </Button>
          </div>
        </Card>
      ))}
    </CompanyShell>
  );
}
