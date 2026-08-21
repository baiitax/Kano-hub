"use client";
import { Logo } from "@/components/chrome";
import { RiderDock } from "@/components/docks";
import { Badge, Card, PageHead } from "@/components/ui";

export default function Page() {
  return (
    <div className="min-h-screen pb-28">
      <div className="glass-nav px-4 py-3">
        <Logo />
      </div>
      <div className="mx-auto max-w-lg px-3 py-4">
        <PageHead title="Vehicle" />
        <Card className="p-4 text-sm">
          <p className="font-bold">KE-4412 · Bajaj Boxer</p>
          <p>Plate: KNE-441-EX</p>
          <p>Insurance: third-party · expires 12 Nov 2026</p>
          <p>
            Fitness: <Badge tone="green">Ok</Badge>
          </p>
          <p className="mt-2">Last service 04 Aug · 1,240 km since.</p>
        </Card>
      </div>
      <RiderDock />
    </div>
  );
}
