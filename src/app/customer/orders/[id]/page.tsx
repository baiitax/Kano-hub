"use client";

import { useParams } from "next/navigation";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { LiveMap, kanoPins } from "@/components/map";
import { Badge, Button, Card } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";
import { Phone } from "lucide-react";

const steps = ["Order placed", "Payment confirmed", "Merchant processing", "Rider assigned", "Picked up", "In transit", "Delivered"];

export default function Track() {
  const { id } = useParams<{ id: string }>();
  const { orders } = useStore();
  const o = orders.find((x) => x.id === id) || orders[0];
  const idx = o.status === "Delivered" ? 6 : o.status === "Processing" ? 2 : o.delivery === "In transit" ? 5 : 3;
  return (
    <div className="min-h-screen pb-24">
      <PublicHeader />
      <LiveMap
        className="h-56 w-full rounded-none sm:mx-auto sm:mt-4 sm:h-72 sm:max-w-xl sm:rounded-2xl"
        pickup={{ ...kanoPins.zoo, label: o.merchant }}
        drop={{ ...kanoPins.hotoro, label: o.customer }}
        caption="ETA 18 min · Abdullahi Musa"
      />
      <div className="mx-auto max-w-xl px-3 py-5 sm:px-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h1 className="text-xl font-extrabold">Track {o.id}</h1>
            <p className="text-sm text-slate-500">
              {o.merchant} · {naira(o.amount)}
            </p>
          </div>
          <Badge tone={o.status === "Delivered" ? "green" : "amber"}>{o.status}</Badge>
        </div>
        <Card className="mt-4 flex items-center justify-between p-4">
          <div>
            <p className="text-xs text-slate-500">Your rider</p>
            <p className="font-bold">Abdullahi Musa</p>
            <p className="text-xs text-slate-500">Kano Express · KE-4412</p>
          </div>
          <Button href="/logistics" size="sm" variant="outline">
            Rider live
          </Button>
        </Card>
        <Card className="mt-3 p-4">
          {steps.map((s, i) => (
            <div key={s} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className={`h-3 w-3 rounded-full ${i <= idx ? "bg-emerald-700" : "bg-slate-300"}`} />
                {i < steps.length - 1 && <div className={`h-7 w-0.5 ${i < idx ? "bg-emerald-700" : "bg-slate-200"}`} />}
              </div>
              <p className={`text-sm ${i <= idx ? "font-semibold" : "text-slate-400"}`}>{s}</p>
            </div>
          ))}
        </Card>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <Button href="/merchant/logistics" variant="outline">
            Merchant logistics
          </Button>
          <Button href="/shop/aisha-fashion-house" variant="outline">
            Visit shop
          </Button>
          <Button href="tel:08032201194" variant="ghost">
            <Phone className="h-4 w-4" /> Call rider
          </Button>
          <Button href="/support" variant="ghost">
            Help
          </Button>
        </div>
      </div>
      <CustomerBottom />
    </div>
  );
}
