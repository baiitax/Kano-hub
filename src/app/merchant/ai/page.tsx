"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, Input, PageHead, ProtoNote } from "@/components/ui";
import { useState } from "react";

const answers: Record<string, string> = {
  default:
    "This month you sold ₦4,280,500 across 284 orders. Fashion is 62% of revenue. Reorder sneakers and watch low-stock Indomie if you also trade groceries. Friday remains your strongest day.",
};

export default function Page() {
  const [q, setQ] = useState("");
  const [msgs, setMsgs] = useState<{ r: "you" | "ai"; t: string }[]>([
    { r: "ai", t: "Ask about sales, stock or profit. Prototype responses only." },
  ]);
  const ask = (text: string) => {
    setMsgs((m) => [...m, { r: "you", t: text }, { r: "ai", t: answers.default }]);
    setQ("");
  };
  return (
    <AppShell>
      <PageHead title="Kano Business AI" />
      <ProtoNote>AI Assistant — Prototype. Mock responses.</ProtoNote>
      <Card className="flex h-[480px] flex-col p-4">
        <div className="flex-1 space-y-2 overflow-auto">
          {msgs.map((m, i) => (
            <div key={i} className={`max-w-[80%] rounded-xl px-3 py-2 text-sm ${m.r === "ai" ? "bg-slate-100" : "ml-auto bg-emerald-700 text-white"}`}>
              {m.t}
            </div>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="How much did I sell this month?" />
          <Button onClick={() => ask(q || "How much did I sell this month?")}>Send</Button>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {["Best-selling products?", "What should I reorder?", "Why did profit decrease?"].map((s) => (
            <button key={s} className="rounded-full border px-2 py-1 text-xs" onClick={() => ask(s)}>
              {s}
            </button>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
