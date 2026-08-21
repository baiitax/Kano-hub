"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, PageHead } from "@/components/ui";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell kind="admin">
      <PageHead title="Reporting" />
      {["Merchant", "Sales", "Payment", "Logistics", "Financial", "Growth", "Platform"].map((r) => (
        <Card key={r} className="mb-2 flex items-center justify-between p-3">
          <span>{r} report</span>
          <Button size="sm" onClick={() => toast(r + " report generated")}>
            Generate
          </Button>
        </Card>
      ))}
    </AppShell>
  );
}
