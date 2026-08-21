"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Role, Session } from "@/types";
import { orders as seedOrders, products as seedProducts } from "@/data/mock";
import { demoAccounts, normalizeLogin, roleHome } from "@/data/accounts";
import type { Order, Product } from "@/types";
import type { MillSku } from "@/data/supplier";

export type CartItem = { product: Product; qty: number };
export type WholesaleLine = { sku: MillSku; qty: number };
export type Dispute = {
  id: string;
  orderId: string;
  shop: string;
  reason: string;
  amount: number;
  status: "Hold" | "Open" | "Released" | "Merchant reply";
  party: string;
};

type Toast = { id: number; title: string; body?: string };

type Store = {
  role: Role;
  setRole: (r: Role) => void;
  session: Session | null;
  authReady: boolean;
  login: (login: string, password: string) => { ok: boolean; home?: string; error?: string };
  loginAs: (role: Role) => string;
  logout: () => void;
  lang: "en" | "ha";
  setLang: (l: "en" | "ha") => void;
  cart: CartItem[];
  addToCart: (p: Product, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;
  wholesaleCart: WholesaleLine[];
  addWholesale: (sku: MillSku, qty?: number) => void;
  setWholesaleQty: (id: string, qty: number) => void;
  clearWholesale: () => void;
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
  lastSplitId: string | null;
  setLastSplitId: (id: string | null) => void;
  disputes: Dispute[];
  openDispute: (d: Omit<Dispute, "id" | "status">) => string;
  setDisputeStatus: (id: string, status: Dispute["status"]) => void;
};

const Ctx = createContext<Store | null>(null);
const KEY = "kanohub.session";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [lang, setLangState] = useState<"en" | "ha">("en");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wholesaleCart, setWholesaleCart] = useState<WholesaleLine[]>([]);
  const [orders, setOrders] = useState<Order[]>(seedOrders);
  const [products, setProducts] = useState<Product[]>(seedProducts);
  const [walletCustomer, setWalletCustomer] = useState(85000);
  const [walletMerchant, setWalletMerchant] = useState(1240500);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [lastOrderId, setLastOrderId] = useState<string | null>("KH-2026-1842");
  const [loanStatus, setLoanStatus] = useState("Not started");
  const [lastSplitId, setLastSplitId] = useState<string | null>("SPLIT-2026-441");
  const [disputes, setDisputes] = useState<Dispute[]>([
    {
      id: "DSP-441",
      orderId: "KH-2026-1760",
      shop: "Arewa Beauty Store",
      reason: "Shade not as listed",
      amount: 25000,
      status: "Hold",
      party: "Maryam Yusuf",
    },
  ]);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(KEY);
      if (raw) setSession(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    try {
      const l = localStorage.getItem("kanohub.lang");
      if (l === "ha" || l === "en") setLangState(l);
    } catch {
      /* ignore */
    }
    setAuthReady(true);
  }, []);

  const setLang = (l: "en" | "ha") => {
    setLangState(l);
    try {
      localStorage.setItem("kanohub.lang", l);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    if (!authReady) return;
    if (session) sessionStorage.setItem(KEY, JSON.stringify(session));
    else sessionStorage.removeItem(KEY);
  }, [session, authReady]);

  const toast = (title: string, body?: string) => {
    const id = Date.now();
    setToasts((t) => [...t, { id, title, body }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3200);
  };

  const login = (loginId: string, password: string) => {
    const id = normalizeLogin(loginId);
    const found = demoAccounts.find((a) => normalizeLogin(a.login) === id && a.password === password);
    if (!found) return { ok: false as const, error: "Unknown demo account or wrong password. Use kano123." };
    setSession(found.session);
    toast("Signed in", found.session.name + " · " + found.session.title);
    return { ok: true as const, home: found.home };
  };

  const loginAs = (role: Role) => {
    const found = demoAccounts.find((a) => a.session.role === role);
    if (!found) return "/login";
    setSession(found.session);
    toast("Viewing as " + found.session.title, found.session.name);
    return roleHome(role);
  };

  const value = useMemo<Store>(
    () => ({
      role: session?.role || "customer",
      setRole: (r) => loginAs(r),
      session,
      authReady,
      login,
      loginAs,
      logout: () => {
        setSession(null);
        toast("Signed out");
      },
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
      wholesaleCart,
      addWholesale: (sku, qty) => {
        const n = qty ?? sku.moq;
        setWholesaleCart((c) => {
          const i = c.find((x) => x.sku.id === sku.id);
          if (i) return c.map((x) => (x.sku.id === sku.id ? { ...x, qty: x.qty + n } : x));
          return [...c, { sku, qty: n }];
        });
        toast("Added to wholesale cart", sku.name + " · MOQ " + sku.moq + " " + sku.unit);
      },
      setWholesaleQty: (id, qty) =>
        setWholesaleCart((c) => (qty <= 0 ? c.filter((x) => x.sku.id !== id) : c.map((x) => (x.sku.id === id ? { ...x, qty } : x)))),
      clearWholesale: () => setWholesaleCart([]),
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
      lastSplitId,
      setLastSplitId,
      disputes,
      openDispute: (d) => {
        const id = "DSP-" + Math.floor(500 + Math.random() * 400);
        setDisputes((x) => [{ ...d, id, status: "Hold" }, ...x]);
        setOrders((o) => o.map((ord) => (ord.id === d.orderId ? { ...ord, dispute: "Hold", hold: d.amount } : ord)));
        toast("Dispute hold", id + " · partner settlement paused (prototype)");
        return id;
      },
      setDisputeStatus: (id, status) => {
        setDisputes((x) => x.map((d) => (d.id === id ? { ...d, status } : d)));
        toast("Dispute " + status, id);
      },
    }),
    [session, authReady, lang, cart, wholesaleCart, orders, products, walletCustomer, walletMerchant, toasts, lastOrderId, loanStatus, lastSplitId, disputes]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const s = useContext(Ctx);
  if (!s) throw new Error("store");
  return s;
}
