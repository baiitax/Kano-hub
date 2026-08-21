"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, PageHead } from "@/components/ui";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

const steps = ["Application submitted", "Under review", "Documents requested", "Approved", "Disbursed", "Repayment", "Completed"];

export default function Page() {
  const { loanStatus } = useStore();
  const idx = Math.max(0, steps.indexOf(loanStatus === "Not started" ? "Application submitted" : loanStatus));
  return (
    <AppShell>
      <PageHead title="Financing status" />
      <Card className="p-6">
        {steps.map((s, i) => (
          <p key={s} className={i <= idx ? "font-semibold text-emerald-800" : "text-slate-400"}>
            {i <= idx ? "●" : "○"} {s}
          </p>
        ))}
      </Card>
      <Card className="mt-4 p-6">
        <h2 className="font-bold">Repayment</h2>
        <p>Outstanding {naira(750000)}</p>
        <p>Next payment 15 Sep 2026 · {naira(265000)}</p>
        <Button className="mt-3" href="/merchant/wallet">
          Pay now
        </Button>
      </Card>
    </AppShell>
  );
}
