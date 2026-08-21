"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Card, PageHead, StatCard } from "@/components/ui";
import { businesses, customers, staff } from "@/data/mock";

export default function Page() {
  return (
    <PortalShell kind="security">
      <PageHead title="Identities" sub="Graph of customers · merchants · staff" />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Customer IDs" value={String(customers.length)} hint="Sample set" />
        <StatCard label="Merchant entities" value={String(businesses.length)} />
        <StatCard label="Privileged staff" value={String(staff.length)} />
      </div>
      <h2 className="mt-6 font-semibold">Customers</h2>
      {customers.map((c) => (
        <Card key={c.id} className="mb-2 flex justify-between p-3 text-sm">
          <span>
            {c.name} · {c.phone} · {c.orders} orders
          </span>
          <Badge>{c.type}</Badge>
        </Card>
      ))}
      <h2 className="mt-4 font-semibold">Merchants</h2>
      {businesses.map((b) => (
        <Card key={b.id} className="mb-2 flex justify-between p-3 text-sm">
          <span>
            {b.name} · {b.owner} · {b.lga}
          </span>
          <Badge tone={b.verified ? "green" : "amber"}>{b.status}</Badge>
        </Card>
      ))}
      <h2 className="mt-4 font-semibold">Staff</h2>
      {staff.map((s) => (
        <Card key={s.id} className="mb-2 flex justify-between p-3 text-sm">
          <span>
            {s.name} · {s.role}
          </span>
          <span className="text-slate-500">{s.last}</span>
        </Card>
      ))}
    </PortalShell>
  );
}
