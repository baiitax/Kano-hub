"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, PageHead } from "@/components/ui";
import { naira, transactions } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { walletMerchant, toast } = useStore();
  return (
    <AppShell>
      <PageHead title="Merchant wallet" />
      <Card className="bg-emerald-800 p-6 text-white">
        <p className="text-sm text-emerald-100">Available balance</p>
        <p className="text-4xl font-extrabold">{naira(walletMerchant)}</p>
        <p className="text-sm">Pending ₦42,000</p>
        <div className="mt-4 flex gap-2">
          <Button className="bg-white text-emerald-900 hover:bg-emerald-50" onClick={() => toast("Withdrawal requested")}>
            Withdraw
          </Button>
          <Button variant="outline" className="border-white/40 text-white" onClick={() => toast("Transfer started")}>
            Transfer
          </Button>
        </div>
      </Card>
      <Card className="mt-4 divide-y">
        {transactions.map((t) => (
          <div key={t.id} className="flex justify-between p-3 text-sm">
            <span>{t.type}</span>
            <span>{naira(t.amount)}</span>
          </div>
        ))}
      </Card>
    </AppShell>
  );
}
