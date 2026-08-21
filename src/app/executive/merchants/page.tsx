"use client";
import { ExecShell } from "@/components/exec-shell";
import { Badge, Card, StatCard } from "@/components/ui";
import { businesses, naira } from "@/data/mock";

export default function Page() {
  return (
    <ExecShell>
      <h1 className="text-2xl font-extrabold text-white">Merchant health</h1>
      <div className="mt-4 grid gap-3 sm:grid-cols-4">
        <StatCard label="Onboarded" value="12,840" />
        <StatCard label="Active 30d" value="8,426" />
        <StatCard label="Verified" value="71%" />
        <StatCard label="Churn 30d" value="2.1%" />
      </div>
      <Card className="mt-4 overflow-auto bg-slate-900/80">
        <table className="w-full text-sm text-slate-200">
          <thead className="text-xs text-slate-500">
            <tr>
              <th className="p-3">Business</th>
              <th>LGA</th>
              <th>Sales</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {businesses.map((b) => (
              <tr key={b.id} className="border-t border-white/10">
                <td className="p-3 font-medium">{b.name}</td>
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
    </ExecShell>
  );
}
