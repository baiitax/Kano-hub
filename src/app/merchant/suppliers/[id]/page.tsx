"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { naira } from "@/data/mock";
import { millSkus, mills } from "@/data/supplier";
import { useStore } from "@/lib/store";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const s = mills.find((x) => x.id === id) || mills[0];
  const { addWholesale, toast } = useStore();
  const skus = millSkus.filter((x) => x.millId === s.id);
  return (
    <AppShell>
      <PageHead title={s.name} sub={`${s.location} · ${s.contact} · ${s.cluster}`} />
      <ProtoNote />
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="Your purchases (proto)" value={naira(s.id === "s1" ? 1240000 : 640000)} />
        <StatCard label="Outstanding" value={naira(s.outstanding)} />
        <StatCard label="Partner credit days" value={String(s.creditDays)} />
        <StatCard label="Lead" value={s.lead} />
      </div>
      <Card className="mt-4 p-4">
        <p className="font-semibold">Restock SKUs</p>
        {skus.map((k) => (
          <div key={k.id} className="mt-3 flex items-center justify-between gap-2 text-sm">
            <div>
              <p className="font-medium">{k.name}</p>
              <p className="text-xs text-slate-500">
                {naira(k.wholesale)} · MOQ {k.moq} {k.unit}
              </p>
            </div>
            <Button size="sm" onClick={() => addWholesale(k)}>
              Add MOQ
            </Button>
          </div>
        ))}
        <div className="mt-4 flex gap-2">
          <Button href="/wholesale/cart">Cart</Button>
          <Button variant="outline" href={`/suppliers/${s.id}`}>
            Public mill page
          </Button>
          <Button variant="ghost" onClick={() => toast("Quote requested", s.name)}>
            Request quote
          </Button>
        </div>
      </Card>
    </AppShell>
  );
}
