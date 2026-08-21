"use client";

import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, ProtoNote, StatCard } from "@/components/ui";
import { naira, orders, products, revenueSeries } from "@/data/mock";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useState } from "react";
import Link from "next/link";
import { Plus, Receipt, Truck, Wallet } from "lucide-react";
import { shopTape } from "@/data/merchant-ops";

export default function MerchantHome() {
  const [range, setRange] = useState("30 Days");
  return (
    <AppShell>
      <ProtoNote />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-extrabold sm:text-2xl">Good morning, Aisha 👋</h1>
          <p className="text-sm text-slate-600">
            Aisha Fashion House · Nassarawa <Badge tone="green">Verified</Badge>
          </p>
        </div>
        <div className="flex gap-1 overflow-x-auto">
          {["Today", "7 Days", "30 Days", "Custom"].map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`shrink-0 rounded-full px-3 py-2 text-xs font-semibold ${range === r ? "bg-emerald-700 text-white" : "glass"}`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:hidden">
        {[
          ["/merchant/pos", Plus, "Record sale"],
          ["/merchant/products/new", Receipt, "Add product"],
          ["/merchant/expenses", Wallet, "Expense"],
          ["/merchant/logistics", Truck, "Delivery"],
        ].map(([href, Icon, label]) => (
          <Link key={href as string} href={href as string} className="glass flex min-h-14 items-center gap-2 rounded-2xl px-3 text-sm font-semibold">
            <Icon className="h-4 w-4 text-emerald-800" />
            {label as string}
          </Link>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-3">
        <StatCard label="Total Sales" value={naira(4280500)} hint="+18% vs last month" />
        <StatCard label="Orders" value="284" />
        <StatCard label="Customers" value="173" />
        <StatCard label="Gross Profit" value={naira(921400)} />
        <StatCard label="Inventory Value" value={naira(2430000)} />
        <StatCard label="Money owed" value={naira(185000)} hint="Customer balances" />
      </div>
      <Card className="mt-5 p-3 sm:p-4">
        <p className="font-semibold">Revenue & profit</p>
        <div className="h-48 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueSeries}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="d" />
              <YAxis hide width={0} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#047857" strokeWidth={2} />
              <Line type="monotone" dataKey="profit" stroke="#1d4ed8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-semibold">Recent orders</p>
            <Button href="/merchant/orders" size="sm" variant="ghost">
              View all
            </Button>
          </div>
          <div className="space-y-2 lg:hidden">
            {orders.slice(0, 5).map((o) => (
              <Card key={o.id} className="p-3">
                <div className="flex justify-between gap-2">
                  <p className="text-sm font-semibold">{o.customer}</p>
                  <Badge tone={o.status === "Delivered" ? "green" : "amber"}>{o.status}</Badge>
                </div>
                <p className="text-xs text-slate-500">{o.id}</p>
                <p className="mt-1 font-bold tabular-nums">{naira(o.amount)}</p>
              </Card>
            ))}
          </div>
          <Card className="hidden overflow-auto lg:block">
            <table className="w-full text-left text-sm">
              <thead className="text-xs text-slate-500">
                <tr>
                  <th className="p-3">Order</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.slice(0, 5).map((o) => (
                  <tr key={o.id} className="border-t border-white/40">
                    <td className="p-3 font-medium">{o.id}</td>
                    <td>{o.customer}</td>
                    <td className="tabular-nums">{naira(o.amount)}</td>
                    <td>
                      <Badge tone={o.status === "Delivered" ? "green" : "amber"}>{o.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
        <div className="space-y-4">
          <Card className="p-4">
            <p className="font-semibold">Low stock</p>
            {products
              .filter((p) => p.stock <= p.reorderLevel)
              .map((p) => (
                <div key={p.id} className="mt-3 flex items-center justify-between gap-2 text-sm">
                  <div>
                    <p className="font-medium">{p.name}</p>
                    <p className="text-xs text-red-600">
                      Stock {p.stock} · Reorder {p.reorderLevel}
                    </p>
                  </div>
                  <Button href="/merchant/suppliers" size="sm">
                    Reorder
                  </Button>
                </div>
              ))}
          </Card>
          <Card className="p-4 text-sm">
            <p className="font-semibold">Insights</p>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-slate-600">
              <li>Sales increased 18% this month.</li>
              <li>Fashion is your top category.</li>
              <li>Weekend sales +32% vs weekdays.</li>
            </ul>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
