"use client";
import { PortalShell } from "@/components/portals";
import { Card, PageHead } from "@/components/ui";

const limits = [
  ["Tier 1 daily NIP", "₦50,000"],
  ["Tier 2 daily NIP", "₦200,000"],
  ["Tier 3 daily NIP", "₦1,000,000"],
  ["Single POS ticket", "₦500,000"],
  ["Coupon velocity", "8 / hour / user"],
];

export default function Page() {
  return (
    <PortalShell kind="bank">
      <PageHead title="Limits" sub="Partner-configured · change requires dual control" />
      {limits.map(([k, v]) => (
        <Card key={k} className="mb-2 flex justify-between p-4 text-sm">
          <span>{k}</span>
          <span className="font-bold">{v}</span>
        </Card>
      ))}
    </PortalShell>
  );
}
