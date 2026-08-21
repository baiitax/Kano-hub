"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, StatCard } from "@/components/ui";
import { naira, orders } from "@/data/mock";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="All orders" />
      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <StatCard label="Live (sample)" value={String(orders.length)} />
        <StatCard label="Paid" value={String(orders.filter((o) => o.paymentStatus === "Paid").length)} />
        <StatCard label="In delivery" value="2" />
      </div>
      <Card className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50/50 text-left text-xs">
            <tr>
              <th className="p-3">ID</th>
              <th>Merchant</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Pay</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t">
                <td className="p-3 font-medium">{o.id}</td>
                <td>{o.merchant}</td>
                <td>{o.customer}</td>
                <td>{naira(o.amount)}</td>
                <td>{o.payment}</td>
                <td>
                  <Badge>{o.status}</Badge>
                </td>
                <td>
                  <Button size="sm" variant="ghost" href={`/customer/orders/${o.id}`}>
                    Track
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
