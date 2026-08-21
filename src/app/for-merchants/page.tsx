"use client";
import { Footer, PublicHeader } from "@/components/chrome";
import { Button, Card } from "@/components/ui";

export default function Page() {
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-4xl font-extrabold">For merchants</h1>
        <p className="mt-3 text-lg text-slate-700">
          Aisha Fashion House runs shop, POS, inventory, riders and books in one place — including Hausa UI toggle.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {["Digital shop", "POS + stock auto-reduce", "Wallet settlement T+1", "Rider assign + track", "P&L / tax summary", "Credit-readiness 742 (indicative)", "B2B mill restock (bales / MOQ)", "Trade-credit request (partners)"].map(
            (t) => (
              <Card key={t} className="p-4 font-semibold">
                {t}
              </Card>
            )
          )}
        </div>
        <Button href="/register" className="mt-8">
          Start onboarding
        </Button>
        <Button href="/login" variant="outline" className="ml-2 mt-8">
          Demo merchant
        </Button>
      </div>
      <Footer />
    </div>
  );
}
