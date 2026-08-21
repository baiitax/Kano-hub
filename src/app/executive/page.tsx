"use client";
import { Logo } from "@/components/chrome";
import { Card, ProtoNote, StatCard } from "@/components/ui";
import { lgaStats, platformKpis, revenueSeries } from "@/data/mock";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="flex items-center justify-between px-6 py-4">
        <Logo light />
        <Link href="/admin/kano" className="text-sm text-emerald-300">
          Ops console
        </Link>
      </header>
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-emerald-400 text-sm font-semibold">Investor & government view</p>
        <h1 className="text-4xl font-extrabold">Kano Digital Commerce Ecosystem</h1>
        <ProtoNote>Illustrative prototype data — not live operational statistics.</ProtoNote>
        <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <StatCard label="Businesses onboarded" value={platformKpis.merchants.toLocaleString()} />
          <StatCard label="Active merchants" value={platformKpis.active.toLocaleString()} />
          <StatCard label="Customers" value={platformKpis.customers.toLocaleString()} />
          <StatCard label="Transactions" value={platformKpis.orders.toLocaleString()} />
          <StatCard label="GMV" value={`₦${platformKpis.gmv}B`} />
          <StatCard label="Deliveries" value={platformKpis.deliveries.toLocaleString()} />
          <StatCard label="Financial applications" value="1,842" />
          <StatCard label="Jobs supported" value={platformKpis.jobs.toLocaleString()} />
        </div>
        <Card className="mt-8 h-56 bg-slate-900 p-4">
          <p className="text-sm text-slate-300">GMV growth (illustrative)</p>
          <ResponsiveContainer width="100%" height="90%">
            <AreaChart data={revenueSeries}>
              <Tooltip />
              <Area dataKey="revenue" stroke="#34d399" fill="#04785766" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          <Card className="bg-slate-900 p-5 text-sm text-slate-200">
            <p className="font-bold text-white">Unit economics (illustrative)</p>
            <p>Take rate 1.8% · Contribution margin 42% · Payback 4.1 months</p>
            <p>Merchant retention 64% · Frequency 3.2 orders / month</p>
          </Card>
          <Card className="bg-slate-900 p-5 text-sm text-slate-200">
            <p className="font-bold text-white">Top LGAs</p>
            {lgaStats.slice(0, 4).map((l) => (
              <p key={l.lga}>
                {l.lga} · {l.businesses.toLocaleString()} businesses
              </p>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
