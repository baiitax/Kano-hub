"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PublicHeader } from "@/components/chrome";
import { Button, Card } from "@/components/ui";
import { useStore } from "@/lib/store";

function Inner() {
  const sp = useSearchParams();
  const { lastOrderId } = useStore();
  const id = sp.get("id") || lastOrderId || "KH-2026-1842";
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-md px-4 py-16 text-center">
        <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-2xl text-emerald-700">✓</div>
        <h1 className="text-2xl font-bold">Payment Successful</h1>
        <p className="text-3xl font-extrabold text-emerald-800">₦85,000+</p>
        <p className="text-sm text-slate-500">Transaction ID {id}</p>
        <Card className="mt-6 p-4 text-left text-sm">
          <p>Merchant: Aisha Fashion House</p>
          <p>Payment: Paid</p>
          <p>Delivery: Processing</p>
        </Card>
        <div className="mt-6 flex justify-center gap-2">
          <Button href={`/customer/orders/${id}`}>Track Order</Button>
          <Button href="/marketplace" variant="outline">
            Continue Shopping
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
