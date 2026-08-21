"use client";
import { Footer, PublicHeader } from "@/components/chrome";
import { Button, Card } from "@/components/ui";

export default function Page() {
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-4xl font-extrabold">For agents</h1>
        <p className="mt-3 text-lg text-slate-700">
          Sadiya walks Kantin Kwari with a phone: onboard rumfa, take storefront photos, help listings, and cash-in/out
          through participating licensed partners.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {["Onboard stall with OTP 482910", "Cash assist (partner rails)", "Commission on live shops", "USSD for feature phones", "Cluster stall maps", "Hausa / English"].map((t) => (
            <Card key={t} className="p-4 font-semibold">
              {t}
            </Card>
          ))}
        </div>
        <Button href="/login" className="mt-8">
          Demo agent · agent@kanohub.ng
        </Button>
      </div>
      <Footer />
    </div>
  );
}
