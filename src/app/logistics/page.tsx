"use client";
import { Logo } from "@/components/chrome";
import { Badge, Button, Card, StatCard } from "@/components/ui";
import { deliveries, naira } from "@/data/mock";
import { useStore } from "@/lib/store";
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const { toast } = useStore();
  const [status, setStatus] = useState(deliveries[0].status);
  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="mx-auto max-w-lg">
        <Logo />
        <h1 className="mt-4 text-2xl font-bold">Abdullahi Musa</h1>
        <Badge tone="green">Online</Badge>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <StatCard label="Today" value="18" />
          <StatCard label="Completed" value="16" />
          <StatCard label="Active" value="2" />
          <StatCard label="Earnings" value={naira(18500)} />
        </div>
        <Card className="mt-4 p-4">
          <p className="font-semibold">Active job {deliveries[0].id}</p>
          <p className="text-sm">
            Pickup {deliveries[0].pickup} → {deliveries[0].dropoff}
          </p>
          <p className="text-sm">
            {deliveries[0].customer} · {deliveries[0].phone} · {deliveries[0].distance} · {naira(deliveries[0].fee)}
          </p>
          <p className="mt-2 text-sm">Status: {status}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["Accept", "Picked up", "In transit", "Delivered", "Failed"].map((a) => (
              <Button
                key={a}
                size="sm"
                variant="outline"
                onClick={() => {
                  setStatus(a);
                  toast(a);
                }}
              >
                {a}
              </Button>
            ))}
          </div>
        </Card>
        <Link href="/logistics/company" className="mt-4 inline-block text-sm font-semibold text-emerald-700">
          Company dashboard →
        </Link>
      </div>
    </div>
  );
}
