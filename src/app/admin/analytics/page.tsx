"use client";
import { AppShell } from "@/components/chrome";
import { PageHead, ProtoNote, StatCard } from "@/components/ui";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Platform analytics" />
      <ProtoNote />
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Retention" value="64%" />
        <StatCard label="AOV" value="₦18,400" />
        <StatCard label="Merchant churn" value="2.1%" />
        <StatCard label="CAC (illustrative)" value="₦1,200" />
        <StatCard label="LTV (illustrative)" value="₦86,000" />
        <StatCard label="Activation" value="71%" />
      </div>
    </AppShell>
  );
}
