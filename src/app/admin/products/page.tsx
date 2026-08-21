"use client";
import { AppShell, ProductThumb } from "@/components/chrome";
import { Badge, Card, PageHead } from "@/components/ui";
import { naira, products } from "@/data/mock";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Platform catalog" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Card key={p.id} className="flex gap-3 p-3">
            <ProductThumb kind={p.image} alt={p.name} className="h-16 w-16" />
            <div className="min-w-0">
              <p className="truncate font-semibold">{p.name}</p>
              <p className="text-xs text-slate-500">{p.merchantName}</p>
              <p className="text-sm font-bold">{naira(p.price)}</p>
              <Badge tone="green">Listed</Badge>
            </div>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
