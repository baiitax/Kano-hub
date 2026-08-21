"use client";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { Badge, Button, Card } from "@/components/ui";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <div className="min-h-screen pb-24">
      <PublicHeader />
      <div className="mx-auto max-w-xl px-3 py-6">
        <h1 className="text-2xl font-extrabold">Payment methods</h1>
        <p className="text-sm text-slate-500">Services via licensed payment partners.</p>
        <Card className="mt-4 p-4">
          <p className="font-semibold">KanoHub wallet</p>
          <Badge tone="green">Default</Badge>
        </Card>
        <Card className="mt-2 p-4">
          <p className="font-semibold">Card · •••• 4412</p>
          <p className="text-xs text-slate-500">Partner acquiring</p>
        </Card>
        <Button className="mt-4" variant="outline" onClick={() => toast("Add card (prototype)")}>
          Add card
        </Button>
      </div>
      <CustomerBottom />
    </div>
  );
}
