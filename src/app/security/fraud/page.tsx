"use client";
import { PortalShell } from "@/components/portals";
import { Card, PageHead, StatCard } from "@/components/ui";

export default function Page() {
  return (
    <PortalShell kind="security">
      <PageHead title="Fraud lab" />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Rules live" value="48" />
        <StatCard label="Precision (7d)" value="91%" />
        <StatCard label="False positive" value="3.2%" />
      </div>
      <Card className="mt-4 p-4 text-sm">
        <p className="font-semibold">Active rules</p>
        <ul className="mt-2 list-disc pl-5 text-slate-600">
          <li>3+ wallet top-ups then payout in 15 min</li>
          <li>New device + high ticket + new address</li>
          <li>Same IMEI across ≥2 merchant IDs</li>
          <li>Coupon used &gt; 8× per hour</li>
        </ul>
      </Card>
    </PortalShell>
  );
}
