"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, PageHead, ProtoNote, Select } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const { wholesaleCart, clearWholesale, toast } = useStore();
  const total = wholesaleCart.reduce((s, l) => s + l.sku.wholesale * l.qty, 0);
  const [terms, setTerms] = useState("Cash");
  const router = useRouter();
  const submit = () => {
    toast("PO sent to mill", "PO-8829 · " + naira(total) + " · " + terms);
    clearWholesale();
    router.push("/merchant/wholesale");
  };
  return (
    <AppShell>
      <PageHead title="Wholesale checkout" sub="Aisha Fashion House · Zoo Road" />
      <ProtoNote>
        Trade credit is a request to participating licensed partners. Financing not guaranteed. KanoHub is not a lender.
      </ProtoNote>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="p-4 text-sm">
          {wholesaleCart.map((l) => (
            <p key={l.sku.id} className="flex justify-between py-1">
              <span>
                {l.sku.name} × {l.qty}
              </span>
              <span>{naira(l.sku.wholesale * l.qty)}</span>
            </p>
          ))}
          <p className="mt-3 text-right font-bold">Total {naira(total)}</p>
        </Card>
        <Card className="space-y-3 p-4">
          <Select label="Pay / terms" value={terms} onChange={(e) => setTerms(e.target.value)}>
            <option>Cash</option>
            <option>Transfer (partner)</option>
            <option>7 days trade credit (request)</option>
            <option>14 days trade credit (request)</option>
          </Select>
          <p className="text-xs text-slate-500">Delivery slot: Today 16:00 Zoo Road (mill dispatch).</p>
          <Button onClick={submit} disabled={!wholesaleCart.length}>
            Submit purchase order
          </Button>
        </Card>
      </div>
    </AppShell>
  );
}
