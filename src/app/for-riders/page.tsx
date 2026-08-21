"use client";
import { Footer, PublicHeader } from "@/components/chrome";
import { Button, Card } from "@/components/ui";

export default function Page() {
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-4xl font-extrabold">For riders & fleets</h1>
        <p className="mt-3 text-slate-700">Abdullahi Musa runs jobs on the rider app. Kano Express HQ dispatches the fleet.</p>
        <Card className="mt-4 p-4">Rider: accept, map, POD, earnings, vehicle KE-4412.</Card>
        <Card className="mt-3 p-4">HQ: zones, SLA, payouts, incidents, pricing bands ₦800–₦2,500.</Card>
        <Button href="/login" className="mt-8">
          Demo rider login
        </Button>
      </div>
      <Footer />
    </div>
  );
}
