"use client";
import { Footer, PublicHeader } from "@/components/chrome";
import { Button, Card } from "@/components/ui";

export default function Page() {
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-4xl font-extrabold">For banks, MFBs & government</h1>
        <p className="mt-3 text-slate-700">
          KanoHub does not claim a banking or lending licence. Desks show how licensed partners could underwrite from
          verified sales, cash-flow and KYC — then decide themselves.
        </p>
        <Card className="mt-4 p-4">Bank desk: NUBAN, NIP, settlements, treasury, AML.</Card>
        <Card className="mt-3 p-4">Loan point: pipeline, PAR30, collections officers.</Card>
        <Card className="mt-3 p-4">Executive: GMV, LGA penetration, jobs modelled, board pack.</Card>
        <Button href="/login" className="mt-8">
          Open partner demo
        </Button>
      </div>
      <Footer />
    </div>
  );
}
