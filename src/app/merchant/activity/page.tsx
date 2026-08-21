"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Card, PageHead } from "@/components/ui";
import { shopTape } from "@/data/merchant-ops";

export default function Page() {
  return (
    <AppShell>
      <PageHead title="Live activity" sub="Orders, stock, cash, staff and reviews in one tape" />
      <div className="space-y-2">
        {shopTape.map((a) => (
          <Card key={a.t + a.text} className="p-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-emerald-800">{a.t}</span>
              <Badge>{a.type}</Badge>
            </div>
            <p className="mt-1 text-sm">{a.text}</p>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
