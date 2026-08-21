"use client";
import { PublicHeader } from "@/components/chrome";
import { Badge, Card } from "@/components/ui";
import { notifications } from "@/data/mock";
import { useState } from "react";

export default function Page() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? notifications : notifications.filter((n) => n.cat === cat);
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-2xl px-4 py-8">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <div className="mt-3 flex flex-wrap gap-2">
          {["All", "Orders", "Payments", "Inventory", "Finance", "Security", "Marketing", "System"].map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full px-3 py-1 text-xs ${cat === c ? "bg-emerald-700 text-white" : "border"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {list.map((n) => (
            <Card key={n.id} className="p-4">
              <Badge>{n.cat}</Badge>
              <p className="font-semibold">{n.title}</p>
              <p className="text-sm text-slate-600">{n.body}</p>
              <p className="text-xs text-slate-400">{n.time}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
