"use client";

import { ExecShell } from "@/components/exec-shell";
import { Badge, Button, Card, ProtoNote, StatCard } from "@/components/ui";
import { boardDecisions, execActivity, monthly, sectors } from "@/data/executive";
import { lgaStats, platformKpis } from "@/data/mock";
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import Link from "next/link";

export default function Page() {
  return (
    <ExecShell>
      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">21 August 2026 · 09:42 WAT</p>
      <h1 className="mt-1 text-3xl font-extrabold text-white md:text-4xl">Command centre</h1>
      <p className="mt-1 text-slate-400">Kano digital commerce ecosystem — board operating view</p>
      <ProtoNote>Illustrative prototype data — not official Kano statistics or audited accounts.</ProtoNote>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="GMV (YTD modelled)" value={`₦${platformKpis.gmv}B`} hint={`+${platformKpis.growth}% MoM`} />
        <StatCard label="Active merchants" value={platformKpis.active.toLocaleString()} hint={`${platformKpis.merchants.toLocaleString()} onboarded`} />
        <StatCard label="Customers" value={platformKpis.customers.toLocaleString()} />
        <StatCard label="Jobs supported" value={platformKpis.jobs.toLocaleString()} hint="Modelled, not census" />
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="h-64 bg-slate-900/80 p-4 lg:col-span-2">
          <div className="flex justify-between text-sm">
            <p className="font-semibold text-white">GMV trajectory (₦bn)</p>
            <Link href="/executive/gmv" className="text-emerald-400">
              Open GMV →
            </Link>
          </div>
          <ResponsiveContainer width="100%" height="88%">
            <AreaChart data={monthly}>
              <XAxis dataKey="m" stroke="#94a3b8" />
              <Tooltip />
              <Area dataKey="gmv" stroke="#34d399" fill="#04785766" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
        <Card className="bg-slate-900/80 p-4">
          <p className="font-semibold text-white">Today’s tape</p>
          <div className="mt-2 max-h-52 space-y-2 overflow-auto text-xs text-slate-300">
            {execActivity.slice(0, 6).map((a) => (
              <p key={a.t + a.text}>
                <span className="text-emerald-400">{a.t}</span> · {a.text}
              </p>
            ))}
          </div>
          <Button href="/executive/activity" size="sm" className="mt-3">
            Full activity
          </Button>
        </Card>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card className="h-56 bg-slate-900/80 p-4">
          <p className="text-sm font-semibold text-white">Sector GMV (₦bn)</p>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={sectors} layout="vertical">
              <XAxis type="number" hide />
              <Tooltip />
              <Bar dataKey="gmv" fill="#1d4ed8" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
        <Card className="bg-slate-900/80 p-4 text-sm text-slate-300">
          <p className="font-semibold text-white">Board items in flight</p>
          {boardDecisions.map((b) => (
            <div key={b.id} className="mt-2 flex justify-between">
              <span>{b.title}</span>
              <Badge>{b.status}</Badge>
            </div>
          ))}
          <Link href="/executive/board" className="mt-3 inline-block text-emerald-400">
            Board pack →
          </Link>
        </Card>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {lgaStats.slice(0, 4).map((l) => (
          <Card key={l.lga} className="bg-slate-900/80 p-3 text-sm">
            <p className="text-slate-400">{l.lga}</p>
            <p className="text-lg font-bold text-white">{l.businesses.toLocaleString()} shops</p>
          </Card>
        ))}
      </div>
    </ExecShell>
  );
}
