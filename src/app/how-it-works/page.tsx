"use client";
import { Footer, PublicHeader } from "@/components/chrome";
import { Button, Card } from "@/components/ui";

const steps = [
  ["1. Create your business", "Register with phone OTP. Pick LGA, category, informal or company."],
  ["2. Verify", "Phone, ID and documents. Verified badge on your shop."],
  ["3. Add products & POS", "Stock, cost, reorder. Sell at the counter or online."],
  ["4. Collect", "Wallet, transfer, card via licensed payment partners."],
  ["5. Deliver", "Kano Express or co-op riders. Customer tracks live."],
  ["6. Books & profile", "Sales hit inventory, wallet, P&L and credit-readiness."],
  ["7. Grow", "Wholesale restock, loyalty, partner financing offers (not guaranteed)."],
];

export default function Page() {
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-4xl font-extrabold">How it works</h1>
        <p className="mt-2 text-slate-600">One loop: sell → collect → deliver → understand → grow.</p>
        <div className="mt-8 space-y-3">
          {steps.map(([h, b]) => (
            <Card key={h} className="p-5">
              <p className="font-bold">{h}</p>
              <p className="text-sm text-slate-600">{b}</p>
            </Card>
          ))}
        </div>
        <Button href="/register" className="mt-8">
          Create your business
        </Button>
      </div>
      <Footer />
    </div>
  );
}
