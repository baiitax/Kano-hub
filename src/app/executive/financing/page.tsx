"use client";
import { ExecShell } from "@/components/exec-shell";
import { Badge, Card, ProtoNote, StatCard } from "@/components/ui";
import { loanBook, loanPipeline } from "@/data/intel";
import { naira } from "@/data/mock";

export default function Page() {
  return (
    <ExecShell>
      <h1 className="text-2xl font-extrabold text-white">Credit (partners)</h1>
      <ProtoNote>KanoHub is not a lender. Book sits with participating licensed institutions.</ProtoNote>
      <div className="grid gap-3 sm:grid-cols-4">
        <StatCard label="Applications YTD" value="1,842" />
        <StatCard label="Approval rate" value="41%" />
        <StatCard label="Partner book" value="₦214M" />
        <StatCard label="PAR30" value="2.4%" />
      </div>
      <Card className="mt-4 bg-slate-900/80 p-4 text-sm text-slate-200">
        <p className="font-semibold text-white">Pipeline</p>
        {loanPipeline.map((l) => (
          <div key={l.id} className="mt-2 flex justify-between">
            <span>
              {l.merchant} · {naira(l.amount)}
            </span>
            <Badge>{l.status}</Badge>
          </div>
        ))}
      </Card>
      <Card className="mt-3 bg-slate-900/80 p-4 text-sm text-slate-200">
        <p className="font-semibold text-white">Live facilities (sample)</p>
        {loanBook.map((l) => (
          <p key={l.id} className="mt-1">
            {l.id} · {l.merchant} · OS {naira(l.outstanding)} · {l.status}
          </p>
        ))}
      </Card>
    </ExecShell>
  );
}
