"use client";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { Card } from "@/components/ui";

const mine = [
  { shop: "Arewa Beauty Store", stars: 5, text: "Shea set as described.", when: "12 Aug" },
  { shop: "Aisha Fashion House", stars: 5, text: "Waiting on today’s kaftan — will update.", when: "21 Aug" },
];

export default function Page() {
  return (
    <div className="min-h-screen pb-24">
      <PublicHeader />
      <div className="mx-auto max-w-xl px-3 py-6">
        <h1 className="text-2xl font-extrabold">My reviews</h1>
        {mine.map((r) => (
          <Card key={r.shop} className="mt-3 p-4">
            <p className="font-semibold">
              {r.shop} · {"★".repeat(r.stars)}
            </p>
            <p className="text-sm text-slate-600">{r.text}</p>
            <p className="text-xs text-slate-400">{r.when} · Verified purchase</p>
          </Card>
        ))}
      </div>
      <CustomerBottom />
    </div>
  );
}
