"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Card, PageHead } from "@/components/ui";
import { opsTape } from "@/data/ops";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Live tape" sub="Commerce · pay · KYC · logistics · SOC" />
      {opsTape.map((e) => (
        <Card key={e.t + e.text} className="mb-2 p-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-emerald-800">{e.t}</span>
            <Badge>{e.type}</Badge>
          </div>
          <p className="mt-1 text-sm">{e.text}</p>
        </Card>
      ))}
    </AppShell>
  );
}
