"use client";
import { Logo } from "@/components/chrome";
import { RiderDock } from "@/components/docks";
import { Card, PageHead, StatCard } from "@/components/ui";

export default function Page() {
  return (
    <div className="min-h-screen pb-28">
      <div className="glass-nav px-4 py-3">
        <Logo />
      </div>
      <div className="mx-auto max-w-lg px-3 py-4">
        <PageHead title="Performance" sub="30-day · Abdullahi Musa" />
        <div className="grid grid-cols-2 gap-3">
          <StatCard label="On-time" value="97.4%" />
          <StatCard label="Rating" value="4.9" />
          <StatCard label="Acceptance" value="91%" />
          <StatCard label="Cancels" value="1.2%" />
        </div>
        <Card className="mt-4 p-4 text-sm">
          Peak hours: Fri 16:00–20:00. Strongest LGA: Nassarawa. COD photo POD 100% last 7 days.
        </Card>
      </div>
      <RiderDock />
    </div>
  );
}
