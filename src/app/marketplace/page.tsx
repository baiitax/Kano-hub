"use client";

import Link from "next/link";
import { CustomerBottom, Footer, PublicHeader } from "@/components/chrome";
import { ProductCard, ShopChip } from "@/components/commerce";
import { businesses, categories, products } from "@/data/mock";
import { Sparkles } from "lucide-react";

export default function Marketplace() {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <PublicHeader />
      <div className="mx-auto max-w-7xl px-3 py-4 sm:px-4 sm:py-8">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">Kano State</p>
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Marketplace</h1>
            <p className="text-sm text-slate-600">Verified shops. Same-day delivery in metro LGAs.</p>
          </div>
          <Link href="/marketplace/search?q=sneakers" className="text-sm font-semibold text-emerald-800">
            Advanced search
          </Link>
        </div>

        <div className="-mx-3 mt-4 flex gap-2 overflow-x-auto px-3 pb-2 scrollbar-thin sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {categories.map((c) => (
            <Link
              key={c}
              href={`/marketplace/category/${c.toLowerCase()}`}
              className="glass shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium"
            >
              {c}
            </Link>
          ))}
        </div>

        <section className="mt-8">
          <div className="mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-amber-600" />
            <h2 className="text-lg font-bold">Featured businesses</h2>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin lg:grid lg:grid-cols-3 lg:overflow-visible">
            {businesses.map((b) => (
              <ShopChip
                key={b.id}
                name={b.name}
                slug={b.slug}
                category={b.category}
                lga={b.lga}
                rating={b.rating}
                reviews={b.reviews}
                verified={b.verified}
              />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold">Popular near you</h2>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </section>
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
      <CustomerBottom />
    </div>
  );
}
