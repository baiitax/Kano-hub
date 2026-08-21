"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Card, PageHead } from "@/components/ui";
import { businesses, naira } from "@/data/mock";
import Link from "next/link";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Merchants" />
      <Card className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-xs">
            <tr>
              <th className="p-3">Business</th>
              <th>Owner</th>
              <th>LGA</th>
              <th>Sales</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {businesses.map((b) => (
              <tr key={b.id} className="border-t">
                <td className="p-3">
                  <Link href={`/admin/merchants/${b.id}`} className="font-medium text-emerald-800">
                    {b.name}
                  </Link>
                </td>
                <td>{b.owner}</td>
                <td>{b.lga}</td>
                <td>{naira(b.sales)}</td>
                <td>
                  <Badge tone={b.verified ? "green" : "amber"}>{b.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
}
