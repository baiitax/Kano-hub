"use client";
import { PortalShell } from "@/components/portals";
import { Button, Card, PageHead, StatCard } from "@/components/ui";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="bank">
      <PageHead title="Settlements" sub="T+1 NIBSS file · 22:00 WAT cut-off" />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Pending batch" value="₦42.1M" />
        <StatCard label="Merchants in file" value="1,842" />
        <StatCard label="Failed last night" value="12" />
      </div>
      <Card className="mt-4 space-y-2 p-4 text-sm">
        <p>Tonight’s file includes POS + marketplace + wallet. Fees routed to payment partner.</p>
        <p className="font-mono text-xs">Hash e7c1… · Notional NIBSS Instant</p>
        <Button onClick={() => toast("Settlement file generated (prototype)")}>Generate NIBSS file</Button>
        <Button variant="outline" className="ml-2" onClick={() => toast("Exceptions exported")}>
          Exception CSV
        </Button>
      </Card>
    </PortalShell>
  );
}
