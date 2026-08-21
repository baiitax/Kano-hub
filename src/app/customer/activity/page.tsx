"use client";
import { CustomerBottom, PublicHeader } from "@/components/chrome";
import { Badge, Card } from "@/components/ui";
import { customerTape } from "@/data/customer-ops";

export default function Page() {
  return (
    <div className="min-h-screen pb-24">
      <PublicHeader />
      <div className="mx-auto max-w-xl px-3 py-6">
        <h1 className="text-2xl font-extrabold">Activity</h1>
        {customerTape.map((a) => (
          <Card key={a.t + a.text} className="mt-2 p-4">
            <Badge>{a.type}</Badge> <span className="font-mono text-xs">{a.t}</span>
            <p className="mt-1 text-sm">{a.text}</p>
          </Card>
        ))}
      </div>
      <CustomerBottom />
    </div>
  );
}
