"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { loanPipeline } from "@/data/intel";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="bank">
      <PageHead title="Lending desk" sub="Decisions remain with the licensed partner" />
      <Card className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-xs">
            <tr>
              <th className="p-3">ID</th>
              <th>Merchant</th>
              <th>Amount</th>
              <th>Score</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {loanPipeline.map((l) => (
              <tr key={l.id} className="border-t border-white/40">
                <td className="p-3">{l.id}</td>
                <td>{l.merchant}</td>
                <td>{naira(l.amount)}</td>
                <td>{l.score}</td>
                <td>
                  <Badge>{l.status}</Badge>
                </td>
                <td>
                  <Button size="sm" variant="outline" onClick={() => toast("Sent to credit committee", l.id)}>
                    Review
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
