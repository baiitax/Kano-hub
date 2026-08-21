"use client";
import { Footer, ProductThumb, PublicHeader } from "@/components/chrome";
import { Badge, Button, Card, ProtoNote } from "@/components/ui";
import { naira } from "@/data/mock";
import { millSkus, mills } from "@/data/supplier";
import { useStore } from "@/lib/store";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const m = mills.find((x) => x.id === id) || mills[0];
  const skus = millSkus.filter((s) => s.millId === m.id);
  const { addWholesale, toast } = useStore();
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-5xl px-4 py-8">
        <Badge tone="green">Verified mill</Badge>
        <h1 className="mt-2 text-3xl font-extrabold">{m.name}</h1>
        <p className="text-slate-600">
          {m.cluster} · {m.location} · {m.lga} · {m.contact}
        </p>
        <p className="mt-3 max-w-2xl text-sm">{m.description}</p>
        <ProtoNote>Illustrative mill profile. Credit days are partner terms, not a KanoHub loan.</ProtoNote>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <Card className="p-3 text-sm">
            <p className="text-xs text-slate-500">30d GMV</p>
            <p className="font-bold">{naira(m.gmv30)}</p>
          </Card>
          <Card className="p-3 text-sm">
            <p className="text-xs text-slate-500">Lead</p>
            <p className="font-bold">{m.lead}</p>
          </Card>
          <Card className="p-3 text-sm">
            <p className="text-xs text-slate-500">Partner credit</p>
            <p className="font-bold">{m.creditDays} days</p>
          </Card>
          <Card className="p-3 text-sm">
            <p className="text-xs text-slate-500">Buyers</p>
            <p className="font-bold">{m.buyers} shops</p>
          </Card>
        </div>
        <div className="mt-4 flex gap-2">
          <Button onClick={() => toast("Quote requested", m.name)}>Request quote</Button>
          <Button href="/wholesale" variant="outline">
            Floor
          </Button>
        </div>
        <h2 className="mt-8 font-bold">Catalogue</h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skus.map((s) => (
            <Card key={s.id} className="overflow-hidden">
              <Link href={`/wholesale/${s.id}`}>
                <ProductThumb kind={s.image} className="h-28 rounded-none" alt={s.name} />
              </Link>
              <div className="p-4">
                <p className="font-semibold">{s.name}</p>
                <p className="text-sm">{naira(s.wholesale)}</p>
                <Button className="mt-2" size="sm" onClick={() => addWholesale(s)}>
                  Add MOQ
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
