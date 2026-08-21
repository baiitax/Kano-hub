"use client";
import { AppShell } from "@/components/chrome";
import { Card, PageHead, ProtoNote } from "@/components/ui";

export default function Page() {
  const items = [
    ["Business activity", "Excellent"],
    ["Payment history", "Excellent"],
    ["Revenue consistency", "Good"],
    ["Cash flow", "Good"],
    ["Inventory management", "Excellent"],
    ["Account history", "Good"],
  ];
  return (
    <AppShell>
      <PageHead title="Business financial profile" />
      <ProtoNote>
        Credit readiness is an indicative platform metric and does not guarantee loan approval. Financing decisions are made by participating financial institutions.
      </ProtoNote>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-8 text-center">
          <p className="text-sm uppercase tracking-wide text-slate-500">Credit readiness</p>
          <p className="mt-2 text-7xl font-extrabold text-emerald-800">742</p>
          <p className="mt-2 font-semibold text-emerald-700">Strong Credit Readiness</p>
        </Card>
        <Card className="space-y-3 p-6 text-sm">
          {items.map(([k, v]) => (
            <div key={k} className="flex justify-between">
              <span>{k}</span>
              <span className="font-semibold text-emerald-800">{v}</span>
            </div>
          ))}
        </Card>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3 text-sm">
        {[
          ["Business age", "4 years"],
          ["Avg monthly sales", "₦4.28M"],
          ["Payment behaviour", "On-time"],
        ].map(([k, v]) => (
          <Card key={k} className="p-4">
            <p className="text-slate-500">{k}</p>
            <p className="font-bold">{v}</p>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
