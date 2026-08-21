"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { creditPack } from "@/data/trust";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";
import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";

export default function Page() {
  const { toast } = useStore();
  const p = creditPack;
  return (
    <AppShell>
      <PageHead
        title="Credit pack for partner banks"
        sub="What an RM actually needs — 90-day GMV, returns, disputes"
        actions={<Button size="sm" onClick={() => toast("Pack exported", "PDF-style pack queued (prototype)")}>Export pack</Button>}
      />
      <ProtoNote>
        Indicative platform metrics only. Financing is not guaranteed. Decisions sit with participating licensed financial
        partners. KanoHub is not a lender.
      </ProtoNote>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="p-6 text-center">
          <p className="text-xs uppercase text-slate-500">Credit readiness</p>
          <p className="text-6xl font-extrabold text-emerald-800">{p.score}</p>
          <Badge tone="green">Strong</Badge>
          <p className="mt-2 text-xs text-slate-500">{p.period}</p>
        </Card>
        <div className="grid grid-cols-2 gap-3 lg:col-span-2">
          <StatCard label="90-day GMV" value={naira(p.gmv)} />
          <StatCard label="Orders" value={String(p.orders)} />
          <StatCard label="Returns" value={p.returnsPct + "%"} />
          <StatCard label="Open disputes" value={String(p.disputes)} />
          <StatCard label="On-time payouts" value={p.onTimePayout} />
          <StatCard label="Cluster" value={p.cluster} hint={p.lga + (p.womenOwned ? " · women-owned" : "")} />
        </div>
      </div>
      <Card className="mt-4 p-4">
        <p className="font-semibold">GMV run-rate (₦m)</p>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={p.cashflow}>
              <XAxis dataKey="m" />
              <Tooltip />
              <Bar dataKey="gmv" fill="#047857" radius={6} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
      <Card className="mt-4 p-4 text-sm">
        <p className="font-semibold">Share with RM</p>
        <p className="mt-1 text-slate-600">
          Verified sales + wallet history + dispute rate + mill POs. Send to bank desk — they underwrite, not KanoHub.
        </p>
        <Button className="mt-3" href="/bank/lending" size="sm" variant="outline">
          Open partner lending desk
        </Button>
      </Card>
    </AppShell>
  );
}
