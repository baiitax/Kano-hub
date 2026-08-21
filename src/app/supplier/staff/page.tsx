"use client";
import { SupplierShell } from "@/components/supplier-shell";
import { Badge, Card, PageHead } from "@/components/ui";
import { millStaff } from "@/data/supplier";

export default function Page() {
  return (
    <SupplierShell>
      <PageHead title="Mill staff" sub="Manager, credit clerk, pick-face, dispatch" />
      <div className="grid gap-3 md:grid-cols-2">
        {millStaff.map((s) => (
          <Card key={s.name} className="flex items-center justify-between p-4">
            <div>
              <p className="font-semibold">{s.name}</p>
              <p className="text-sm text-slate-500">{s.role}</p>
            </div>
            <Badge tone="green">{s.last}</Badge>
          </Card>
        ))}
      </div>
    </SupplierShell>
  );
}
