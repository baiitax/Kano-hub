"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { naira, suppliers } from "@/data/mock";
import Link from "next/link";

export default function Page() {
  return (
    <AppShell>
      <PageHead title="Suppliers" actions={<Button href="/suppliers">Discover wholesale</Button>} />
      <Card className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-xs">
            <tr>
              <th className="p-3">Supplier</th>
              <th>Category</th>
              <th>Purchases</th>
              <th>Outstanding</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="p-3">
                  <Link href={`/merchant/suppliers/${s.id}`} className="font-medium">
                    {s.name}
                  </Link>{" "}
                  {s.verified && <Badge tone="green">Verified</Badge>}
                </td>
                <td>{s.category}</td>
                <td>{naira(s.purchases)}</td>
                <td>{naira(s.outstanding)}</td>
                <td>{s.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
}
