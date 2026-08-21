"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, PageHead } from "@/components/ui";
import { useStore } from "@/lib/store";

const reports = [
  "Merchant activation",
  "Sales / GMV",
  "Payment success",
  "Payout exception",
  "Logistics SLA",
  "KYC ageing",
  "Ticket SLA",
  "Growth / LGA",
  "Platform P&L (illustrative)",
];

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell kind="admin">
      <PageHead title="Reporting" />
      {reports.map((r) => (
        <Card key={r} className="mb-2 flex items-center justify-between p-3">
          <span>{r} report</span>
          <Button size="sm" onClick={() => toast(r + " generated")}>
            Generate
          </Button>
        </Card>
      ))}
    </AppShell>
  );
}
