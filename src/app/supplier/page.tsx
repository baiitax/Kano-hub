"use client";
import { AppShell } from "@/components/chrome";
import { Card, PageHead, StatCard } from "@/components/ui";
import { naira } from "@/data/mock";

export default function Page() {
  return (
    <AppShell kind="supplier">
      <PageHead title="Kano Textile Mills" sub="Wholesale portal" />
      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Orders" value="86" />
        <StatCard label="Revenue" value={naira(1240000)} />
        <StatCard label="Inventory SKUs" value="214" />
        <StatCard label="Outstanding" value={naira(85000)} />
      </div>
      <Card className="mt-4 p-4 text-sm">
        New wholesale order from Aisha Fashion House · Ankara 40 yards · Pending confirmation
      </Card>
    </AppShell>
  );
}
