"use client";

import { SupplierShell } from "@/components/supplier-shell";
import { Badge, Button, Card, ProtoNote, StatCard } from "@/components/ui";
import { naira } from "@/data/mock";
import { millPos, millSeries, millSkus, millTape } from "@/data/supplier";
import Link from "next/link";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export default function Page() {
  const mine = millPos.filter((p) => p.mill === "Kano Textile Mills");
  return (
    <SupplierShell>
      <ProtoNote>
        Illustrative mill data. Trade credit and settlements are powered by participating licensed financial partners — not
        guaranteed. KanoHub is not a bank or lender.
      </ProtoNote>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold">Good morning, Hassan</h1>
          <p className="text-sm text-slate-600">
            Kano Textile Mills · Sharada · supplying Kantin Kwari <Badge tone="green">Verified mill</Badge>
          </p>
        </div>
        <div className="flex gap-2">
          <Button href="/supplier/orders" size="sm">
            Confirm POs
          </Button>
          <Button href="/wholesale" size="sm" variant="outline">
            B2B floor
          </Button>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="30-day mill GMV" value={naira(18420000)} hint="+12% vs July · prototype" />
        <StatCard label="Open POs" value={String(mine.filter((p) => p.status !== "Settled").length)} />
        <StatCard label="Trade credit out" value={naira(1240000)} hint="Partner terms" />
        <StatCard label="SKUs below reorder" value={String(millSkus.filter((s) => s.millId === "s1" && s.stock <= s.reorder * 2).length)} />
      </div>
      <Card className="mt-5 p-4">
        <p className="font-semibold">Mill GMV (week)</p>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={millSeries}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="d" />
              <Tooltip />
              <Line type="monotone" dataKey="gmv" stroke="#047857" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 overflow-auto">
          <div className="flex items-center justify-between p-4">
            <p className="font-semibold">Incoming purchase orders</p>
            <Button href="/supplier/orders" size="sm" variant="ghost">
              All
            </Button>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-white/40 text-left text-xs text-slate-500">
              <tr>
                <th className="p-3">PO</th>
                <th>Shop</th>
                <th>Amount</th>
                <th>Terms</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mine.map((p) => (
                <tr key={p.id} className="border-t border-white/40">
                  <td className="p-3">
                    <Link href={`/supplier/orders/${p.id}`} className="font-semibold text-emerald-800">
                      {p.id}
                    </Link>
                  </td>
                  <td>{p.shop}</td>
                  <td className="tabular-nums">{naira(p.amount)}</td>
                  <td>{p.credit}</td>
                  <td>
                    <Badge tone={p.status === "Delivered" || p.status === "Settled" ? "green" : "amber"}>{p.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <div className="space-y-2">
          <p className="font-semibold">Tape</p>
          {millTape.slice(0, 5).map((a) => (
            <Card key={a.t + a.text} className="p-3 text-sm">
              <span className="font-mono text-xs text-emerald-800">{a.t}</span> {a.text}
            </Card>
          ))}
        </div>
      </div>
    </SupplierShell>
  );
}
