"use client";
import { AppShell } from "@/components/chrome";
import { Card, PageHead } from "@/components/ui";
import { auditTrail } from "@/data/intel";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Audit log" sub="Who · what · when · before → after" />
      {auditTrail.map((a, i) => (
        <Card key={i} className="mb-2 p-3 text-sm">
          <p className="font-semibold">
            {a.who} · {a.action} · {a.entity}
          </p>
          <p className="text-slate-600">
            {a.before} → {a.after} · {a.when}
          </p>
        </Card>
      ))}
    </AppShell>
  );
}
