"use client";
import { SupplierShell } from "@/components/supplier-shell";
import { Card, PageHead, ProtoNote } from "@/components/ui";
import { naira } from "@/data/mock";
import { millSkus } from "@/data/supplier";

export default function Page() {
  return (
    <SupplierShell>
      <PageHead title="MOQ, bales & units" sub="How Kantin Kwari actually buys — not unit retail" />
      <ProtoNote />
      <div className="grid gap-3">
        {millSkus
          .filter((s) => s.millId === "s1")
          .map((s) => (
            <Card key={s.id} className="flex flex-wrap justify-between gap-2 p-4 text-sm">
              <div>
                <p className="font-semibold">{s.name}</p>
                <p className="text-slate-500">
                  {s.unit} · MOQ {s.moq}
                  {s.bale ? ` · 1 bale = ${s.bale} ${s.unit}` : ""}
                </p>
              </div>
              <p className="font-bold">{naira(s.wholesale)}</p>
            </Card>
          ))}
      </div>
    </SupplierShell>
  );
}
