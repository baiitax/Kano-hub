"use client";
import { SupplierShell } from "@/components/supplier-shell";
import { Button, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <SupplierShell>
      <PageHead title="Mill settlements" sub="Partner wallet — not a KanoHub deposit account" />
      <ProtoNote>Powered by participating licensed financial partners.</ProtoNote>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        <StatCard label="Available" value={naira(4820000)} hint="T+1 mill GMV" />
        <StatCard label="Pending" value={naira(1260000)} />
        <StatCard label="Last payout" value={naira(1840000)} hint="Sterling ****4418 · 19 Aug" />
      </div>
      <Card className="mt-4 space-y-3 p-4 text-sm">
        <p>Payouts go to the mill’s partner account. KanoHub does not hold customer or mill deposits as a bank.</p>
        <Button onClick={() => toast("Payout requested", "Queued with participating partner")}>Request payout</Button>
      </Card>
    </SupplierShell>
  );
}
