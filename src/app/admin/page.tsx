"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { opsTape } from "@/data/ops";
import { platformKpis } from "@/data/mock";
import { socAlerts } from "@/data/intel";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Platform operations" sub="21 Aug 2026 · 09:44 WAT · Halima Usman" />
      <ProtoNote />
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <StatCard label="Merchants" value={platformKpis.merchants.toLocaleString()} hint="Active 8,426" />
        <StatCard label="Customers" value={platformKpis.customers.toLocaleString()} />
        <StatCard label="Orders" value={platformKpis.orders.toLocaleString()} />
        <StatCard label="GMV" value={`₦${platformKpis.gmv}B`} hint={`+${platformKpis.growth}%`} />
        <StatCard label="Payment volume" value="₦4.1B" />
        <StatCard label="Open tickets" value="2" hint="1 high" />
        <StatCard label="KYC pending" value="14" />
        <StatCard label="SOC war room" value="1" />
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="p-4 lg:col-span-2">
          <div className="mb-2 flex justify-between">
            <p className="font-semibold">Ops tape</p>
            <Button href="/admin/activity" size="sm" variant="ghost">
              Full tape
            </Button>
          </div>
          {opsTape.map((e) => (
            <p key={e.t + e.text} className="mt-2 text-sm">
              <span className="font-mono text-xs text-emerald-800">{e.t}</span> <Badge>{e.type}</Badge> {e.text}
            </p>
          ))}
        </Card>
        <div className="space-y-3">
          <Card className="p-4">
            <p className="font-semibold">Queues</p>
            <p className="mt-2 text-sm">Verification 14 · Tickets 2 · Disputes 3 · Exceptions 3</p>
            <Button href="/admin/verification" size="sm" className="mt-2">
              KYC
            </Button>
            <Button href="/admin/tickets" size="sm" variant="outline" className="ml-2">
              Tickets
            </Button>
          </Card>
          <Card className="p-4 text-sm">
            <p className="font-semibold">Desks</p>
            <Button href="/bank" size="sm" className="mt-2">
              Bank
            </Button>
            <Button href="/loans" size="sm" className="ml-2">
              Loans
            </Button>
            <Button href="/security" size="sm" variant="outline" className="ml-2">
              SOC {socAlerts[0].id}
            </Button>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
