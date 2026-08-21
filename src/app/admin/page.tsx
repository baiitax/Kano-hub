"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { platformKpis } from "@/data/mock";
import { socAlerts } from "@/data/intel";

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
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Card className="p-4">
          <p className="font-semibold">Bank desk</p>
          <p className="text-sm text-slate-600">Settlements, NUBAN, lending</p>
          <Button href="/bank" size="sm" className="mt-2">
            Open
          </Button>
        </Card>
        <Card className="p-4">
          <p className="font-semibold">Loan point</p>
          <p className="text-sm text-slate-600">Pipeline, collections, officers</p>
          <Button href="/loans" size="sm" className="mt-2">
            Open
          </Button>
        </Card>
        <Card className="p-4">
          <p className="font-semibold">Security intel</p>
          <p className="text-sm text-slate-600">{socAlerts[0].id} {socAlerts[0].cat}</p>
          <Button href="/security" size="sm" className="mt-2" variant="outline">
            SOC
          </Button>
        </Card>
      </div>
    </AppShell>
  );
}
