"use client";
import { PortalShell } from "@/components/portals";
import { Button, Card, PageHead } from "@/components/ui";
import { useStore } from "@/lib/store";

const books = [
  ["ATO", "Force logout, step-up OTP, freeze wallet 30 min"],
  ["Mule merchant", "Pause payouts, queue KYC, notify ops"],
  ["Card testing", "Block BIN, notify payment partner"],
  ["Logistics collusion", "Hold COD, dual-control release"],
];

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="security">
      <PageHead title="Response playbooks" />
      {books.map(([t, b]) => (
        <Card key={t} className="mb-2 flex items-center justify-between p-4 text-sm">
          <div>
            <p className="font-semibold">{t}</p>
            <p className="text-slate-600">{b}</p>
          </div>
          <Button size="sm" onClick={() => toast("Playbook armed", t)}>
            Arm
          </Button>
        </Card>
      ))}
    </PortalShell>
  );
}
