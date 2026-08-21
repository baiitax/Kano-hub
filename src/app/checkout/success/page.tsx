"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PublicHeader } from "@/components/chrome";
import { Badge, Button, Card, ProtoNote } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

function Inner() {
  const sp = useSearchParams();
  const { lastSplitId, lastOrderId, orders } = useStore();
  const id = sp.get("id") || lastSplitId || lastOrderId || "SPLIT-2026-441";
  const legs = orders.filter((o) => o.parentId === id);
  const list = legs.length ? legs : orders.filter((o) => o.id === id);
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-md px-4 py-12 text-center">
        <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-2xl text-emerald-700">✓</div>
        <h1 className="text-2xl font-bold">Split payment on hold</h1>
        <p className="text-sm text-slate-500">Basket {id}</p>
        <ProtoNote>Partner escrow until each shop delivers. Financing not involved.</ProtoNote>
        {list.map((o) => (
          <Card key={o.id} className="mt-3 p-4 text-left text-sm">
            <div className="flex justify-between">
              <p className="font-semibold">{o.merchant}</p>
              <Badge tone="amber">{o.paymentStatus || "Held"}</Badge>
            </div>
            <p>
              {o.id} · {naira(o.amount)}
            </p>
            <Button href={`/customer/orders/${o.id}`} size="sm" className="mt-2">
              Track this shop
            </Button>
          </Card>
        ))}
        <div className="mt-6 flex justify-center gap-2">
          <Button href="/customer/orders">All orders</Button>
          <Button href="/marketplace" variant="outline">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
export default function Page() {
  return (
    <Suspense>
      <Inner />
    </Suspense>
  );
}
