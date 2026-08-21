"use client";
import { SupplierShell } from "@/components/supplier-shell";
import { Badge, Card, PageHead, ProtoNote } from "@/components/ui";
import { naira } from "@/data/mock";
import { millBuyers } from "@/data/supplier";
import Link from "next/link";

export default function Page() {
  return (
    <SupplierShell>
      <PageHead title="Merchant buyers" sub="Shops that restock from this mill" />
      <ProtoNote>Credit limits are partner-underwritten illustrations.</ProtoNote>
      <Card className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-white/40 text-left text-xs">
            <tr>
              <th className="p-3">Shop</th>
              <th>LGA</th>
              <th>Orders</th>
              <th>Spend</th>
              <th>Limit used</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            {millBuyers.map((b) => (
              <tr key={b.id} className="border-t">
                <td className="p-3">
                  <Link href={`/supplier/buyers/${b.id}`} className="font-semibold text-emerald-800">
                    {b.name}
                  </Link>
                </td>
                <td>{b.lga}</td>
                <td>{b.orders}</td>
                <td>{naira(b.spend)}</td>
                <td>
                  {naira(b.used)} / {naira(b.creditLimit)}
                </td>
                <td>
                  <Badge tone={b.risk === "Good" ? "green" : "amber"}>{b.risk}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </SupplierShell>
  );
}
