"use client";
import { AssocShell } from "@/components/assoc-shell";
import { Badge, Card, PageHead } from "@/components/ui";
import { assocMembers } from "@/data/association";

export default function Page() {
  return (
    <AssocShell>
      <PageHead title="Members / rumfa" />
      {assocMembers.map((m) => (
        <Card key={m.stall} className="mb-2 flex justify-between p-4 text-sm">
          <div>
            <p className="font-semibold">
              {m.stall} · {m.name}
            </p>
            <p className="text-slate-500">{m.shop}</p>
          </div>
          <div className="text-right">
            <Badge tone={m.status === "Good" ? "green" : "amber"}>{m.status}</Badge>
            <p className="text-xs">{m.dues}</p>
          </div>
        </Card>
      ))}
    </AssocShell>
  );
}
