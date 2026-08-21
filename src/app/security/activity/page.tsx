"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Card, PageHead } from "@/components/ui";
import { socTape } from "@/data/soc";

export default function Page() {
  return (
    <PortalShell kind="security">
      <PageHead title="Live tape" sub="Normalized events from WAF, wallet, KYC, logistics, IAM" />
      <div className="space-y-2">
        {socTape.map((e) => (
          <Card key={e.t} className="p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-emerald-800">{e.t}</span>
              <Badge tone={e.sev === "CRIT" ? "red" : e.sev === "HIGH" ? "amber" : "slate"}>{e.sev}</Badge>
              <Badge>{e.src}</Badge>
            </div>
            <p className="mt-2 text-sm">{e.text}</p>
          </Card>
        ))}
      </div>
    </PortalShell>
  );
}
