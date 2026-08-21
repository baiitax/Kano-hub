"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, PageHead } from "@/components/ui";
import { useStore } from "@/lib/store";

const reports = [
  "Daily sales",
  "Product mix",
  "Staff sales",
  "Inventory valuation",
  "Customer money owed",
  "Tax summary",
  "Delivery SLA",
];

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell>
      <PageHead title="Reports" sub="Export PDF / CSV / Excel" />
      {reports.map((r) => (
        <Card key={r} className="mb-2 flex items-center justify-between p-4">
          <span className="font-medium">{r}</span>
          <div className="flex gap-1">
            {["PDF", "CSV", "Excel"].map((e) => (
              <Button key={e} size="sm" variant="outline" onClick={() => toast(`${r} → ${e}`)}>
                {e}
              </Button>
            ))}
          </div>
        </Card>
      ))}
    </AppShell>
  );
}
