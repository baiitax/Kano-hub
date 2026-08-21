"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, Input, Modal, PageHead, StatCard } from "@/components/ui";
import { deliveries, naira } from "@/data/mock";
import { useState } from "react";
import { useStore } from "@/lib/store";

export default function Page() {
  const [open, setOpen] = useState(false);
  const { toast } = useStore();
  return (
    <AppShell>
      <PageHead title="Logistics" actions={<Button onClick={() => setOpen(true)}>Create delivery</Button>} />
      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Active" value="2" />
        <StatCard label="Delivered" value="16" />
        <StatCard label="Pending pickup" value="1" />
        <StatCard label="Avg time" value="54 min" />
      </div>
      <Card className="mt-4 divide-y">
        {deliveries.map((d) => (
          <div key={d.id} className="flex items-center justify-between p-4 text-sm">
            <div>
              <p className="font-semibold">
                {d.id} · {d.orderId}
              </p>
              <p className="text-slate-500">
                {d.pickup} → {d.dropoff} · {d.rider}
              </p>
            </div>
            <div className="text-right">
              <Badge tone="green">{d.status}</Badge>
              <p>{naira(d.fee)}</p>
            </div>
          </div>
        ))}
      </Card>
      <Modal open={open} onClose={() => setOpen(false)} title="Delivery request">
        <div className="space-y-3">
          <Input label="Pickup" defaultValue="No. 14 Zoo Road, Nassarawa" />
          <Input label="Customer address" defaultValue="Hotoro, Tarauni" />
          <Input label="Recipient phone" defaultValue="0803 220 1194" />
          <Input label="Weight (kg)" defaultValue="1.2" />
          <p className="text-sm">Estimated fee ₦1,500</p>
          <Button
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
