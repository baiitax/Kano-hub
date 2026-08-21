"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, PageHead, StatCard } from "@/components/ui";
import { naira, transactions } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { walletMerchant, toast } = useStore();
  return (
    <AppShell>
      <PageHead title="Merchant wallet" sub="Available vs pending · T+1 settlement" />
      <Card className="bg-emerald-800 p-6 text-white">
        <p className="text-sm text-emerald-100">Available balance</p>
        <p className="text-4xl font-extrabold">{naira(walletMerchant)}</p>
        <p className="text-sm">Pending ₦42,000 · Next window 22:00 WAT</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button className="bg-white text-emerald-900 hover:bg-emerald-50" onClick={() => toast("Withdrawal requested")}>
            Withdraw
          </Button>
          <Button variant="outline" className="border-white/40 text-white" onClick={() => toast("Transfer started")}>
            Transfer
          </Button>
          <Button variant="outline" className="border-white/40 text-white" href="/merchant/settlement">
            Settlement calendar
          </Button>
          <Button variant="outline" className="border-white/40 text-white" href="/merchant/credit-pack">
            Credit pack
          </Button>
          <Button variant="outline" className="border-white/40 text-white" href="/merchant/banking">
            Business banking
          </Button>
        </div>
      </Card>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <StatCard label="In today" value={naira(151000)} />
        <StatCard label="Out today" value={naira(0)} />
        <StatCard label="Fees (est.)" value={naira(2718)} />
      </div>
      <Card className="mt-4 divide-y divide-white/40">
        {transactions.map((t) => (
          <div key={t.id} className="flex justify-between p-3 text-sm">
            <span>
              {t.type} · {t.party}
            </span>
            <span className="font-semibold">{naira(t.amount)}</span>
          </div>
        ))}
      </Card>
    </AppShell>
  );
}
