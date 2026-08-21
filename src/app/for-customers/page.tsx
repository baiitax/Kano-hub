"use client";
import { Footer, PublicHeader } from "@/components/chrome";
import { Button, Card } from "@/components/ui";

export default function Page() {
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-4xl font-extrabold">For customers</h1>
        <p className="mt-3 text-slate-700">Shop verified Kano businesses. Pay wallet or partner rails. Track the rider.</p>
        {["Search Fashion, Phones, Food across LGAs", "Verified shops and purchase reviews", "Wallet + order hub + loyalty VIP", "Live map on KH-2026-1842"].map((t) => (
          <Card key={t} className="mt-3 p-4">
            {t}
          </Card>
        ))}
        <Button href="/marketplace" className="mt-8">
          Open marketplace
        </Button>
      </div>
      <Footer />
    </div>
  );
}
