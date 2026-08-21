"use client";
import { Footer, PublicHeader } from "@/components/chrome";
import { Card } from "@/components/ui";

export default function Page() {
  return (
    <div>
      <PublicHeader />
      <article className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-sm font-semibold uppercase text-emerald-800">Company</p>
        <h1 className="text-4xl font-extrabold">About KanoHub</h1>
        <p className="mt-4 text-lg text-slate-700">
          Kano’s businesses should not need ten apps to sell, collect, deliver and keep books. KanoHub is a prototype of
          one operating system for shops, riders, wholesalers, customers and — later — licensed financial partners.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            ["Where", "Built around Kano State LGAs: Municipal, Nassarawa, Fagge, Dala, Gwale, Tarauni, Ungogo, Kumbotso."],
            ["Who", "Informal traders, fashion houses, electronics stalls, food vendors, pharmacies, riders."],
            ["What we are not", "Not a licensed bank, lender, payment institution or insurer."],
            ["What this build is", "A high-fidelity prototype for investors, government and partners — illustrative data."],
          ].map(([h, b]) => (
            <Card key={h} className="p-4">
              <p className="font-bold">{h}</p>
              <p className="mt-1 text-sm text-slate-600">{b}</p>
            </Card>
          ))}
        </div>
      </article>
      <Footer />
    </div>
  );
}
