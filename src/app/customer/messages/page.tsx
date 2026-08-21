"use client";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { Card } from "@/components/ui";
import { messages } from "@/data/customer-ops";

export default function Page() {
  return (
    <div className="min-h-screen pb-24">
      <PublicHeader />
      <div className="mx-auto max-w-xl px-3 py-6">
        <h1 className="text-2xl font-extrabold">Messages</h1>
        {messages.map((m) => (
          <Card key={m.id} className="mt-3 p-4">
            <div className="flex justify-between text-sm">
              <p className="font-semibold">{m.from}</p>
              <span className="text-slate-400">{m.when}</span>
            </div>
            <p className="text-sm text-slate-600">{m.preview}</p>
          </Card>
        ))}
      </div>
      <CustomerBottom />
    </div>
  );
}
