"use client";
import { AppShell } from "@/components/chrome";
import { LiveMap, kanoPins } from "@/components/map";
import { Button, PageHead, StatCard } from "@/components/ui";
import { riders } from "@/data/logistics";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Logistics admin" actions={<Button href="/logistics/company" size="sm">Company</Button>} />
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Active riders" value="1,204" />
        <StatCard label="Success rate" value="96.4%" />
        <StatCard label="Avg time" value="54 min" />
      </div>
      <LiveMap
        className="mt-4 h-64"
        pickup={{ ...kanoPins.zoo, label: "Shop" }}
        drop={{ ...kanoPins.hotoro, label: "Customer" }}
        riders={riders.map((r) => ({ id: r.id, x: r.x, y: r.y, label: r.name, tone: "rider" as const }))}
      />
    </AppShell>
  );
}
