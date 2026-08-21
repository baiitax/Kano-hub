"use client";

import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, Modal, PageHead } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";
import { useState } from "react";
import type { Order } from "@/types";

export default function Orders() {
  const { orders, updateOrder, toast } = useStore();
  const [tab, setTab] = useState("All");
  const [sel, setSel] = useState<Order | null>(null);
  const list = tab === "All" ? orders : orders.filter((o) => o.status === tab || (tab === "New" && o.status === "New"));
  return (
    <AppShell>
      <PageHead title="Orders" sub="Accept, process and assign delivery" />
      <div className="-mx-1 mb-4 flex gap-2 overflow-x-auto px-1 pb-1">
        {["All", "New", "Processing", "Ready", "Out for Delivery", "Completed", "Cancelled"].map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium ${tab === t ? "bg-emerald-700 text-white" : "glass"}`}>
            {t}
          </button>
        ))}
      </div>
      <div className="space-y-3 lg:hidden">
        {list.map((o) => (
          <Card key={o.id} className="p-4">
            <div className="flex justify-between gap-2">
              <p className="font-semibold">{o.customer}</p>
              <Badge tone="amber">{o.status}</Badge>
            </div>
            <p className="text-xs text-slate-500">{o.id} · {o.paymentStatus}</p>
            <p className="mt-2 text-lg font-bold tabular-nums">{naira(o.amount)}</p>
            <Button className="mt-3 w-full min-h-11" size="sm" onClick={() => setSel(o)}>
              Open order
            </Button>
          </Card>
        ))}
      </div>
      <Card className="hidden overflow-auto lg:block">
        <table className="w-full text-sm">
          <thead className="text-left text-xs">
            <tr>
              <th className="p-3">Order</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {list.map((o) => (
              <tr key={o.id} className="border-t border-white/40">
                <td className="p-3 font-medium">{o.id}</td>
                <td>{o.customer}</td>
                <td className="tabular-nums">{naira(o.amount)}</td>
                <td>{o.paymentStatus}</td>
                <td>
                  <Badge tone="amber">{o.status}</Badge>
                </td>
                <td>
                  <Button size="sm" variant="ghost" onClick={() => setSel(o)}>
                    Open
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Modal open={!!sel} onClose={() => setSel(null)} title={sel?.id || ""}>
        {sel && (
          <div className="space-y-2 text-sm">
            <p>
              {sel.customer} · {sel.address}
            </p>
            {sel.items.map((i) => (
              <p key={i.productId}>
                {i.name} × {i.qty}
              </p>
            ))}
            <p className="font-bold">{naira(sel.amount)}</p>
            <div className="flex flex-wrap gap-2">
              {["Accept", "Process", "Mark ready", "Assign delivery", "Complete", "Refund"].map((a) => (
                <Button
                  key={a}
                  size="sm"
                  variant={a === "Refund" ? "danger" : "outline"}
                  onClick={() => {
                    const map: Record<string, string> = {
                      Accept: "Processing",
                      Process: "Processing",
                      "Mark ready": "Ready",
                      "Assign delivery": "Out for Delivery",
                      Complete: "Delivered",
                      Refund: "Cancelled",
                    };
                    updateOrder(sel.id, { status: map[a] });
                    toast(a + " · " + sel.id);
                    setSel(null);
                  }}
                >
                  {a}
                </Button>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </AppShell>
  );
}
