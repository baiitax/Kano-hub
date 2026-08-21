"use client";
import { PublicHeader } from "@/components/chrome";
import { Badge, Button, Card } from "@/components/ui";
import { suppliers } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-2xl font-bold">Supplier marketplace</h1>
        <p className="text-sm text-slate-500">Wholesalers and distributors for Kano merchants</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {suppliers.map((s) => (
            <Card key={s.id} className="p-5">
              {s.verified && <Badge tone="green">Verified</Badge>}
              <h3 className="mt-2 font-bold">{s.name}</h3>
              <p className="text-sm text-slate-500">
                {s.category} · {s.location} · MOQ {s.moq}
              </p>
              <p className="text-sm">Rating {s.rating}</p>
              <div className="mt-3 flex gap-2">
                <Button size="sm" onClick={() => toast("Quote requested")}>
                  Request quote
                </Button>
                <Button size="sm" variant="outline" onClick={() => toast("Wholesale order started")}>
                  Order
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
