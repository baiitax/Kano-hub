"use client";

import { useSearchParams } from "next/navigation";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { ProductCard } from "@/components/commerce";
import { Card, Input } from "@/components/ui";
import { products } from "@/data/mock";
import { Suspense, useMemo, useState } from "react";

function SearchInner() {
  const sp = useSearchParams();
  const initial = sp.get("q") || "";
  const [q, setQ] = useState(initial);
  const [sort, setSort] = useState("relevance");
  const [verified, setVerified] = useState(true);
  const list = useMemo(() => {
    const t = q.toLowerCase();
    let r = products.filter(
      (p) =>
        !t ||
        p.name.toLowerCase().includes(t) ||
        p.category.toLowerCase().includes(t) ||
        p.tags.some((x) => x.includes(t)) ||
        (t.includes("sneaker") && p.slug.includes("sneaker"))
    );
    if (verified) r = r.filter((p) => p.verified);
    if (sort === "low") r = [...r].sort((a, b) => a.price - b.price);
    if (sort === "high") r = [...r].sort((a, b) => b.price - a.price);
    if (sort === "rated") r = [...r].sort((a, b) => b.rating - a.rating);
    return r;
  }, [q, sort, verified]);
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <PublicHeader />
      <div className="mx-auto grid max-w-7xl gap-6 px-3 py-4 sm:px-4 sm:py-8 lg:grid-cols-[240px_1fr]">
        <aside className="glass hidden space-y-3 rounded-2xl p-4 lg:block">
          <p className="font-semibold">Filters</p>
          <Input label="Search" value={q} onChange={(e) => setQ(e.target.value)} />
          <label className="flex min-h-11 items-center gap-2 text-sm">
            <input type="checkbox" checked={verified} onChange={(e) => setVerified(e.target.checked)} /> Verified shops
          </label>
          <label className="flex min-h-11 items-center gap-2 text-sm">
            <input type="checkbox" defaultChecked /> In stock
          </label>
        </aside>
        <div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-xl font-bold">
              {list.length} results {q && `for “${q}”`}
            </h1>
            <div className="flex gap-2">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="flex-1 rounded-xl border border-white/60 bg-white/50 px-3 py-2.5 text-sm lg:hidden"
                placeholder="Filter…"
              />
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-xl border border-white/60 bg-white/50 px-3 py-2.5 text-sm">
                <option value="relevance">Relevance</option>
                <option value="low">Price low–high</option>
                <option value="high">Price high–low</option>
                <option value="rated">Top rated</option>
              </select>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
            {list.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
          {list.length === 0 && <Card className="mt-8 p-8 text-center text-slate-600">No products match. Try “sneakers” or “kaftan”.</Card>}
        </div>
      </div>
      <CustomerBottom />
    </div>
  );
}

export default function Page() {
  return (
    <Suspense>
      <SearchInner />
    </Suspense>
  );
}
