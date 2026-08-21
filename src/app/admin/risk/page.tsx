"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Card, PageHead, ProtoNote } from "@/components/ui";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Risk / fraud" />
      <ProtoNote>Simulated alerts.</ProtoNote>
      {[
        ["Unusual order velocity", "Medium", "Watch"],
        ["Multiple accounts same device", "Low", "Closed"],
        ["Chargeback pattern", "High", "Investigating"],
      ].map(([t, s, st]) => (
        <Card key={t} className="mb-2 flex justify-between p-3 text-sm">
          <span>{t}</span>
          <span>
            <Badge tone={s === "High" ? "red" : "amber"}>{s}</Badge> {st}
          </span>
        </Card>
      ))}
    </AppShell>
  );
}
