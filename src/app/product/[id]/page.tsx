"use client";

import { useParams, useRouter } from "next/navigation";
import { CustomerBottom, ProductThumb, PublicHeader } from "@/components/chrome";
import { ProductCard, StickyBuyBar } from "@/components/commerce";
import { Badge, Button, Card } from "@/components/ui";
import { naira, products } from "@/data/mock";
import { useStore } from "@/lib/store";
import { useState } from "react";
import Link from "next/link";
import { MapPin, Star, Truck } from "lucide-react";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const p = products.find((x) => x.id === id) || products[0];
  const { addToCart } = useStore();
  const [qty, setQty] = useState(1);
  const router = useRouter();
  const related = products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4);
  const actions = (
    <>
      <Button className="flex-1" onClick={() => addToCart(p, qty)}>
        Add to cart
      </Button>
      <Button
        className="flex-1"
        variant="secondary"
        onClick={() => {
          addToCart(p, qty);
          router.push("/checkout");
        }}
      >
        Buy now
      </Button>
    </>
  );
  return (
    <div className="min-h-screen pb-36 md:pb-8">
      <PublicHeader />
      <div className="mx-auto grid max-w-6xl gap-6 px-0 py-0 sm:px-4 sm:py-8 md:grid-cols-2">
        <ProductThumb kind={p.image} className="h-72 rounded-none sm:h-96 sm:rounded-2xl" />
        <div className="px-4 sm:px-0">
          <Link href={`/shop/${p.merchantSlug}`} className="text-sm font-semibold text-emerald-800">
            {p.merchantName} {p.verified && <Badge tone="green">Verified</Badge>}
          </Link>
          <h1 className="mt-2 text-2xl font-extrabold sm:text-3xl">{p.name}</h1>
          <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
            <span className="inline-flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> {p.rating} · {p.reviews} reviews
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-4 w-4" /> {p.location}
            </span>
          </p>
          <p className="mt-4 text-3xl font-extrabold tabular-nums text-emerald-900">{naira(p.price)}</p>
          <p className="mt-1 flex items-center gap-2 text-sm text-slate-600">
            <Truck className="h-4 w-4" />
            {p.stock > 0 ? `${p.stock} in stock` : "Out of stock"} · 45–90 min in Kano Metro
          </p>
          <p className="mt-4 text-slate-700">{p.description}</p>
          <div className="mt-5 inline-flex items-center rounded-2xl border border-white/60 bg-white/40">
            <button className="grid h-12 w-12 place-items-center text-lg" onClick={() => setQty(Math.max(1, qty - 1))}>
              −
            </button>
            <span className="w-8 text-center font-bold">{qty}</span>
            <button className="grid h-12 w-12 place-items-center text-lg" onClick={() => setQty(qty + 1)}>
              +
            </button>
          </div>
          <div className="mt-6 hidden gap-3 md:flex">{actions}</div>
          <Button variant="outline" href="/support" className="mt-3 hidden md:inline-flex">
            Chat merchant
          </Button>
          <Card className="mt-6 p-4 text-sm">
            <p className="font-semibold">Details</p>
            <p>SKU {p.sku}</p>
            <p>
              {p.category} / {p.subcategory}
            </p>
          </Card>
        </div>
      </div>
      {related.length > 0 && (
        <div className="mx-auto max-w-6xl px-3 py-8 sm:px-4">
          <h2 className="font-bold">You may also like</h2>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {related.map((r) => (
              <ProductCard key={r.id} p={r} compact />
            ))}
          </div>
        </div>
      )}
      <StickyBuyBar>
        <div className="flex gap-2">{actions}</div>
      </StickyBuyBar>
      <CustomerBottom />
    </div>
  );
}
