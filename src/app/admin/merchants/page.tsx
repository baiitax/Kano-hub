"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, StatCard } from "@/components/ui";
import { businesses, naira } from "@/data/mock";
import Link from "next/link";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Merchants" />
      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <StatCard label="Onboarded (platform)" value="12,840" />
        <StatCard label="Sample table" value={String(businesses.length)} />
        <StatCard label="Unverified in sample" value={String(businesses.filter((b) => !b.verified).length)} />
      </div>
      <Card className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-xs">
            <tr>
              <th className="p-3">Business</th>
              <th>Owner</th>
              <th>LGA</th>
              <th>Sales</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {businesses.map((b) => (
              <tr key={b.id} className="border-t border-white/40">
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
                <td>
                  <Button size="sm" variant="ghost" href={`/shop/${b.slug}`}>
                    Shop
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
