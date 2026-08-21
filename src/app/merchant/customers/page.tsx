"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { customers, naira } from "@/data/mock";
import { useStore } from "@/lib/store";
import Link from "next/link";

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell>
      <PageHead title="Customers" />
      <Card className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-xs">
            <tr>
              <th className="p-3">Name</th>
              <th>Phone</th>
              <th>Orders</th>
              <th>Spent</th>
              <th>Owed</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="p-3">
                  <Link href={`/merchant/customers/${c.id}`} className="font-medium text-emerald-800">
                    {c.name}
                  </Link>
                  <Badge>{c.type}</Badge>
                </td>
                <td>{c.phone}</td>
                <td>{c.orders}</td>
                <td>{naira(c.spent)}</td>
                <td>{naira(c.outstanding)}</td>
                <td>
                  <Button size="sm" variant="ghost" onClick={() => toast("Invoice drafted")}>
                    Invoice
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
