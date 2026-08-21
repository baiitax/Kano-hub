"use client";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { Badge, Card, StatCard } from "@/components/ui";

export default function Page() {
  return (
    <div className="min-h-screen pb-24">
      <PublicHeader />
      <div className="mx-auto max-w-xl px-3 py-6">
        <h1 className="text-2xl font-extrabold">Loyalty</h1>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <StatCard label="Points" value="4,860" />
          <StatCard label="Tier" value="VIP" />
        </div>
        <Card className="mt-4 p-4 text-sm">
          <Badge tone="gold">VIP</Badge>
          <p className="mt-2">12 orders · ₦4,860 toward next reward (₦5,000).</p>
          <p className="text-slate-500">Sallah double points this weekend at Aisha Fashion House.</p>
        </Card>
      </div>
      <CustomerBottom />
    </div>
  );
}
