"use client";
import { PortalShell } from "@/components/portals";
import { Button, Card, PageHead } from "@/components/ui";
import { useStore } from "@/lib/store";

const reports = [
  "Daily settlement",
  "NIP exception",
  "Loan tap / disbursement",
  "Chargeback",
  "AML exception",
  "KYC ageing",
  "Nostro position",
];

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="bank">
      <PageHead title="Bank reports" />
      {reports.map((r) => (
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
