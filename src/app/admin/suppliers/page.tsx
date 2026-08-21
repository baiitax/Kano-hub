"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Card, PageHead } from "@/components/ui";
import { naira, suppliers } from "@/data/mock";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Suppliers" />
      {suppliers.map((s) => (
        <Card key={s.id} className="mb-2 flex justify-between p-4 text-sm">
          <span>
            {s.name} · {s.location}
          </span>
          <span>
            {naira(s.purchases)} {s.verified && <Badge tone="green">Verified</Badge>}
          </span>
        </Card>
      ))}
    </AppShell>
  );
}
