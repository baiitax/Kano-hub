"use client";
import { ExecShell } from "@/components/exec-shell";
import { Card, ProtoNote, StatCard } from "@/components/ui";
import { monthly } from "@/data/executive";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function Page() {
  return (
    <ExecShell>
      <h1 className="text-2xl font-extrabold text-white">GMV & take rate</h1>
      <ProtoNote>Modelled GMV. Take is partner-routed platform share, not a bank P&L.</ProtoNote>
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="August GMV" value="₦1.54B" />
        <StatCard label="YTD GMV" value="₦4.72B" />
        <StatCard label="Take (Aug)" value="₦24.8M" hint="1.82% blended" />
      </div>
      <Card className="mt-4 h-72 bg-slate-900/80 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthly}>
            <XAxis dataKey="m" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Line dataKey="gmv" stroke="#34d399" name="GMV ₦bn" />
            <Line dataKey="take" stroke="#fbbf24" name="Take ₦m" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
      <Card className="mt-4 overflow-auto bg-slate-900/80">
        <table className="w-full text-left text-sm text-slate-200">
          <thead className="text-xs text-slate-500">
            <tr>
              <th className="p-3">Month</th>
              <th>GMV ₦bn</th>
              <th>Orders</th>
              <th>Take ₦m</th>
            </tr>
          </thead>
          <tbody>
            {monthly.map((r) => (
              <tr key={r.m} className="border-t border-white/10">
                <td className="p-3">{r.m}</td>
                <td>{r.gmv.toFixed(2)}</td>
                <td>{r.orders.toLocaleString()}</td>
                <td>{r.take}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </ExecShell>
  );
}
