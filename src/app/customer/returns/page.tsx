"use client";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { Badge, Button, Card } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <div className="min-h-screen pb-24">
      <PublicHeader />
      <div className="mx-auto max-w-xl px-3 py-6">
        <h1 className="text-2xl font-extrabold">Returns</h1>
        <Card className="mt-4 p-4">
          <div className="flex justify-between">
            <p className="font-bold">RT-098 · Shea set</p>
            <Badge tone="green">Refunded</Badge>
          </div>
          <p className="text-sm text-slate-600">KH-2026-1760 · {naira(12500)} back to wallet</p>
        </Card>
        <Button className="mt-4 w-full" variant="outline" onClick={() => toast("Return started from last order")}>
          Start a return
        </Button>
      </div>
      <CustomerBottom />
    </div>
  );
}
