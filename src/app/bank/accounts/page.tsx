"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Button, Card, PageHead, StatCard } from "@/components/ui";
import { businesses, naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="bank">
      <PageHead title="Merchant accounts" sub="Virtual NUBAN-style accounts via payment partners" />
      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <StatCard label="Open accounts" value="8,426" />
        <StatCard label="Tier 2+" value="71%" />
        <StatCard label="Frozen" value="12" />
      </div>
      <Card className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-xs">
            <tr>
              <th className="p-3">Business</th>
              <th>NUBAN</th>
              <th>Balance</th>
              <th>KYC</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {businesses.map((b, i) => (
              <tr key={b.id} className="border-t border-white/40">
                <td className="p-3 font-medium">{b.name}</td>
                <td className="tabular-nums">2088 441{i} 019{i}</td>
                <td>{naira(Math.round(b.sales / 4))}</td>
                <td>
                  <Badge tone={b.verified ? "green" : "amber"}>{b.verified ? "Tier 2" : "Tier 1"}</Badge>
                </td>
                <td>
                  <Button size="sm" variant="ghost" onClick={() => toast("Statement queued", b.name)}>
                    Statement
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </PortalShell>
  );
}
