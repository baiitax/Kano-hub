"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Button, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { bankTape, exceptions, nipQueue } from "@/data/bank";
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
      <PageHead title="Participating bank desk" sub="21 Aug 2026 · 09:44 WAT · Settlements, NIP, credit — not a KanoHub licence" />
      <ProtoNote>Powered by participating licensed financial partners. Illustrative prototype data.</ProtoNote>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Settlement today" value="₦182.4M" hint="1,204 merchants" />
        <StatCard label="NIP success" value="98.2%" hint="1 fail in queue" />
        <StatCard label="Exceptions" value={String(exceptions.length)} hint="Name mismatch + duplicate" />
        <StatCard label="Partner loan book" value="₦214M" />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <Card className="max-h-72 overflow-auto p-4 lg:col-span-2">
          <div className="mb-2 flex justify-between">
            <p className="font-semibold">Live tape</p>
            <Button href="/bank/activity" size="sm" variant="ghost">
              Full tape
            </Button>
          </div>
          {bankTape.map((e) => (
            <p key={e.t + e.text} className="mt-2 text-xs sm:text-sm">
              <span className="font-mono text-emerald-800">{e.t}</span>{" "}
              <Badge>{e.type}</Badge> {e.text}
            </p>
          ))}
        </Card>
        <Card className="h-72 p-3">
          <p className="text-sm font-semibold">Acquiring ₦m</p>
          <ResponsiveContainer width="100%" height="88%">
            <BarChart data={vol}>
              <XAxis dataKey="d" />
              <Tooltip />
              <Bar dataKey="v" fill="#047857" radius={6} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card className="p-4 text-sm">
          <p className="font-semibold">NIP queue</p>
          {nipQueue.map((n) => (
            <div key={n.id} className="mt-2 flex justify-between">
              <span>
                {n.id} · {n.dir} · {n.party}
              </span>
              <span>
                {naira(n.amount)} <Badge tone={n.status === "Failed" ? "red" : n.status === "Pending" ? "amber" : "green"}>{n.status}</Badge>
              </span>
            </div>
          ))}
          <Button href="/bank/nip" size="sm" className="mt-3">
            NIP desk
          </Button>
        </Card>
        <Card className="p-4 text-sm">
          <p className="font-semibold">Credit queue</p>
          {loanPipeline.slice(0, 4).map((l) => (
            <div key={l.id} className="mt-2 flex justify-between">
              <span>{l.merchant}</span>
              <Badge>{l.status}</Badge>
            </div>
          ))}
          <Button href="/bank/lending" className="mt-3" size="sm">
            Lending desk
          </Button>
        </Card>
      </div>
    </PortalShell>
  );
}
