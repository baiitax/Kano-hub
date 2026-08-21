"use client";
import { PortalShell } from "@/components/portals";
import { Card, PageHead, StatCard } from "@/components/ui";

export default function Page() {
  return (
    <PortalShell kind="bank">
      <PageHead title="Credit risk" />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="PAR 30" value="2.4%" />
        <StatCard label="Write-off YTD" value="0.6%" />
        <StatCard label="Avg score funded" value="731" />
      </div>
      <Card className="mt-4 space-y-2 p-4 text-sm">
        <p>Concentration: Fashion 34% · Electronics 22% · Food 18%.</p>
        <p>Early warning: Dala Spare Parts 21 DPD — collections visit logged.</p>
        <p>Watch: Hotoro Pharmacy 9 DPD.</p>
        <p>Fagge electronics cluster monitored jointly with SOC (shared IMEI).</p>
      </Card>
    </PortalShell>
  );
}
