"use client";
import { AppShell } from "@/components/chrome";
import { PageHead, StatCard } from "@/components/ui";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Logistics admin" />
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Active riders" value="1,204" />
        <StatCard label="Success rate" value="96.4%" />
        <StatCard label="Avg time" value="54 min" />
      </div>
    </AppShell>
  );
}
