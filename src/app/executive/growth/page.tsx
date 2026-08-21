"use client";
import { ExecShell } from "@/components/exec-shell";
import { Card, StatCard } from "@/components/ui";
import { cohorts, monthly } from "@/data/executive";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export default function Page() {
  return (
    <ExecShell>
      <h1 className="text-2xl font-extrabold text-white">Growth & cohorts</h1>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <StatCard label="Merchant adds (Aug)" value="+3,440" />
        <StatCard label="Customer adds (Aug)" value="+18,130" />
        <StatCard label="M3 retention" value="68%" />
      </div>
      <Card className="mt-4 h-56 bg-slate-900/80 p-4">
        <p className="text-sm text-slate-300">New merchants / month</p>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={monthly}>
            <XAxis dataKey="m" stroke="#94a3b8" />
            <Tooltip />
            <Bar dataKey="merchants" fill="#047857" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
      <Card className="mt-4 overflow-auto bg-slate-900/80">
        <p className="p-3 text-sm font-semibold text-white">Merchant cohort retention %</p>
        <table className="w-full text-sm text-slate-200">
          <thead className="text-xs text-slate-500">
            <tr>
              <th className="p-3">Cohort</th>
              <th>M1</th>
              <th>M2</th>
              <th>M3</th>
              <th>M4</th>
            </tr>
          </thead>
          <tbody>
            {cohorts.map((c) => (
              <tr key={c.month} className="border-t border-white/10">
                <td className="p-3">{c.month}</td>
                <td>{c.m1 || "—"}</td>
                <td>{c.m2 || "—"}</td>
                <td>{c.m3 || "—"}</td>
                <td>{c.m4 || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </ExecShell>
  );
}
