"use client";
import { AppShell } from "@/components/chrome";
import { Card, PageHead, StatCard } from "@/components/ui";
import { shopReviews } from "@/data/merchant-ops";

export default function Page() {
  return (
    <AppShell>
      <PageHead title="Reviews" sub="Product and shop ratings from verified buyers" />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Shop rating" value="4.8" />
        <StatCard label="Reviews" value="214" />
        <StatCard label="Reply rate" value="96%" />
      </div>
      {shopReviews.map((r) => (
        <Card key={r.who + r.when} className="mt-3 p-4">
          <p className="font-semibold">
            {r.who} · {"★".repeat(r.stars)}
          </p>
          <p className="text-sm text-slate-600">{r.text}</p>
          <p className="text-xs text-slate-400">{r.when} · Verified purchase</p>
        </Card>
      ))}
    </AppShell>
  );
}
