"use client";

import { useParams } from "next/navigation";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { ProductCard } from "@/components/commerce";
import { products } from "@/data/mock";

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const list = products.filter((p) => p.category.toLowerCase() === String(category).toLowerCase());
  const shown = list.length ? list : products;
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <PublicHeader />
      <div className="bg-gradient-to-r from-emerald-900 to-blue-900 py-8 text-white sm:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-sm text-emerald-200">Category</p>
          <h1 className="text-3xl font-bold capitalize">{category}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-7xl grid grid-cols-2 gap-3 px-3 py-6 sm:grid-cols-3 sm:px-4 lg:grid-cols-4">
        {shown.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
      <CustomerBottom />
    </div>
  );
}
