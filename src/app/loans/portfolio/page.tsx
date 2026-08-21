"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Card, PageHead } from "@/components/ui";
import { loanBook } from "@/data/intel";
import { naira } from "@/data/mock";

export default function Page() {
  return (
    <PortalShell kind="loans">
      <PageHead title="Loan portfolio" />
      <Card className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-xs">
            <tr>
              <th className="p-3">Facility</th>
              <th>Merchant</th>
              <th>Outstanding</th>
              <th>Next</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loanBook.map((l) => (
              <tr key={l.id} className="border-t border-white/40">
                <td className="p-3">{l.id}</td>
                <td>{l.merchant}</td>
                <td>{naira(l.outstanding)}</td>
                <td>{l.next}</td>
                <td>
                  <Badge tone={l.status === "Arrears" ? "red" : l.status === "Watch" ? "amber" : "green"}>{l.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </PortalShell>
  );
}
