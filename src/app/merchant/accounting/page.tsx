"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  const reports = ["Profit & Loss", "Cash Flow", "Balance Sheet", "Sales Report", "Expense Report", "Tax Summary", "Inventory Valuation", "Receivables (customer money owed)", "Payables"];
  return (
    <AppShell>
      <PageHead title="Accounting" />
      <ProtoNote>Figures update when you record POS sales and marketplace orders in this prototype.</ProtoNote>
      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Revenue" value={naira(4280500)} />
        <StatCard label="Expenses" value={naira(3359100)} />
        <StatCard label="Gross profit" value={naira(921400)} />
        <StatCard label="Net profit" value={naira(612000)} />
        <StatCard label="Assets" value={naira(3120000)} />
        <StatCard label="Liabilities" value={naira(185000)} />
        <StatCard label="Customer money owed" value={naira(185000)} />
        <StatCard label="Cash" value={naira(1240500)} />
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {reports.map((r) => (
          <Card key={r} className="flex items-center justify-between p-4 text-sm">
            <span>{r}</span>
            <div className="flex gap-1">
              {["PDF", "CSV", "Excel"].map((e) => (
                <Button key={e} size="sm" variant="outline" onClick={() => toast(`${r} exported as ${e}`)}>
                  {e}
                </Button>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
