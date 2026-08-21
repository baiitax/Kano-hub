"use client";
import { PortalShell } from "@/components/portals";
import { Button, Card, PageHead } from "@/components/ui";
import { useStore } from "@/lib/store";

const books = [
  { id: "PB-ATO", title: "Account takeover", steps: "Force logout → step-up OTP → freeze wallet 30m → notify customer SMS" },
  { id: "PB-MULE", title: "Mule merchant", steps: "Pause payouts → queue KYC → dual-control release → SOC case" },
  { id: "PB-CARD", title: "Card testing", steps: "Block BIN → notify payment partner → raise chargeback watch" },
  { id: "PB-COD", title: "Logistics collusion", steps: "Hold COD → require photo POD → dispatch supervisor" },
  { id: "PB-BOT", title: "Marketplace scrape", steps: "WAF challenge → rate-limit /24 → ban ASN if repeat" },
];

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="security">
      <PageHead title="Response playbooks" />
      {books.map((b) => (
        <Card key={b.id} className="mb-3 p-4">
          <p className="font-bold">
            {b.id} · {b.title}
          </p>
          <p className="mt-1 text-sm text-slate-600">{b.steps}</p>
          <Button className="mt-3" size="sm" onClick={() => toast("Playbook armed", b.id)}>
            Arm
          </Button>
        </Card>
      ))}
    </PortalShell>
  );
}
