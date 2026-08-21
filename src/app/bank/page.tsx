"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Button, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { bankTx, loanPipeline } from "@/data/intel";
import { naira } from "@/data/mock";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const vol = [
  { d: "Mon", v: 82 },
  { d: "Tue", v: 91 },
  { d: "Wed", v: 74 },
  { d: "Thu", v: 110 },
  { d: "Fri", v: 148 },
  { d: "Sat", v: 132 },
  { d: "Sun", v: 88 },
];

export default function Page() {
  return (
    <PortalShell kind="bank">
      <PageHead title="Participating bank desk" sub="Settlements, acquiring and credit — not a KanoHub licence" />
      <ProtoNote>Powered by participating licensed financial partners. Illustrative prototype data.</ProtoNote>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Settlement volume today" value="₦182M" />
        <StatCard label="Merchant accounts" value="8,426" />
        <StatCard label="NIP success" value="98.2%" />
        <StatCard label="Live loan book" value="₦214M" hint="Partner portfolio" />
      </div>
      <Card className="mt-4 h-52 p-4">
        <p className="text-sm font-semibold">Acquiring volume (₦m, illustrative)</p>
        <ResponsiveContainer width="100%" height="85%">
          <BarChart data={vol}>
            <XAxis dataKey="d" />
            <Tooltip />
            <Bar dataKey="v" fill="#047857" radius={6} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card className="divide-y divide-white/40">
          <p className="p-3 font-semibold">Latest ledger</p>
          {bankTx.map((t) => (
            <div key={t.id} className="flex justify-between p-3 text-sm">
              <span>
                {t.type} · {t.party}
              </span>
              <span className="font-bold">{naira(t.amount)}</span>
            </div>
          ))}
        </Card>
        <Card className="p-3">
          <p className="font-semibold">Credit applications in queue</p>
          {loanPipeline.slice(0, 4).map((l) => (
            <div key={l.id} className="mt-2 flex justify-between text-sm">
              <span>{l.merchant}</span>
              <Badge>{l.status}</Badge>
            </div>
          ))}
          <Button href="/bank/lending" className="mt-3" size="sm">
            Open lending desk
          </Button>
        </Card>
      </div>
    </PortalShell>
  );
}
