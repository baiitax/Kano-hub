"use client";

import { useParams } from "next/navigation";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { ProductCard } from "@/components/commerce";
import { Badge, Button, Card } from "@/components/ui";
import { businesses, products } from "@/data/mock";
import { useStore } from "@/lib/store";
import { MapPin, Star } from "lucide-react";

export default function Shop() {
  const { slug } = useParams<{ slug: string }>();
  const b = businesses.find((x) => x.slug === slug) || businesses[0];
  const list = products.filter((p) => p.merchantSlug === b.slug);
  const { toast } = useStore();
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <PublicHeader />
      <div className="h-28 bg-gradient-to-r from-emerald-800 to-blue-900 sm:h-40" />
      <div className="mx-auto max-w-6xl px-3 sm:px-4 -mt-10">
        <Card className="p-4 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-2xl font-extrabold">{b.name}</h1>
              <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                <MapPin className="h-4 w-4" /> {b.category} · {b.lga} · {b.hours}
              </p>
              {b.verified && <Badge tone="green">Verified Business</Badge>}
              <p className="mt-2 text-sm">
                <Star className="inline h-4 w-4 fill-amber-400 text-amber-400" /> {b.rating} · {b.reviews} reviews · {b.followers.toLocaleString()} followers
              </p>
            </div>
            <div className="flex gap-2">
              <Button className="flex-1 sm:flex-none" onClick={() => toast("Following shop", b.name)}>
                Follow
              </Button>
              <Button className="flex-1 sm:flex-none" variant="outline" onClick={() => toast("Shop link copied")}>
                Share
              </Button>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-700">{b.description}</p>
        </Card>
        <h2 className="mt-6 font-bold">Products</h2>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {(list.length ? list : products.slice(0, 4)).map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
      <CustomerBottom />
    </div>
  );
}
