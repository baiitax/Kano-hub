"use client";

import Link from "next/link";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { Button, Card, Input } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";
import { ChevronRight, Wallet } from "lucide-react";

export default function Profile() {
  const { toast, walletCustomer } = useStore();
  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <PublicHeader />
      <div className="mx-auto max-w-xl space-y-4 px-3 py-6 sm:px-4 sm:py-8">
        <div className="flex items-center gap-3">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-700 text-lg font-bold text-white">MY</div>
          <div>
            <h1 className="text-xl font-extrabold">Maryam Yusuf</h1>
            <p className="text-sm text-slate-500">Hotoro, Tarauni · 12 orders</p>
          </div>
        </div>
        <Link href="/customer/wallet">
          <Card className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Wallet className="h-5 w-5 text-emerald-800" />
              <div>
                <p className="text-xs text-slate-500">Wallet</p>
                <p className="font-bold tabular-nums">{naira(walletCustomer)}</p>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-slate-400" />
          </Card>
        </Link>
        <Card className="space-y-3 p-4">
          <Input label="Full name" defaultValue="Maryam Yusuf" />
          <Input label="Phone" defaultValue="0803 220 1194" />
          <Input label="Email" defaultValue="maryam.y@example.com" />
          <Button className="w-full min-h-12" onClick={() => toast("Profile saved")}>
            Save
          </Button>
        </Card>
        {[
          ["/customer/orders", "Orders"],
          ["/notifications", "Notifications"],
          ["/settings", "Security & privacy"],
          ["/support", "Help"],
        ].map(([h, l]) => (
          <Link key={h} href={h}>
            <Card className="mb-2 flex min-h-14 items-center justify-between px-4">
              <span className="font-medium">{l}</span>
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </Card>
          </Link>
        ))}
      </div>
      <CustomerBottom />
    </div>
  );
}
