"use client";
import { Footer, PublicHeader } from "@/components/chrome";
import { Card } from "@/components/ui";

export default function Page() {
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-4xl font-extrabold">Press & briefings</h1>
        <p className="mt-2 text-slate-600">Illustrative notes for media and government packs.</p>
        {[
          ["Aug 2026", "Prototype shown: one OS for Kano SMEs — marketplace through credit-readiness."],
          ["Data", "GMV ₦4.82B and 12,840 merchants are modelled, not census."],
          ["Contact", "hello@kanohub.ng"],
        ].map(([h, b]) => (
          <Card key={h} className="mt-3 p-4">
            <p className="font-bold">{h}</p>
            <p className="text-sm text-slate-600">{b}</p>
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
}
