"use client";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { Badge, Button, Card } from "@/components/ui";
import { addresses } from "@/data/customer-ops";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <div className="min-h-screen pb-24">
      <PublicHeader />
      <div className="mx-auto max-w-xl px-3 py-6">
        <h1 className="text-2xl font-extrabold">Addresses</h1>
        {addresses.map((a) => (
          <Card key={a.id} className="mt-3 p-4">
            <div className="flex justify-between">
              <p className="font-bold">{a.label}</p>
              {a.def && <Badge tone="green">Default</Badge>}
            </div>
            <p className="text-sm text-slate-600">{a.line}</p>
            <p className="text-xs text-slate-500">{a.phone}</p>
            <Button className="mt-2" size="sm" variant="outline" onClick={() => toast("Default set", a.label)}>
              Use for next order
            </Button>
          </Card>
        ))}
        <Button className="mt-4 w-full" onClick={() => toast("Address form (prototype)")}>
          Add address
        </Button>
      </div>
      <CustomerBottom />
    </div>
  );
}
