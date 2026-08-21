"use client";
import { Footer, ProductThumb, PublicHeader } from "@/components/chrome";
import { Badge, Button, ProtoNote } from "@/components/ui";
import { naira } from "@/data/mock";
import { millSkus } from "@/data/supplier";
import { useStore } from "@/lib/store";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const s = millSkus.find((x) => x.id === id) || millSkus[0];
  const { addWholesale } = useStore();
  const [qty, setQty] = useState(s.moq);
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-8 md:grid-cols-2">
        <ProductThumb kind={s.image} className="h-72" alt={s.name} />
        <div>
          <Badge tone="gold">B2B</Badge>
          <h1 className="mt-2 text-3xl font-extrabold">{s.name}</h1>
          <p className="text-sm text-slate-500">
            {s.mill} · {s.cluster} · {s.sku}
          </p>
          <p className="mt-4 text-3xl font-bold text-emerald-800">{naira(s.wholesale)}</p>
          <p className="text-sm text-slate-600">
            per {s.unit} · MOQ {s.moq}
            {s.bale ? ` · bale of ${s.bale}` : ""} · lead {s.leadDays}d
          </p>
          <p className="mt-2 text-xs text-slate-500">Suggested retail {naira(s.retailHint)} (hint only)</p>
          <ProtoNote>Not a consumer listing. Trade credit via licensed partners — not guaranteed.</ProtoNote>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={s.moq}
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className="w-24 rounded-lg border px-3 py-2 text-sm"
            />
            <Button onClick={() => addWholesale(s, Math.max(s.moq, qty))}>Add to wholesale cart</Button>
          </div>
          <Button href="/wholesale" variant="ghost" className="mt-4">
            Back to floor
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
