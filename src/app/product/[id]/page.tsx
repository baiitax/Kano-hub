"use client";

import { useParams, useRouter } from "next/navigation";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { ProductCard, StickyBuyBar } from "@/components/commerce";
import { Badge, Button, Card } from "@/components/ui";
import { naira, productPhotos, productReviews, products } from "@/data/mock";
import { useStore } from "@/lib/store";
import { useMemo, useState } from "react";
import Link from "next/link";
import { BadgeCheck, MapPin, Star, Truck } from "lucide-react";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const p = products.find((x) => x.id === id) || products[0];
  const photos = productPhotos(p.image);
  const { addToCart, toast } = useStore();
  const [qty, setQty] = useState(1);
  const [shot, setShot] = useState(0);
  const [tab, setTab] = useState<"details" | "reviews">("details");
  const router = useRouter();
  const related = products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4);
  const reviews = productReviews[p.id] || productReviews.default;
  const stars = useMemo(() => {
    const counts = [0, 0, 0, 0, 0];
    reviews.forEach((r) => {
      counts[r.rating - 1] += 1;
    });
    return counts;
  }, [reviews]);

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
      <div className="mx-auto grid max-w-6xl gap-6 px-0 py-0 sm:px-4 sm:py-8 lg:grid-cols-2">
        <div>
          <div className="relative aspect-square overflow-hidden bg-white sm:rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos[shot]} alt={p.name} className="h-full w-full object-cover" />
            {p.verified && (
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[11px] font-bold text-emerald-800">
                Verified shop
              </span>
            )}
          </div>
          <div className="mt-2 flex gap-2 overflow-x-auto px-3 sm:px-0">
            {photos.map((src, i) => (
              <button
                key={src}
                onClick={() => setShot(i)}
                className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 ${shot === i ? "border-emerald-700" : "border-transparent"}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

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

          <div className="mt-6 flex gap-2">
            {(["details", "reviews"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full px-4 py-2 text-sm font-semibold capitalize ${tab === t ? "bg-emerald-700 text-white" : "glass"}`}
              >
                {t === "reviews" ? `Reviews (${reviews.length})` : "Details"}
              </button>
            ))}
          </div>

          {tab === "details" ? (
            <Card className="mt-4 space-y-1 p-4 text-sm">
              <p>
                <span className="text-slate-500">SKU</span> {p.sku}
              </p>
              <p>
                <span className="text-slate-500">Category</span> {p.category} / {p.subcategory}
              </p>
              <p>
                <span className="text-slate-500">Sold by</span> {p.merchantName}
              </p>
              <p>
                <span className="text-slate-500">Returns</span> 24-hour replacement for damaged items
              </p>
            </Card>
          ) : (
            <Card className="mt-4 p-4">
              <div className="mb-4 flex items-end gap-4">
                <p className="text-4xl font-extrabold">{p.rating}</p>
                <div className="flex-1 space-y-1">
                  {[5, 4, 3, 2, 1].map((s) => (
                    <div key={s} className="flex items-center gap-2 text-xs">
                      <span className="w-3">{s}</span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                        <div className="h-full bg-amber-400" style={{ width: `${((stars[s - 1] || 0) / Math.max(reviews.length, 1)) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {reviews.map((r, i) => (
                  <div key={i} className="border-t border-white/50 pt-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-semibold">{r.name}</p>
                      <span className="text-xs text-slate-500">{r.date}</span>
                    </div>
                    <p className="text-amber-500 text-sm">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</p>
                    {r.verified && (
                      <p className="mt-0.5 inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800">
                        <BadgeCheck className="h-3 w-3" /> Verified purchase
                      </p>
                    )}
                    <p className="mt-1 font-medium">{r.title}</p>
                    <p className="text-sm text-slate-600">{r.body}</p>
                  </div>
                ))}
              </div>
              <Button
                className="mt-4 w-full"
                variant="outline"
                onClick={() => toast("Review submitted", "Prototype — thank you")}
              >
                Write a review
              </Button>
            </Card>
          )}
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
