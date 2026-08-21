"use client";

import { AppShell } from "@/components/chrome";
import { Button, Card } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";
import { useState } from "react";
import type { Product } from "@/types";

export default function POS() {
  const { products, setStock, setWalletMerchant, walletMerchant, toast, addOrder } = useStore();
  const [cart, setCart] = useState<{ p: Product; q: number }[]>([]);
  const [pay, setPay] = useState("Cash");
  const total = cart.reduce((s, i) => s + i.p.price * i.q, 0);
  const add = (p: Product) =>
    setCart((c) => {
      const f = c.find((x) => x.p.id === p.id);
      return f ? c.map((x) => (x.p.id === p.id ? { ...x, q: x.q + 1 } : x)) : [...c, { p, q: 1 }];
    });
  const charge = () => {
    cart.forEach((i) => setStock(i.p.id, Math.max(0, i.p.stock - i.q)));
    setWalletMerchant(walletMerchant + total);
    addOrder({
      id: "KH-POS-" + Date.now().toString().slice(-5),
      customer: "Walk-in",
      customerPhone: "—",
      merchant: "Aisha Fashion House",
      merchantId: "b1",
      items: cart.map((i) => ({ productId: i.p.id, name: i.p.name, qty: i.q, price: i.p.price })),
      amount: total,
      payment: pay,
      paymentStatus: "Paid",
      status: "Delivered",
      date: "21 Aug 2026",
      delivery: "Pickup",
      address: "Shop",
    });
    toast("Sale recorded", naira(total) + " · inventory updated");
    setCart([]);
  };
  return (
    <AppShell>
      <h1 className="text-2xl font-extrabold">Point of Sale</h1>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="grid grid-cols-2 gap-2 pb-40 sm:grid-cols-3 lg:col-span-2 lg:pb-0">
          {products.map((p) => (
            <button key={p.id} onClick={() => add(p)} className="glass min-h-[5.5rem] rounded-2xl p-3 text-left text-sm active:scale-[0.99]">
              <p className="line-clamp-2 font-semibold">{p.name}</p>
              <p className="mt-1 font-bold tabular-nums">{naira(p.price)}</p>
              <p className="text-xs text-slate-500">Stock {p.stock}</p>
            </button>
          ))}
        </div>
        <Card className="fixed inset-x-3 bottom-20 z-20 p-4 lg:static lg:bottom-auto">
          <p className="font-semibold">Cart {cart.length ? `(${cart.length})` : ""}</p>
          <div className="max-h-28 overflow-auto lg:max-h-none">
            {cart.map((i) => (
              <div key={i.p.id} className="mt-2 flex justify-between text-sm">
                <span>
                  {i.p.name} × {i.q}
                </span>
                <span className="tabular-nums">{naira(i.p.price * i.q)}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-2xl font-extrabold tabular-nums">{naira(total)}</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {["Cash", "Transfer", "Card", "Wallet"].map((m) => (
              <button key={m} onClick={() => setPay(m)} className={`min-h-10 rounded-xl px-3 text-xs font-semibold ${pay === m ? "bg-emerald-700 text-white" : "glass"}`}>
                {m}
              </button>
            ))}
          </div>
          <Button className="mt-3 w-full min-h-12" disabled={!cart.length} onClick={charge}>
            Charge & print receipt
          </Button>
        </Card>
      </div>
    </AppShell>
  );
}
