"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { invoices, naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell>
      <PageHead title="Invoices" actions={<Button onClick={() => toast("Draft invoice created")}>Create invoice</Button>} />
      <Card className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-xs">
            <tr>
              <th className="p-3">Invoice</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((i) => (
              <tr key={i.id} className="border-t">
                <td className="p-3">{i.id}</td>
                <td>{i.customer}</td>
                <td>{naira(i.amount)}</td>
                <td>
                  <Badge tone={i.status === "Paid" ? "green" : "amber"}>{i.status}</Badge>
                </td>
                <td>
                  <Button size="sm" variant="ghost" onClick={() => toast("Invoice sent")}>
                    Send
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
}
