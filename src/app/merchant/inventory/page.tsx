"use client";

import { AppShell } from "@/components/chrome";
import { Card, PageHead, StatCard } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Inventory() {
  const { products } = useStore();
  const value = products.reduce((s, p) => s + p.cost * p.stock, 0);
  const low = products.filter((p) => p.stock <= p.reorderLevel).length;
  return (
    <AppShell>
      <PageHead title="Inventory" sub="Stock value, movement and reorder" />
      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Stock value" value={naira(value)} />
        <StatCard label="Low stock" value={String(low)} />
        <StatCard label="Out of stock" value="0" />
        <StatCard label="Turnover" value="4.2x" />
      </div>
      <Card className="mt-6 overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-xs">
            <tr>
              <th className="p-3">Product</th>
              <th>On hand</th>
              <th>Reorder</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-3">{p.name}</td>
                <td>{p.stock}</td>
                <td>{p.reorderLevel}</td>
                <td>{naira(p.cost * p.stock)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Card className="mt-4 p-4 text-sm">
        <p className="font-semibold">Recent movement</p>
        <p>21 Aug · Sale · Men’s Emerald Kaftan · −1 · KH-2026-1842</p>
        <p>20 Aug · Sale · Sneakers · −2 · KH-2026-1831</p>
        <p>10 Aug · Purchase · Ankara bundle · +40 · PO-229</p>
      </Card>
    </AppShell>
  );
}
