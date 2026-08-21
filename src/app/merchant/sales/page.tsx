"use client";
import { AppShell } from "@/components/chrome";
import { Card, PageHead, StatCard } from "@/components/ui";
import { naira, orders, products, revenueSeries } from "@/data/mock";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export default function Page() {
  const byStaff = [
    { n: "Aisha Abdullahi", v: 2100000 },
    { n: "Khadija Usman", v: 1280000 },
    { n: "Rukayya Sule", v: 900500 },
  ];
  return (
    <AppShell>
      <PageHead title="Sales" sub="POS + marketplace · cost of goods after each sale" />
      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Revenue" value={naira(4280500)} hint="+18% vs July" />
        <StatCard label="Cost of goods" value={naira(3359100)} />
        <StatCard label="Gross profit" value={naira(921400)} />
        <StatCard label="Avg order" value={naira(15072)} />
      </div>
      <Card className="mt-6 h-64 p-4">
        <p className="text-sm font-semibold">This week</p>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={revenueSeries}>
            <XAxis dataKey="d" />
            <Tooltip />
            <Bar dataKey="revenue" fill="#047857" radius={6} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card className="p-4 text-sm">
          <p className="font-semibold">By product</p>
          {products
            .filter((p) => p.merchantId === "b1")
            .map((p) => (
              <div key={p.id} className="mt-2 flex justify-between">
                <span>{p.name}</span>
                <span className="font-medium">{naira(p.price * Math.max(2, 12 - p.stock))}</span>
              </div>
            ))}
        </Card>
        <Card className="p-4 text-sm">
          <p className="font-semibold">By staff</p>
          {byStaff.map((s) => (
            <div key={s.n} className="mt-2 flex justify-between">
              <span>{s.n}</span>
              <span className="font-medium">{naira(s.v)}</span>
            </div>
          ))}
          <p className="mt-4 font-semibold">Latest tickets</p>
          {orders.slice(0, 3).map((o) => (
            <p key={o.id} className="mt-1 text-slate-600">
              {o.id} · {o.customer} · {naira(o.amount)}
            </p>
          ))}
        </Card>
      </div>
    </AppShell>
  );
}
