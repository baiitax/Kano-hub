"use client";
import { ProductThumb } from "@/components/chrome";
import { SupplierShell } from "@/components/supplier-shell";
import { Badge, Button, Card, PageHead, ProtoNote } from "@/components/ui";
import { naira } from "@/data/mock";
import { millSkus } from "@/data/supplier";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  const rows = millSkus.filter((s) => s.millId === "s1");
  return (
    <SupplierShell>
      <PageHead
        title="Wholesale catalogue"
        sub="Yard, bale and carton units. Retail prices are hints for merchants only."
        actions={
          <Button size="sm" onClick={() => toast("SKU draft", "New mill SKU opened")}>
            Add SKU
          </Button>
        }
      />
      <ProtoNote />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map((s) => (
          <Card key={s.id} className="overflow-hidden">
            <ProductThumb kind={s.image} className="h-32 rounded-none" alt={s.name} />
            <div className="p-4">
              <p className="font-mono text-[10px] text-slate-500">{s.sku}</p>
              <p className="font-semibold">{s.name}</p>
              <p className="text-xs text-slate-500">
                MOQ {s.moq} {s.unit}
                {s.bale ? ` · bale ${s.bale}` : ""}
              </p>
              <p className="mt-2 text-lg font-bold text-emerald-800">{naira(s.wholesale)}</p>
              <p className="text-xs text-slate-500">Suggested retail {naira(s.retailHint)}</p>
              <div className="mt-2 flex items-center justify-between">
                <Badge tone={s.stock < s.reorder * 2 ? "amber" : "green"}>Stock {s.stock}</Badge>
                <Button size="sm" variant="outline" onClick={() => toast("Published to B2B floor", s.sku)}>
                  Publish
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SupplierShell>
  );
}
