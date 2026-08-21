"use client";

import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";


export default function Products() {
  const { products } = useStore();
  return (
    <AppShell>
      <PageHead title="Products" actions={<Button href="/merchant/products/new">Add product</Button>} />
      <Card className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-xs">
            <tr>
              <th className="p-3">Product</th>
              <th>SKU</th>
              <th>Price</th>
              <th>Cost</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <ProductThumb kind={p.image} alt={p.name} className="h-12 w-12" />
                    <span className="font-medium">{p.name}</span>
                  </div>
                </td>
                <td>{p.sku}</td>
                <td>{naira(p.price)}</td>
                <td>{naira(p.cost)}</td>
                <td className={p.stock <= p.reorderLevel ? "text-red-600 font-semibold" : ""}>{p.stock}</td>
                <td>
                  <Badge tone="green">Active</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
}
