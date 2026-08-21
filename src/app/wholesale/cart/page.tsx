"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, PageHead, ProtoNote } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";
import Link from "next/link";

export default function Page() {
  const { wholesaleCart, setWholesaleQty, clearWholesale } = useStore();
  const total = wholesaleCart.reduce((s, l) => s + l.sku.wholesale * l.qty, 0);
  return (
    <AppShell>
      <PageHead title="Wholesale cart" sub="Mill MOQs · merchant restock" />
      <ProtoNote>Checkout is a prototype. Payments via participating licensed partners.</ProtoNote>
      {wholesaleCart.length === 0 ? (
        <Card className="p-8 text-center">
          <p>No mill lines yet.</p>
          <Button href="/wholesale" className="mt-3">
            Open B2B floor
          </Button>
        </Card>
      ) : (
        <Card className="p-4">
          {wholesaleCart.map((l) => (
            <div key={l.sku.id} className="flex flex-wrap items-center justify-between gap-2 border-b py-3 text-sm">
              <div>
                <p className="font-semibold">{l.sku.name}</p>
                <p className="text-xs text-slate-500">
                  {l.sku.mill} · {naira(l.sku.wholesale)} / {l.sku.unit} · MOQ {l.sku.moq}
                </p>
              </div>
              <input
                type="number"
                min={l.sku.moq}
                value={l.qty}
                onChange={(e) => setWholesaleQty(l.sku.id, Number(e.target.value))}
                className="w-20 rounded border px-2 py-1"
              />
              <p className="font-bold">{naira(l.sku.wholesale * l.qty)}</p>
            </div>
          ))}
          <p className="mt-4 text-right text-xl font-extrabold">{naira(total)}</p>
          <div className="mt-4 flex gap-2">
            <Button href="/wholesale/checkout">Request mill PO</Button>
            <Button variant="outline" onClick={clearWholesale}>
              Clear
            </Button>
          </div>
        </Card>
      )}
      <p className="mt-4 text-sm">
        <Link href="/wholesale" className="text-emerald-800">
          Continue browsing
        </Link>
      </p>
    </AppShell>
  );
}
