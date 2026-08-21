"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import type { Role } from "@/types";
import { orders as seedOrders, products as seedProducts } from "@/data/mock";
import type { Order, Product } from "@/types";

export type CartItem = { product: Product; qty: number };

type Toast = { id: number; title: string; body?: string };

type Store = {
  role: Role;
  setRole: (r: Role) => void;
  lang: "en" | "ha";
  setLang: (l: "en" | "ha") => void;
  cart: CartItem[];
  addToCart: (p: Product, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;
  orders: Order[];
  updateOrder: (id: string, patch: Partial<Order>) => void;
  addOrder: (o: Order) => void;
  products: Product[];
  setStock: (id: string, stock: number) => void;
  walletCustomer: number;
  setWalletCustomer: (n: number) => void;
  walletMerchant: number;
  setWalletMerchant: (n: number) => void;
  toasts: Toast[];
  toast: (title: string, body?: string) => void;
  lastOrderId: string | null;
  setLastOrderId: (id: string | null) => void;
  loanStatus: string;
  setLoanStatus: (s: string) => void;
};

const Ctx = createContext<Store | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>("customer");
  const [lang, setLang] = useState<"en" | "ha">("en");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>(seedOrders);
  const [products, setProducts] = useState<Product[]>(seedProducts);
  const [walletCustomer, setWalletCustomer] = useState(85000);
  const [walletMerchant, setWalletMerchant] = useState(1240500);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [lastOrderId, setLastOrderId] = useState<string | null>("KH-2026-1842");
  const [loanStatus, setLoanStatus] = useState("Not started");

  const toast = (title: string, body?: string) => {
    const id = Date.now();
    setToasts((t) => [...t, { id, title, body }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3200);
  };

  const value = useMemo<Store>(
    () => ({
      role,
      setRole,
      lang,
      setLang,
      cart,
      addToCart: (p, qty = 1) => {
        setCart((c) => {
          const i = c.find((x) => x.product.id === p.id);
          if (i) return c.map((x) => (x.product.id === p.id ? { ...x, qty: x.qty + qty } : x));
          return [...c, { product: p, qty }];
        });
        toast("Added to cart", p.name);
      },
      setQty: (id, qty) =>
        setCart((c) => (qty <= 0 ? c.filter((x) => x.product.id !== id) : c.map((x) => (x.product.id === id ? { ...x, qty } : x)))),
      clearCart: () => setCart([]),
      orders,
      updateOrder: (id, patch) => setOrders((o) => o.map((x) => (x.id === id ? { ...x, ...patch } : x))),
      addOrder: (o) => setOrders((x) => [o, ...x]),
      products,
      setStock: (id, stock) => setProducts((p) => p.map((x) => (x.id === id ? { ...x, stock } : x))),
      walletCustomer,
      setWalletCustomer,
      walletMerchant,
      setWalletMerchant,
      toasts,
      toast,
      lastOrderId,
      setLastOrderId,
      loanStatus,
      setLoanStatus,
    }),
    [role, lang, cart, orders, products, walletCustomer, walletMerchant, toasts, lastOrderId, loanStatus]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const s = useContext(Ctx);
  if (!s) throw new Error("store");
  return s;
}
