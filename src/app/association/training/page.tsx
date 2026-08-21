"use client";
import { AssocShell } from "@/components/assoc-shell";
import { Card, PageHead } from "@/components/ui";
import { assocTraining } from "@/data/association";

export default function Page() {
  return (
    <AssocShell>
      <PageHead title="Training" />
      {assocTraining.map((t) => (
        <Card key={t.t} className="mb-3 p-4">
          <p className="text-xs text-emerald-800">{t.t}</p>
          <p className="font-semibold">{t.title}</p>
          <p className="text-sm text-slate-600">{t.where}</p>
        </Card>
      ))}
    </AssocShell>
  );
}
