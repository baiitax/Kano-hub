"use client";
import Link from "next/link";
import { Logo } from "@/components/chrome";
import { RiderDock } from "@/components/docks";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { deliveries, naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <div className="min-h-screen pb-28">
      <div className="glass-nav px-4 py-3">
        <Logo />
      </div>
      <div className="mx-auto max-w-lg px-3 py-4">
        <PageHead title="Job queue" sub="Nearby unassigned + your offers" />
        {deliveries.map((d) => (
          <Card key={d.id} className="mb-3 p-4">
            <div className="flex justify-between">
              <p className="font-bold">{d.id}</p>
              <span className="font-extrabold text-emerald-800">{naira(d.fee)}</span>
            </div>
            <p className="text-sm text-slate-600">
              {d.pickup} → {d.dropoff} · {d.distance}
            </p>
            <p className="text-xs text-slate-500">
              {d.customer} · {d.orderId}
            </p>
            <div className="mt-2 flex gap-2">
              <Button size="sm" href="/logistics" onClick={() => toast("Accepted", d.id)}>
                Accept
              </Button>
              <Button size="sm" variant="outline" href={`/customer/orders/${d.orderId}`}>
                Track
              </Button>
            </div>
          </Card>
        ))}
        <Link href="/logistics" className="text-sm font-semibold text-emerald-800">
          Active job →
        </Link>
      </div>
      <RiderDock />
    </div>
  );
}
