"use client";
import { SupplierShell } from "@/components/supplier-shell";
import { Badge, Button, Card, PageHead, ProtoNote } from "@/components/ui";
import { naira } from "@/data/mock";
import { millPos } from "@/data/supplier";
import { useStore } from "@/lib/store";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const po = millPos.find((p) => p.id === id) || millPos[0];
  const { toast } = useStore();
  return (
    <SupplierShell>
      <PageHead title={po.id} sub={`${po.shop} · ${po.lga} · ${po.date}`} actions={<Badge tone="amber">{po.status}</Badge>} />
      <ProtoNote>Trade credit is a partner product. Financing not guaranteed.</ProtoNote>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 overflow-auto p-0">
          <table className="w-full text-sm">
            <thead className="bg-white/40 text-left text-xs">
              <tr>
                <th className="p-3">SKU</th>
                <th>Item</th>
                <th>Qty</th>
                <th>Unit</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {po.items.map((i) => (
                <tr key={i.sku} className="border-t">
                  <td className="p-3 font-mono text-xs">{i.sku}</td>
                  <td>{i.name}</td>
                  <td>{i.qty}</td>
                  <td>{i.unit}</td>
                  <td>{naira(i.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="p-4 text-right font-bold">Total {naira(po.amount)}</p>
        </Card>
        <Card className="space-y-2 p-4 text-sm">
          <p>
            <span className="text-slate-500">Buyer</span> {po.buyer}
          </p>
          <p>
            <span className="text-slate-500">Terms</span> {po.credit}
          </p>
          <p>
            <span className="text-slate-500">Slot</span> {po.slot}
          </p>
          <p>
            <span className="text-slate-500">Mill</span> {po.mill}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Button size="sm" onClick={() => toast("Confirmed", po.id)}>
              Confirm
            </Button>
            <Button size="sm" variant="outline" onClick={() => toast("Picking", "Bay 2 allocated")}>
              Start pick
            </Button>
            <Button size="sm" variant="outline" onClick={() => toast("Invoice drafted")}>
              Invoice
            </Button>
          </div>
        </Card>
      </div>
    </SupplierShell>
  );
}
