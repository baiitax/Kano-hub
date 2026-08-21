"use client";

import Link from "next/link";
import { ProductThumb } from "./chrome";
import { Badge, Card, cn } from "./ui";
import { naira } from "@/data/mock";
import type { Product } from "@/types";
import { MapPin, Star } from "lucide-react";

export function ProductCard({ p, compact }: { p: Product; compact?: boolean }) {
  return (
    <Link href={`/product/${p.id}`} className="block h-full">
      <Card className="h-full overflow-hidden transition hover:-translate-y-0.5">
        <ProductThumb kind={p.image} className={cn("rounded-none", compact ? "h-28" : "h-36 sm:h-40")} />
        <div className="p-3">
          <p className="truncate text-[11px] font-medium text-emerald-800">{p.merchantName}</p>
          <p className="mt-0.5 line-clamp-2 min-h-[2.5rem] text-sm font-semibold leading-snug">{p.name}</p>
          <div className="mt-1 flex items-center gap-1 text-[11px] text-slate-500">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            {p.rating} · {p.reviews}
            {p.verified && (
              <Badge tone="green">Verified</Badge>
            )}
          </div>
          <div className="mt-2 flex items-end justify-between">
            <p className="text-base font-extrabold tabular-nums text-emerald-900">{naira(p.price)}</p>
            <p className="text-[10px] text-slate-500">{p.stock > 0 ? "In stock" : "Sold out"}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export function ShopChip({
  name,
  slug,
  category,
  lga,
  rating,
  reviews,
  verified,
}: {
  name: string;
  slug: string;
  category: string;
  lga: string;
  rating: number;
  reviews: number;
  verified: boolean;
}) {
  return (
    <Link href={`/shop/${slug}`} className="min-w-[220px] flex-1">
      <Card className="h-full p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-700 text-sm font-bold text-white">
            {name.slice(0, 2).toUpperCase()}
          </div>
          {verified && <Badge tone="green">Verified</Badge>}
        </div>
        <p className="mt-3 font-semibold">{name}</p>
        <p className="flex items-center gap-1 text-xs text-slate-500">
          <MapPin className="h-3 w-3" /> {category} · {lga}
        </p>
        <p className="mt-1 text-xs">
          <Star className="inline h-3 w-3 fill-amber-400 text-amber-400" /> {rating} ({reviews})
        </p>
      </Card>
    </Link>
  );
}

export function StickyBuyBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass-nav fixed inset-x-0 bottom-14 z-20 px-4 py-3 md:hidden">{children}</div>
  );
}
