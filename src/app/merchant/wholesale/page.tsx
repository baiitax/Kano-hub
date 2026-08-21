"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, ProtoNote } from "@/components/ui";
import { naira } from "@/data/mock";
import { millPos } from "@/data/supplier";

export default function Page() {
  const mine = millPos.filter((p) => p.shop === "Aisha Fashion House");
  return (
    <AppShell>
      <PageHead
        title="My wholesale orders"
        sub="Restock from mills · Aisha Fashion House"
        actions={<Button href="/wholesale">B2B floor</Button>}
      />
      <ProtoNote>Partner settlements only. Financing not guaranteed.</ProtoNote>
      {mine.map((p) => (
        <Card key={p.id} className="mb-3 p-4">
          <div className="flex flex-wrap justify-between gap-2">
            <div>
              <p className="font-semibold">
                {p.id} · {p.mill}
              </p>
              <p className="text-sm text-slate-600">
                {p.items.map((i) => `${i.name} × ${i.qty}`).join(", ")}
              </p>
              <p className="text-xs text-slate-500">
                {p.date} · {p.slot} · {p.credit}
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold">{naira(p.amount)}</p>
              <Badge>{p.status}</Badge>
            </div>
          </div>
        </Card>
      ))}
    </AppShell>
  );
}
