"use client";
import { AppShell } from "@/components/chrome";
import { PageHead, ProtoNote, StatCard } from "@/components/ui";
import { platformKpis } from "@/data/mock";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Platform operations" />
      <ProtoNote />
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <StatCard label="Merchants" value={platformKpis.merchants.toLocaleString()} hint="Active 8,426" />
        <StatCard label="Customers" value={platformKpis.customers.toLocaleString()} />
        <StatCard label="Orders" value={platformKpis.orders.toLocaleString()} />
        <StatCard label="GMV" value={`₦${platformKpis.gmv}B`} hint={`+${platformKpis.growth}%`} />
        <StatCard label="Payment volume" value="₦4.1B" />
        <StatCard label="Logistics volume" value="141,200" />
        <StatCard label="Platform revenue" value="₦182M" />
        <StatCard label="Active loans (partners)" value="214" />
      </div>
    </AppShell>
  );
}
