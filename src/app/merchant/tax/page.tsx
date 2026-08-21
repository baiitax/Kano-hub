"use client";
import { AppShell } from "@/components/chrome";
import { Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { naira } from "@/data/mock";

export default function Page() {
  return (
    <AppShell>
      <PageHead title="Tax summary" sub="Indicative — confirm with your accountant" />
      <ProtoNote>Not tax advice. Figures follow sales and expenses recorded in this shop OS.</ProtoNote>
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Taxable sales (Aug)" value={naira(4280500)} />
        <StatCard label="VAT output (est. 7.5%)" value={naira(321038)} />
        <StatCard label="Withholding noted" value={naira(0)} />
      </div>
      <Card className="mt-4 p-4 text-sm">
        File through FIRS / Kano State as required. KanoHub does not remit tax on your behalf.
      </Card>
    </AppShell>
  );
}
