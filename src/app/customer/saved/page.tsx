"use client";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { ProductCard } from "@/components/commerce";
import { savedProducts } from "@/data/customer-ops";
import { products } from "@/data/mock";

export default function Page() {
  const list = products.filter((p) => savedProducts.includes(p.id));
  return (
    <div className="min-h-screen pb-24">
      <PublicHeader />
      <div className="mx-auto max-w-xl px-3 py-6">
        <h1 className="text-2xl font-extrabold">Saved items</h1>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {list.map((p) => (
            <ProductCard key={p.id} p={p} compact />
          ))}
        </div>
      </div>
      <CustomerBottom />
    </div>
  );
}
