"use client";
import { AppShell } from "@/components/chrome";
import { Card, PageHead, ProtoNote, StatCard } from "@/components/ui";

export default function Page() {
  return (
    <AppShell kind="logistics">
      <PageHead title="Kano Express Logistics" />
      <ProtoNote />
      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Fleet" value="48 bikes" />
        <StatCard label="Drivers" value="61" />
        <StatCard label="Orders today" value="312" />
        <StatCard label="Revenue" value="₦1.2M" />
      </div>
      <Card className="mt-4 p-4 text-sm">
        Service areas: all 8 metro LGAs · Pricing ₦800–₦2,500 · Success rate 96.4%
      </Card>
    </AppShell>
  );
}
