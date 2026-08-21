"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Card, PageHead } from "@/components/ui";
import { naira, orders } from "@/data/mock";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="All orders" />
      <Card className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-xs">
            <tr>
              <th className="p-3">ID</th>
              <th>Merchant</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t">
                <td className="p-3">{o.id}</td>
                <td>{o.merchant}</td>
                <td>{o.customer}</td>
                <td>{naira(o.amount)}</td>
                <td>
                  <Badge>{o.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
}
