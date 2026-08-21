"use client";

import { AppShell } from "@/components/chrome";
import { LiveMap, kanoPins } from "@/components/map";
import { Badge, Button, Card, Input, Modal, PageHead, StatCard } from "@/components/ui";
import { deliveries, naira } from "@/data/mock";
import { riders } from "@/data/logistics";
import { useState } from "react";
import { useStore } from "@/lib/store";

export default function Page() {
  const [open, setOpen] = useState(false);
  const { toast, updateOrder } = useStore();
  return (
    <AppShell>
      <PageHead title="Logistics" sub="Assign riders, track live, notify customers" actions={<Button onClick={() => setOpen(true)}>Create delivery</Button>} />
      <div className="grid gap-3 sm:grid-cols-4">
        <StatCard label="Active" value="2" />
        <StatCard label="Delivered" value="16" />
        <StatCard label="Pending pickup" value="1" />
        <StatCard label="Avg time" value="54 min" />
      </div>
      <LiveMap
        className="mt-4 h-52 w-full sm:h-72"
        pickup={{ ...kanoPins.zoo, label: "Your shop" }}
        drop={{ ...kanoPins.hotoro, label: "Maryam Yusuf" }}
        riders={riders.slice(0, 3).map((r) => ({ id: r.id, x: r.x, y: r.y, label: r.name, tone: "rider" as const }))}
      />
      <div className="mt-4 space-y-3">
        {deliveries.map((d) => (
          <Card key={d.id} className="p-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="font-semibold">
                  {d.id} · {d.orderId}
                </p>
                <p className="text-sm text-slate-600">
                  {d.pickup} → {d.dropoff}
                </p>
                <p className="text-sm">
                  Rider <span className="font-medium">{d.rider}</span> · Customer {d.customer}
                </p>
              </div>
              <div className="text-right">
                <Badge tone="green">{d.status}</Badge>
                <p className="font-bold">{naira(d.fee)}</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Button size="sm" href={`/customer/orders/${d.orderId}`} variant="outline">
                Customer tracking
              </Button>
              <Button size="sm" href="/logistics" variant="outline">
                Rider app
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  updateOrder(d.orderId, { delivery: "Assigned", status: "Out for Delivery" });
                  toast("Assigned Abdullahi Musa", d.orderId);
                }}
              >
                Assign rider
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="Delivery request">
        <div className="space-y-3">
          <Input label="Pickup" defaultValue="No. 14 Zoo Road, Nassarawa" />
          <Input label="Customer address" defaultValue="Hotoro, Tarauni" />
          <Input label="Recipient phone" defaultValue="0803 220 1194" />
          <Input label="Weight (kg)" defaultValue="1.2" />
          <p className="text-sm">Partner: Kano Express · Est. ₦1,500 · 18 min</p>
          <Button
            className="w-full"
            onClick={() => {
              toast("Rider assigned: Abdullahi Musa");
              setOpen(false);
            }}
          >
            Request rider
          </Button>
        </div>
      </Modal>
    </AppShell>
  );
}
