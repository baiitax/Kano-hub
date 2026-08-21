"use client";
import { Footer, PublicHeader } from "@/components/chrome";
import { Button, Card } from "@/components/ui";

export default function Page() {
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-4xl font-extrabold">Pricing (illustrative)</h1>
        <p className="mt-2 text-slate-600">Prototype commercial model — not a live tariff.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Starter", "₦0 / mo", "Shop + 50 products + POS. Partner pay-in fees apply."],
            ["Business", "₦4,500 / mo", "Unlimited SKUs, staff PINs, reports, logistics request."],
            ["Enterprise", "Talk to us", "Wholesale, multi-outlet, API, dedicated ops."],
          ].map(([t, p, b]) => (
            <Card key={t} className="p-6">
              <p className="text-sm font-semibold text-emerald-800">{t}</p>
              <p className="mt-2 text-3xl font-extrabold">{p}</p>
              <p className="mt-3 text-sm text-slate-600">{b}</p>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-500">Take rate modelled ~1.8% on GMV via payment partners. Financing priced by lenders.</p>
        <Button href="/register" className="mt-6">
          Create business
        </Button>
      </div>
      <Footer />
    </div>
  );
}
