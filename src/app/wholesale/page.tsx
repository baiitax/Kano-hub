"use client";

import { Footer, ProductThumb, PublicHeader } from "@/components/chrome";
import { Badge, Button, Card, ProtoNote } from "@/components/ui";
import { naira } from "@/data/mock";
import { millSkus, mills } from "@/data/supplier";
import { useStore } from "@/lib/store";
import Link from "next/link";

export default function Page() {
  const { addWholesale, session } = useStore();
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">B2B · Merchants only</p>
        <h1 className="mt-1 text-3xl font-extrabold">Kano wholesale floor</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Mill-gate prices in yards, bales, bags and cartons for Kantin Kwari, Dawanau, Sabon Gari and Sharada. Not the
          consumer marketplace.
        </p>
        <ProtoNote>
          Illustrative catalogue. Trade credit and payouts via participating licensed financial partners — financing not
          guaranteed.
        </ProtoNote>
        <div className="mb-8 flex flex-wrap gap-2">
          <Button href="/wholesale/cart" size="sm">
            Wholesale cart
          </Button>
          <Button href="/merchant/wholesale" size="sm" variant="outline">
            My mill orders
          </Button>
          <Button href="/login" size="sm" variant="ghost">
            {session ? session.title : "Sign in as merchant"}
          </Button>
        </div>
        <h2 className="font-bold">Verified mills & distributors</h2>
        <div className="mt-3 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {mills.map((m) => (
            <Link key={m.id} href={`/suppliers/${m.id}`}>
              <Card className="h-full p-4 hover:-translate-y-0.5">
                {m.verified && <Badge tone="green">Verified</Badge>}
                <p className="mt-2 font-bold">{m.name}</p>
                <p className="text-xs text-slate-500">
                  {m.cluster} · {m.lga} · MOQ {m.moq}
                </p>
                <p className="mt-2 text-sm text-slate-600">{m.description}</p>
              </Card>
            </Link>
          ))}
        </div>
        <h2 className="mt-10 font-bold">Floor SKUs</h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {millSkus.map((s) => (
            <Card key={s.id} className="overflow-hidden">
              <Link href={`/wholesale/${s.id}`}>
                <ProductThumb kind={s.image} className="h-32 rounded-none" alt={s.name} />
              </Link>
              <div className="p-4">
                <p className="text-xs text-slate-500">{s.mill}</p>
                <Link href={`/wholesale/${s.id}`} className="font-semibold">
                  {s.name}
                </Link>
                <p className="text-xs text-slate-500">
                  MOQ {s.moq} {s.unit}
                </p>
                <p className="mt-1 font-bold text-emerald-800">{naira(s.wholesale)}</p>
                <Button className="mt-3 w-full" size="sm" onClick={() => addWholesale(s)}>
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
