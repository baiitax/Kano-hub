"use client";
import { PortalShell } from "@/components/portals";
import { Card, PageHead, ProtoNote, StatCard } from "@/components/ui";

export default function Page() {
  return (
    <PortalShell kind="bank">
      <PageHead title="Card acquiring" />
      <ProtoNote>Card processing through licensed payment partners only.</ProtoNote>
      <div className="grid gap-3 sm:grid-cols-4">
        <StatCard label="Auth rate" value="96.4%" />
        <StatCard label="Volume 7d" value="₦410M" />
        <StatCard label="Chargebacks" value="3" />
        <StatCard label="3DS step-up" value="12%" />
      </div>
      <Card className="mt-4 p-4 text-sm">
        Scheme mix: Visa 41% · Mastercard 38% · Verve 21%. Highest decline: insufficient funds (partner code 51).
      </Card>
    </PortalShell>
  );
}
