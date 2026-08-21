"use client";
import Link from "next/link";
import { Logo } from "@/components/chrome";
import { RiderDock } from "@/components/docks";
import { Badge, Card, PageHead } from "@/components/ui";
import { riderTape } from "@/data/fleet";

export default function Page() {
  return (
    <div className="min-h-screen pb-28">
      <div className="glass-nav px-4 py-3">
        <Logo />
      </div>
      <div className="mx-auto max-w-lg px-3 py-4">
        <PageHead title="Rider tape" />
        {riderTape.map((e) => (
          <Card key={e.t + e.text} className="mb-2 p-3">
            <Badge>{e.type}</Badge> <span className="font-mono text-xs">{e.t}</span>
            <p className="mt-1 text-sm">{e.text}</p>
          </Card>
        ))}
        <div className="mt-4 grid gap-2 text-sm font-semibold text-emerald-800">
          <Link href="/logistics/performance">Performance →</Link>
          <Link href="/logistics/vehicle">Vehicle KE-4412 →</Link>
          <Link href="/logistics/company">Company HQ →</Link>
        </div>
      </div>
      <RiderDock />
    </div>
  );
}
