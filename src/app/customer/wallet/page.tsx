"use client";

import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { Button, Card, Modal } from "@/components/ui";
import { naira, transactions } from "@/data/mock";
import { useStore } from "@/lib/store";
import { useState } from "react";

export default function Wallet() {
  const { walletCustomer, setWalletCustomer, toast } = useStore();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-xl px-3 py-6 pb-24 sm:px-4 sm:py-8 md:pb-8">
        <h1 className="text-2xl font-bold">Wallet</h1>
        <Card className="mt-4 bg-emerald-800 p-6 text-white">
          <p className="text-sm text-emerald-100">Available balance</p>
          <p className="text-4xl font-extrabold">{naira(walletCustomer)}</p>
          <div className="mt-4 flex gap-2">
            <Button className="bg-white text-emerald-900 hover:bg-emerald-50" onClick={() => setOpen(true)}>
              Add money
            </Button>
            <Button variant="outline" className="border-white/40 text-white" onClick={() => toast("Withdraw started")}>
              Withdraw
            </Button>
          </div>
        </Card>
        <h2 className="mt-6 font-semibold">History</h2>
        <div className="mt-2 space-y-2">
          {transactions.map((t) => (
            <Card key={t.id} className="flex justify-between p-3 text-sm">
              <span>{t.party}</span>
              <span className="font-semibold">{naira(t.amount)}</span>
            </Card>
          ))}
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="Add money">
        <p className="text-sm">Prototype top-up. Adds ₦20,000.</p>
        <Button
          className="mt-3"
          onClick={() => {
            setWalletCustomer(walletCustomer + 20000);
            setOpen(false);
          }}
        >
          Confirm
        </Button>
      </Modal>
      <CustomerBottom />
    </div>
  );
}
