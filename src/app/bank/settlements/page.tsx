"use client";
import { PortalShell } from "@/components/portals";
import { Button, Card, PageHead, StatCard } from "@/components/ui";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="bank">
      <PageHead title="Settlements" />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Pending batch" value="₦42.1M" />
        <StatCard label="Next window" value="22:00 WAT" />
        <StatCard label="Failed" value="12" />
      </div>
      <Card className="mt-4 p-4 text-sm">
        Tonight’s T+1 batch includes 1,842 merchants. Fees routed to payment partner.
        <Button className="mt-3" onClick={() => toast("Settlement file generated (prototype)")}>
          Generate NIBSS file
        </Button>
      </Card>
    </PortalShell>
  );
}
