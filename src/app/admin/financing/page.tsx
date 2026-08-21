"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Card, PageHead, ProtoNote } from "@/components/ui";
import { useStore } from "@/lib/store";

export default function Page() {
  const { loanStatus } = useStore();
  return (
    <AppShell kind="admin">
      <PageHead title="Loan administration" />
      <ProtoNote>Mock lending pipeline. No real credit decisions.</ProtoNote>
      <Card className="p-4 text-sm">
        <p>
          Aisha Fashion House · Working capital ₦750,000 · <Badge tone="amber">{loanStatus === "Not started" ? "Draft" : loanStatus}</Badge>
        </p>
        <p className="mt-2">Portfolio: 214 live · 8 in arrears · 2 default (illustrative)</p>
      </Card>
    </AppShell>
  );
}
