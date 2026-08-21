"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Card, PageHead } from "@/components/ui";
import { businesses, naira } from "@/data/mock";

export default function Page() {
  return (
    <PortalShell kind="bank">
      <PageHead title="Merchant accounts" sub="Virtual NUBAN-style accounts via payment partners" />
      <Card className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-xs">
            <tr>
              <th className="p-3">Business</th>
              <th>Account</th>
              <th>Balance</th>
              <th>KYC</th>
            </tr>
          </thead>
          <tbody>
            {businesses.map((b, i) => (
              <tr key={b.id} className="border-t border-white/40">
                <td className="p-3 font-medium">{b.name}</td>
                <td className="tabular-nums">2088 441{i} 019{i}</td>
                <td>{naira(b.sales / 4)}</td>
                <td>
                  <Badge tone={b.verified ? "green" : "amber"}>{b.verified ? "Tier 2" : "Tier 1"}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </PortalShell>
  );
}
