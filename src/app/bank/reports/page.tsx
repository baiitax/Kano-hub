"use client";
import { PortalShell } from "@/components/portals";
import { Button, Card, PageHead } from "@/components/ui";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="bank">
      <PageHead title="Bank reports" />
      {["Daily settlement", "Loan tap report", "Chargeback", "AML exception"].map((r) => (
        <Card key={r} className="mb-2 flex items-center justify-between p-3">
          <span>{r}</span>
          <Button size="sm" onClick={() => toast(r + " exported")}>
            Export
          </Button>
        </Card>
      ))}
    </PortalShell>
  );
}
