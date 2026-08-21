"use client";
import { AppShell } from "@/components/chrome";
import { PageHead, ProtoNote, StatCard } from "@/components/ui";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Payments" />
      <ProtoNote>Payment services provided through licensed payment partners.</ProtoNote>
      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Volume" value="₦4.1B" />
        <StatCard label="Success rate" value="98.2%" />
        <StatCard label="Failed" value="1.1%" />
        <StatCard label="Refunds" value="₦12.4M" />
      </div>
    </AppShell>
  );
}
