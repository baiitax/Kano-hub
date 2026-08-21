"use client";

import { PortalShell } from "@/components/portals";
import { LiveMap, kanoPins } from "@/components/map";
import { Badge, Button, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { socAlerts } from "@/data/intel";
import { socCases, socHealth, socTape } from "@/data/soc";
import { riders } from "@/data/logistics";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const mix = [
  { d: "00", c: 1, h: 2 },
  { d: "04", c: 0, h: 1 },
  { d: "08", c: 2, h: 4 },
  { d: "12", c: 1, h: 3 },
  { d: "16", c: 0, h: 2 },
  { d: "20", c: 1, h: 5 },
];

export default function Page() {
  const open = socAlerts.filter((a) => a.status === "Open" || a.status === "Investigating").length;
  return (
    <PortalShell kind="security">
      <PageHead title="SOC command" sub="21 Aug 2026 · 09:44 WAT · Monitoring commerce, wallets, logistics, credit" />
      <ProtoNote>Simulated detections. Masked identifiers. Not a live SIEM feed.</ProtoNote>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Open incidents" value={String(open)} hint="MTTA 11 min · MTTR 41 min" />
        <StatCard label="War-room cases" value={String(socCases.filter((c) => c.status === "War room").length)} />
        <StatCard label="Blocked payments 24h" value="47" />
        <StatCard label="Partner webhook" value="Degraded" hint="910ms p95" />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <Card className="max-h-80 overflow-auto p-4 lg:col-span-2">
          <div className="mb-2 flex justify-between">
            <p className="font-semibold">Live tape</p>
            <Button href="/security/activity" size="sm" variant="ghost">
              Full tape
            </Button>
          </div>
          <div className="space-y-2 font-mono text-[11px] sm:text-xs">
            {socTape.map((e) => (
              <p key={e.t}>
                <span className="text-emerald-800">{e.t}</span>{" "}
                <Badge tone={e.sev === "CRIT" ? "red" : e.sev === "HIGH" ? "amber" : "slate"}>{e.sev}</Badge> {e.src} — {e.text}
              </p>
            ))}
          </div>
        </Card>
        <Card className="h-80 p-3">
          <p className="text-sm font-semibold">Alert volume (today)</p>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={mix}>
              <XAxis dataKey="d" />
              <Tooltip />
              <Bar dataKey="c" fill="#b91c1c" name="Critical" />
              <Bar dataKey="h" fill="#d97706" name="High" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card className="divide-y divide-white/40">
          <p className="p-3 font-semibold">Priority queue</p>
          {socAlerts.slice(0, 4).map((a) => (
            <div key={a.id} className="p-3 text-sm">
              <div className="flex justify-between">
                <span className="font-semibold">
                  {a.id} · {a.cat}
                </span>
                <Badge tone={a.sev === "Critical" ? "red" : a.sev === "High" ? "amber" : "slate"}>{a.sev}</Badge>
              </div>
              <p className="text-slate-600">{a.detail}</p>
            </div>
          ))}
          <div className="p-3">
            <Button href="/security/alerts" size="sm">
              Alert queue
            </Button>
            <Button href="/security/cases" size="sm" variant="outline" className="ml-2">
              Cases
            </Button>
          </div>
        </Card>
        <div>
          <p className="mb-2 text-sm font-semibold">Session geo (illustrative)</p>
          <LiveMap
            className="h-64"
            pickup={{ ...kanoPins.zoo, label: "Shop" }}
            drop={{ ...kanoPins.hotoro, label: "Customer" }}
            riders={riders.map((r) => ({ id: r.id, x: r.x, y: r.y, label: r.name, tone: "idle" as const }))}
            live={false}
          />
          <p className="mt-2 text-xs text-slate-500">
            Health: {socHealth.filter((h) => h.status !== "Healthy").map((h) => h.svc).join(", ") || "all green"}
          </p>
        </div>
      </div>
    </PortalShell>
  );
}
