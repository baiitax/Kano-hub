"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, PageHead, ProtoNote } from "@/components/ui";
import { naira, transactions } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell>
      <PageHead title="Business banking" />
      <ProtoNote>Powered by participating financial partners. KanoHub is not a licensed bank.</ProtoNote>
      <Card className="p-6">
        <p className="text-sm text-slate-500">Business account number</p>
        <p className="text-2xl font-bold tracking-widest">2088 4412 0193</p>
        <p className="mt-2 text-3xl font-extrabold">{naira(1240500)}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Transfer money", "Pay supplier", "Pay bills", "Withdraw", "Deposit", "Statements"].map((a) => (
            <Button key={a} variant="outline" size="sm" onClick={() => toast(a)}>
              {a}
            </Button>
          ))}
        </div>
      </Card>
      <Card className="mt-4 divide-y">
        {transactions.map((t) => (
          <div key={t.id} className="flex justify-between p-3 text-sm">
            <span>{t.party}</span>
            <span>{naira(t.amount)}</span>
          </div>
        ))}
      </Card>
    </AppShell>
  );
}
