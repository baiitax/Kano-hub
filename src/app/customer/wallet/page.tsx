"use client";

import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { Button, Card, Modal, StatCard } from "@/components/ui";
import { naira, transactions } from "@/data/mock";
import { useStore } from "@/lib/store";
import { useState } from "react";

export default function Wallet() {
  const { walletCustomer, setWalletCustomer, toast } = useStore();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen pb-24">
      <PublicHeader />
      <div className="mx-auto max-w-xl px-3 py-6">
        <h1 className="text-2xl font-extrabold">Wallet</h1>
        <p className="text-sm text-slate-500">Payment services via licensed partners.</p>
        <Card className="mt-4 bg-emerald-800 p-6 text-white">
          <p className="text-sm text-emerald-100">Available</p>
          <p className="text-4xl font-extrabold">{naira(walletCustomer)}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button className="bg-white text-emerald-900 hover:bg-emerald-50" onClick={() => setOpen(true)}>
              Add money
            </Button>
            <Button variant="outline" className="border-white/40 text-white" onClick={() => toast("Withdraw started")}>
              Withdraw
            </Button>
            <Button variant="outline" className="border-white/40 text-white" href="/customer/payments">
              Methods
            </Button>
          </div>
        </Card>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <StatCard label="Last in" value="₦85,000" hint="Order pay" />
          <StatCard label="Pending" value="₦0" />
        </div>
        <h2 className="mt-6 font-semibold">History</h2>
        {transactions.map((t) => (
          <Card key={t.id} className="mt-2 flex justify-between p-3 text-sm">
            <span>
              {t.type} · {t.party}
            </span>
            <span className="font-semibold">{naira(t.amount)}</span>
          </Card>
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="Add money">
        <p className="text-sm">Prototype top-up. Adds ₦20,000.</p>
        <Button
          className="mt-3"
          onClick={() => {
            setWalletCustomer(walletCustomer + 20000);
            setOpen(false);
            toast("Wallet funded", "₦20,000");
          }}
        >
          Confirm
        </Button>
      </Modal>
      <CustomerBottom />
    </div>
  );
}
