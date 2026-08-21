"use client";
import { Footer, PublicHeader } from "@/components/chrome";
import { Card } from "@/components/ui";

export default function Page() {
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-4xl font-extrabold">Trust & safety</h1>
        <div className="mt-6 space-y-3">
          {[
            ["Verified shops", "Phone, ID, address, documents. Badge on product pages."],
            ["Payments", "Wallet and cards through licensed partners. We are not a bank."],
            ["SOC", "ATO, velocity, mule-device rules. Simulated in this prototype."],
            ["Disputes", "Customer vs merchant vs rider cases with SLA."],
            ["Data", "Export / delete in settings. Consent toggles."],
          ].map(([h, b]) => (
            <Card key={h} className="p-4">
              <p className="font-bold">{h}</p>
              <p className="text-sm text-slate-600">{b}</p>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
