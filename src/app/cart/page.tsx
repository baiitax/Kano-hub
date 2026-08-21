"use client";

import { CustomerBottom, ProductThumb, PublicHeader } from "@/components/chrome";
import { Button, Card, EmptyState } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Cart() {
  const { cart, setQty } = useStore();
  const sub = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const delivery = cart.length ? 1500 : 0;
  return (
    <div className="min-h-screen pb-28 md:pb-8">
      <PublicHeader />
      <div className="mx-auto max-w-3xl px-3 py-6 sm:px-4 sm:py-8">
        <h1 className="text-2xl font-extrabold">Cart</h1>
        {cart.length === 0 ? (
          <div className="mt-4">
            <EmptyState title="Your cart is empty" body="Find something in the marketplace." action={<Button href="/marketplace">Explore Marketplace</Button>} />
          </div>
        ) : (
          <>
            <div className="mt-4 space-y-3">
              {cart.map((i) => (
                <Card key={i.product.id} className="flex items-center justify-between gap-3 p-3">
                  <ProductThumb kind={i.product.image} alt={i.product.name} className="h-16 w-16 shrink-0" />
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
                </Card>
              ))}
            </div>
            <Card className="mt-4 space-y-2 p-4 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="tabular-nums">{naira(sub)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="tabular-nums">{naira(delivery)}</span>
              </div>
              <div className="flex justify-between text-base font-bold">
                <span>Total</span>
                <span className="tabular-nums">{naira(sub + delivery)}</span>
              </div>
              <Button href="/checkout" className="mt-2 w-full min-h-12">
                Proceed to Checkout
              </Button>
            </Card>
          </>
        )}
      </div>
      <CustomerBottom />
    </div>
  );
}
