"use client";
import { AgentShell } from "@/components/agent-shell";
import { Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { naira } from "@/data/mock";

export default function Page() {
  return (
    <AgentShell>
      <PageHead title="Commission" sub="Onboarding + cash-assist + listings" />
      <ProtoNote>Payouts via participating licensed partners. Not a salary from a bank.</ProtoNote>
      <div className="grid grid-cols-2 gap-3">
        <StatCard label="MTD" value={naira(186400)} />
        <StatCard label="Last payout" value={naira(142000)} hint="19 Aug · partner wallet" />
      </div>
      <Card className="mt-4 p-4 text-sm">
        <p>Onboard live shop ₦2,500 · cash-in 0.4% · listing help ₦400.</p>
      </Card>
    </AgentShell>
  );
}
