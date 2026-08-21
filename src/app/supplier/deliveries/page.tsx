"use client";
import { SupplierShell } from "@/components/supplier-shell";
import { Badge, Card, PageHead, ProtoNote } from "@/components/ui";
import { millPos } from "@/data/supplier";
import { LiveMap, kanoPins } from "@/components/map";

export default function Page() {
  return (
    <SupplierShell>
      <PageHead title="Mill-to-shop logistics" sub="Simulated overlay — not live GPS" />
      <ProtoNote />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-2">
          <LiveMap pickup={{ ...kanoPins.zoo, label: "Sharada mill" }} drop={kanoPins.hotoro} className="h-72" />
        </Card>
        <div className="space-y-2">
          {millPos.map((p) => (
            <Card key={p.id} className="p-4 text-sm">
              <div className="flex justify-between">
                <p className="font-semibold">{p.id}</p>
                <Badge>{p.status}</Badge>
              </div>
              <p className="text-slate-600">
                {p.shop} · {p.slot}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </SupplierShell>
  );
}
