"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PublicHeader } from "@/components/chrome";
import { Button, Card, Input } from "@/components/ui";
import { naira, products } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Checkout() {
  const { cart, clearCart, addOrder, setWalletCustomer, walletCustomer, setWalletMerchant, walletMerchant, setLastOrderId, toast, setStock, products: plist } = useStore();
  const items = cart.length ? cart : [{ product: products[0], qty: 1 }];
  const total = items.reduce((s, i) => s + i.product.price * i.qty, 0) + 1500;
  const [method, setMethod] = useState("Wallet");
  const [step, setStep] = useState(1);
  const router = useRouter();
  const pay = () => {
    const id = "KH-2026-" + Math.floor(1800 + Math.random() * 200);
    addOrder({
      id,
      customer: "Maryam Yusuf",
      customerPhone: "0803 220 1194",
      merchant: items[0].product.merchantName,
      merchantId: items[0].product.merchantId,
      items: items.map((i) => ({ productId: i.product.id, name: i.product.name, qty: i.qty, price: i.product.price })),
      amount: total,
      payment: method,
      paymentStatus: "Paid",
      status: "New",
      date: "21 Aug 2026",
      delivery: "Unassigned",
      address: "No. 8 Hotoro, Tarauni, Kano",
    });
    items.forEach((i) => {
      const cur = plist.find((p) => p.id === i.product.id);
      if (cur) setStock(i.product.id, Math.max(0, cur.stock - i.qty));
    });
    if (method === "Wallet") setWalletCustomer(Math.max(0, walletCustomer - total));
    setWalletMerchant(walletMerchant + total);
    setLastOrderId(id);
    clearCart();
    toast("Payment successful", naira(total) + " · " + id);
    router.push("/checkout/success?id=" + id);
  };
  return (
    <div className="min-h-screen">
      <PublicHeader />
      <div className="mx-auto max-w-xl px-3 py-6 sm:px-4 sm:py-8 pb-8">
        <h1 className="text-2xl font-extrabold">Checkout</h1>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {["Address", "Delivery", "Payment", "Review"].map((s, i) => (
            <span key={s} className={i < step ? "font-bold text-emerald-700" : "text-slate-400"}>
              {i + 1}. {s}
            </span>
          ))}
        </div>
        {step === 1 && (
          <Card className="mt-4 space-y-3 p-4">
            <Input label="Delivery address" defaultValue="No. 8 Hotoro, Tarauni, Kano" />
            <Input label="Phone" defaultValue="0803 220 1194" />
            <Button className="w-full min-h-12" onClick={() => setStep(2)}>Continue</Button>
          </Card>
        )}
        {step === 2 && (
          <Card className="mt-4 space-y-2 p-4">
            {["Standard · ₦1,500 · 45–90 min", "Express · ₦2,500 · 30 min"].map((o) => (
              <label key={o} className="flex min-h-12 items-center gap-2 rounded-xl border border-white/50 bg-white/30 p-3 text-sm">
                <input type="radio" name="d" defaultChecked={o.startsWith("Standard")} /> {o}
              </label>
            ))}
            <Button className="w-full min-h-12" onClick={() => setStep(3)}>Continue</Button>
          </Card>
        )}
        {step === 3 && (
          <Card className="mt-4 space-y-2 p-4">
            {["Wallet", "Card", "Bank transfer", "Payment link", "QR"].map((m) => (
              <label key={m} className="flex min-h-12 items-center gap-2 rounded-xl border border-white/50 bg-white/30 p-3 text-sm">
                <input type="radio" name="p" checked={method === m} onChange={() => setMethod(m)} /> {m}
              </label>
            ))}
            <p className="text-xs text-slate-500">Payment services provided through licensed payment partners.</p>
            <Button className="w-full min-h-12" onClick={() => setStep(4)}>Continue</Button>
          </Card>
        )}
        {step === 4 && (
          <Card className="mt-4 space-y-2 p-4">
            {items.map((i) => (
              <div key={i.product.id} className="flex justify-between text-sm">
                <span>
                  {i.product.name} × {i.qty}
                </span>
                <span>{naira(i.product.price * i.qty)}</span>
              </div>
            ))}
            <p className="font-bold">Total {naira(total)}</p>
            <Button onClick={pay} className="w-full min-h-12">
              Pay {naira(total)}
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}
