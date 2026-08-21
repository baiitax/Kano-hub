"use client";

import { useParams } from "next/navigation";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { Card } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

const steps = ["Order placed", "Payment confirmed", "Merchant processing", "Rider assigned", "Picked up", "In transit", "Delivered"];

export default function Track() {
  const { id } = useParams<{ id: string }>();
  const { orders } = useStore();
  const o = orders.find((x) => x.id === id) || orders[0];
  const idx = o.status === "Delivered" ? 6 : o.status === "Processing" ? 2 : 3;
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-xl px-3 py-6 pb-24 sm:px-4 sm:py-8">
        <h1 className="text-xl font-bold">Track {o.id}</h1>
        <p className="text-sm text-slate-500">{o.merchant} · {naira(o.amount)}</p>
        <Card className="mt-4 p-4">
          {steps.map((s, i) => (
            <div key={s} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className={`h-3 w-3 rounded-full ${i <= idx ? "bg-emerald-700" : "bg-slate-300"}`} />
                {i < steps.length - 1 && <div className={`h-8 w-0.5 ${i < idx ? "bg-emerald-700" : "bg-slate-200"}`} />}
              </div>
              <p className={`text-sm ${i <= idx ? "font-semibold" : "text-slate-400"}`}>{s}</p>
            </div>
          ))}
        </Card>
        <Card className="mt-4 h-40 bg-gradient-to-br from-emerald-100 to-blue-100 p-4">
          <p className="text-sm font-semibold">Route (simulated)</p>
          <p className="text-xs text-slate-600">Zoo Road, Nassarawa → Hotoro, Tarauni · 6.2 km</p>
          <div className="mt-6 h-1 rounded-full bg-emerald-700" />
          <p className="mt-2 text-xs">Illustrative map placeholder</p>
        </Card>
      </div>
      <CustomerBottom />
    </div>
  );
}
