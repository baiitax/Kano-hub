"use client";
import Link from "next/link";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { Badge, Card } from "@/components/ui";
import { following } from "@/data/customer-ops";
import { businesses } from "@/data/mock";

export default function Page() {
  const list = businesses.filter((b) => following.includes(b.slug));
  return (
    <div className="min-h-screen pb-24">
      <PublicHeader />
      <div className="mx-auto max-w-xl px-3 py-6">
        <h1 className="text-2xl font-extrabold">Following</h1>
        {list.map((b) => (
          <Link key={b.id} href={`/shop/${b.slug}`}>
            <Card className="mt-3 p-4">
              <div className="flex justify-between">
                <p className="font-bold">{b.name}</p>
                {b.verified && <Badge tone="green">Verified</Badge>}
              </div>
              <p className="text-sm text-slate-500">
                {b.category} · {b.lga} · {b.rating}★
              </p>
            </Card>
          </Link>
        ))}
      </div>
      <CustomerBottom />
    </div>
  );
}
