"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PublicHeader } from "@/components/chrome";
import { Badge, Button, Card, Input, ProtoNote } from "@/components/ui";
import { naira, products } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Checkout() {
  const {
    cart,
    clearCart,
    addOrder,
    setWalletCustomer,
    walletCustomer,
    setLastOrderId,
    setLastSplitId,
    toast,
    setStock,
    products: plist,
  } = useStore();
  const items = cart.length
    ? cart
    : [
        { product: products[0], qty: 1 },
        { product: products[6], qty: 1 },
      ];
  const groups = items.reduce<Record<string, typeof items>>((a, i) => {
    (a[i.product.merchantId] ||= []).push(i);
    return a;
  }, {});
  const shops = Object.values(groups);
  const merch = items.reduce((s, i) => s + i.product.price * i.qty, 0);
  const delivery = shops.length * 1500;
  const total = merch + delivery;
  const [method, setMethod] = useState("Wallet");
  const [step, setStep] = useState(1);
  const router = useRouter();
  const pay = () => {
    const parent = "SPLIT-2026-" + Math.floor(440 + Math.random() * 80);
    shops.forEach((lines, idx) => {
      const p = lines[0].product;
      const amount = lines.reduce((s, i) => s + i.product.price * i.qty, 0) + 1500;
      const id = "KH-2026-" + (1900 + idx);
      addOrder({
        id,
        customer: "Maryam Yusuf",
        customerPhone: "0803 220 1194",
        merchant: p.merchantName,
        merchantId: p.merchantId,
        items: lines.map((i) => ({ productId: i.product.id, name: i.product.name, qty: i.qty, price: i.product.price })),
        amount,
        payment: method,
        paymentStatus: "Held",
        status: "New",
        date: "21 Aug 2026",
        delivery: "Unassigned",
        address: "No. 8 Hotoro, Tarauni, Kano",
        parentId: parent,
        hold: amount,
      });
      lines.forEach((i) => {
        const cur = plist.find((x) => x.id === i.product.id);
        if (cur) setStock(i.product.id, Math.max(0, cur.stock - i.qty));
      });
      if (idx === 0) setLastOrderId(id);
    });
    if (method === "Wallet") setWalletCustomer(Math.max(0, walletCustomer - total));
    setLastSplitId(parent);
    clearCart();
    toast("Split paid — on hold", parent + " · " + shops.length + " shops · partner escrow (prototype)");
    router.push("/checkout/success?id=" + parent);
  };
  return (
    <div className="min-h-screen">
      <PublicHeader />
      <div className="mx-auto max-w-xl px-3 py-6 sm:px-4 sm:py-8 pb-8">
        <h1 className="text-2xl font-extrabold">Split checkout</h1>
        <ProtoNote>
          One payment, {shops.length} merchant settlement{shops.length > 1 ? "s" : ""}. Funds stay on hold with participating
          licensed partners until each leg is delivered or a dispute is released. KanoHub is not a bank.
        </ProtoNote>
        <div className="mt-2 flex flex-wrap gap-2 text-xs">
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
            <Button className="w-full min-h-12" onClick={() => setStep(2)}>
              Continue
            </Button>
          </Card>
        )}
        {step === 2 && (
          <Card className="mt-4 space-y-2 p-4">
            <p className="text-sm">Each shop is a separate pickup (Zoo Road, Gyadi-Gyadi, …).</p>
            {["Split standard · ₦1,500 / shop", "Bundle drop · ₦2,000 extra wait"].map((o) => (
              <label key={o} className="flex min-h-12 items-center gap-2 rounded-xl border border-white/50 bg-white/30 p-3 text-sm">
                <input type="radio" name="d" defaultChecked={o.startsWith("Split")} /> {o}
              </label>
            ))}
            <Button className="w-full min-h-12" onClick={() => setStep(3)}>
              Continue
            </Button>
          </Card>
        )}
        {step === 3 && (
          <Card className="mt-4 space-y-2 p-4">
            {["Wallet", "Card", "Bank transfer"].map((m) => (
              <label key={m} className="flex min-h-12 items-center gap-2 rounded-xl border border-white/50 bg-white/30 p-3 text-sm">
                <input type="radio" name="p" checked={method === m} onChange={() => setMethod(m)} /> {m}
              </label>
            ))}
            <p className="text-xs text-slate-500">Payment services provided through licensed payment partners.</p>
            <Button className="w-full min-h-12" onClick={() => setStep(4)}>
              Continue
            </Button>
          </Card>
        )}
        {step === 4 && (
          <Card className="mt-4 space-y-3 p-4">
            {shops.map((lines) => {
              const p = lines[0].product;
              const a = lines.reduce((s, i) => s + i.product.price * i.qty, 0) + 1500;
              return (
                <div key={p.merchantId} className="rounded-xl bg-white/40 p-3 text-sm">
                  <div className="flex justify-between font-semibold">
                    <span>{p.merchantName}</span>
                    <Badge>Hold {naira(a)}</Badge>
                  </div>
                  {lines.map((i) => (
                    <p key={i.product.id}>
                      {i.product.name} × {i.qty}
                    </p>
                  ))}
                </div>
              );
            })}
            <p className="font-bold">Total {naira(total)}</p>
            <Button onClick={pay} className="w-full min-h-12">
              Pay & hold {naira(total)}
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}
