"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Card, PageHead } from "@/components/ui";
import { customers } from "@/data/mock";
import { staff } from "@/data/mock";

export default function Page() {
  return (
    <PortalShell kind="security">
      <PageHead title="Identities" sub="Customers, staff, merchants — access graph" />
      <h2 className="font-semibold">Customers</h2>
      {customers.map((c) => (
        <Card key={c.id} className="mb-2 flex justify-between p-3 text-sm">
          <span>
            {c.name} · {c.phone}
          </span>
          <Badge>{c.type}</Badge>
        </Card>
      ))}
      <h2 className="mt-4 font-semibold">Staff sessions</h2>
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
