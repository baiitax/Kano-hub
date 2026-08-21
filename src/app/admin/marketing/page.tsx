"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Card, PageHead, StatCard } from "@/components/ui";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Platform marketing" />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Live campaigns" value="6" />
        <StatCard label="Coupon redemptions" value="1,204" />
        <StatCard label="Push sent (7d)" value="54k" />
      </div>
      <Card className="mt-4 p-4 text-sm">
        Sallah 10 · Active · Fashion merchants <Badge tone="green">On</Badge>
      </Card>
    </AppShell>
  );
}
