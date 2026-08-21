"use client";
import { SupplierShell } from "@/components/supplier-shell";
import { Badge, Button, Card, PageHead, ProtoNote } from "@/components/ui";
import { useStore } from "@/lib/store";

const rows = [
  { id: "RT-12", shop: "Aisha Fashion House", item: "Ankara 6-yard × 2", reason: "Print mismatch", status: "Inspecting" },
  { id: "RT-09", shop: "Kwari Stall 214", item: "Guinea brocade × 1", reason: "Shade", status: "Credit note" },
];

export default function Page() {
  const { toast } = useStore();
  return (
    <SupplierShell>
      <PageHead title="Mill returns" sub="Bale-level quality, not consumer parcels" />
      <ProtoNote />
      {rows.map((r) => (
        <Card key={r.id} className="mb-3 flex flex-wrap items-center justify-between gap-2 p-4">
          <div>
            <p className="font-semibold">
              {r.id} · {r.shop}
            </p>
            <p className="text-sm text-slate-600">
              {r.item} · {r.reason}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge>{r.status}</Badge>
            <Button size="sm" onClick={() => toast("Credit note", r.id)}>
              Issue CN
            </Button>
          </div>
        </Card>
      ))}
    </SupplierShell>
  );
}
