"use client";
import { CompanyShell } from "@/components/logistics-shell";
import { Button, Card, PageHead } from "@/components/ui";
import { useStore } from "@/lib/store";

const reports = ["Daily jobs", "SLA by LGA", "Rider payout", "COD recon", "Incident log"];

export default function Page() {
  const { toast } = useStore();
  return (
    <CompanyShell>
      <PageHead title="Reports" />
      {reports.map((r) => (
        <Card key={r} className="mb-2 flex justify-between p-3">
          <span>{r}</span>
          <Button size="sm" onClick={() => toast(r + " exported")}>
            Export
          </Button>
        </Card>
      ))}
    </CompanyShell>
  );
}
