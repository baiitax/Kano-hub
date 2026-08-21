"use client";
import { SupplierShell } from "@/components/supplier-shell";
import { Badge, Card, PageHead, ProtoNote } from "@/components/ui";
import { millTape } from "@/data/supplier";

export default function Page() {
  return (
    <SupplierShell>
      <PageHead title="Live mill tape" sub="POs, pick-face, credit utilisation, Dawanau/Kwari slots" />
      <ProtoNote />
      <div className="space-y-2">
        {millTape.map((a) => (
          <Card key={a.t + a.text} className="p-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-emerald-800">{a.t}</span>
              <Badge>{a.type}</Badge>
            </div>
            <p className="mt-1 text-sm">{a.text}</p>
          </Card>
        ))}
      </div>
    </SupplierShell>
  );
}
