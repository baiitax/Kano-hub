"use client";
import { AppShell } from "@/components/chrome";
import { Card, PageHead } from "@/components/ui";
import { customers, naira } from "@/data/mock";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Customers" />
      <Card className="divide-y">
        {customers.map((c) => (
          <div key={c.id} className="flex justify-between p-3 text-sm">
            <span>{c.name}</span>
            <span>{naira(c.spent)} · {c.orders} orders</span>
          </div>
        ))}
      </Card>
    </AppShell>
  );
}
