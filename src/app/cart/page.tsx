"use client";

import { CustomerBottom, ProductThumb, PublicHeader } from "@/components/chrome";
import { Badge, Button, Card, EmptyState, ProtoNote } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Cart() {
  const { cart, setQty } = useStore();
  const groups = cart.reduce<Record<string, typeof cart>>((a, i) => {
    const k = i.product.merchantId;
    (a[k] ||= []).push(i);
    return a;
  }, {});
  const shops = Object.values(groups);
  const sub = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const delivery = shops.length * 1500;
  return (
    <div className="min-h-screen pb-28 md:pb-8">
      <PublicHeader />
      <div className="mx-auto max-w-3xl px-3 py-6 sm:px-4 sm:py-8">
        <h1 className="text-2xl font-extrabold">Cart</h1>
        <p className="text-sm text-slate-600">Multi-shop baskets split at checkout — one pay, many rumfa.</p>
        {cart.length === 0 ? (
          <div className="mt-4">
            <EmptyState title="Your cart is empty" body="Find something in the marketplace." action={<Button href="/marketplace">Explore Marketplace</Button>} />
          </div>
        ) : (
          <>
            <ProtoNote>
              {shops.length} shop{shops.length > 1 ? "s" : ""} · each leg settles separately. Holds use participating payment partners.
            </ProtoNote>
            {shops.map((lines) => {
              const m = lines[0].product;
              const s = lines.reduce((x, i) => x + i.product.price * i.qty, 0);
              return (
                <Card key={m.merchantId} className="mt-4 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="font-bold">{m.merchantName}</p>
                    <Badge>{m.location}</Badge>
                  </div>
                  {lines.map((i) => (
                    <div key={i.product.id} className="flex items-center justify-between gap-3 py-2">
                      <ProductThumb kind={i.product.image} alt={i.product.name} className="h-14 w-14 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-semibold">{i.product.name}</p>
                        <p className="text-sm text-slate-500">{naira(i.product.price)}</p>
                      </div>
                      <div className="flex items-center rounded-2xl bg-white/50">
                        <button className="grid h-11 w-11 place-items-center" onClick={() => setQty(i.product.id, i.qty - 1)}>
                          −
                        </button>
                        <span className="w-6 text-center font-bold">{i.qty}</span>
                        <button className="grid h-11 w-11 place-items-center" onClick={() => setQty(i.product.id, i.qty + 1)}>
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                  <p className="text-right text-sm font-semibold">
                    Shop subtotal {naira(s)} · rider {naira(1500)}
                  </p>
                </Card>
              );
            })}
            <Card className="mt-4 space-y-2 p-4 text-sm">
              <div className="flex justify-between">
                <span>Merchandise</span>
                <span className="tabular-nums">{naira(sub)}</span>
              </div>
              <div className="flex justify-between">
                <span>Split delivery ({shops.length} pickup{shops.length > 1 ? "s" : ""})</span>
                <span className="tabular-nums">{naira(delivery)}</span>
              </div>
              <div className="flex justify-between text-base font-bold">
                <span>Total</span>
                <span className="tabular-nums">{naira(sub + delivery)}</span>
              </div>
              <Button href="/checkout" className="mt-2 w-full min-h-12">
                Split checkout
              </Button>
            </Card>
          </>
        )}
      </div>
      <CustomerBottom />
    </div>
  );
}
