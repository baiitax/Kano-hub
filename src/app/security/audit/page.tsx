"use client";
import { PortalShell } from "@/components/portals";
import { Card, PageHead } from "@/components/ui";
import { auditTrail } from "@/data/intel";

export default function Page() {
  return (
    <PortalShell kind="security">
      <PageHead title="Immutable audit log" sub="Who · what · when · before → after" />
      {auditTrail.map((a, i) => (
        <Card key={i} className="mb-2 p-4 text-sm">
          <p className="font-semibold">
            {a.who} · {a.action}
          </p>
          <p className="text-slate-600">
            {a.entity} · <span className="font-mono">{a.before}</span> → <span className="font-mono">{a.after}</span>
          </p>
          <p className="text-xs text-slate-400">{a.when}</p>
        </Card>
      ))}
    </PortalShell>
  );
}
