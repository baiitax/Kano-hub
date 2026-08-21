"use client";
import { ExecShell } from "@/components/exec-shell";
import { Card, StatCard } from "@/components/ui";
import { customers, naira } from "@/data/mock";

export default function Page() {
  return (
    <ExecShell>
      <h1 className="text-2xl font-extrabold text-white">Customers</h1>
      <div className="mt-4 grid gap-3 sm:grid-cols-4">
        <StatCard label="Registered" value="54,230" />
        <StatCard label="MAU" value="31,400" />
        <StatCard label="Repeat 90d" value="41%" />
        <StatCard label="Wallet funded" value="18,200" />
      </div>
      <Card className="mt-4 divide-y divide-white/10 bg-slate-900/80">
        {customers.map((c) => (
          <div key={c.id} className="flex justify-between p-3 text-sm text-slate-200">
            <span>
              {c.name} · {c.type}
            </span>
            <span>
              {c.orders} orders · {naira(c.spent)}
            </span>
          </div>
        ))}
      </Card>
    </ExecShell>
  );
}
