"use client";
import { AgentShell } from "@/components/agent-shell";
import { Card, PageHead } from "@/components/ui";
import Link from "next/link";

const links = [
  ["/agent/activity", "Tape"],
  ["/agent/listings", "Listings"],
  ["/agent/visits", "Visits"],
  ["/agent/commissions", "Commission"],
  ["/agent/ussd", "USSD"],
  ["/markets", "Clusters"],
  ["/settings", "Settings"],
  ["/support", "Support"],
];

export default function Page() {
  return (
    <AgentShell>
      <PageHead title="More" />
      <div className="grid grid-cols-2 gap-3">
        {links.map(([h, l]) => (
          <Link key={h} href={h}>
            <Card className="p-4 font-semibold">{l}</Card>
          </Link>
        ))}
      </div>
    </AgentShell>
  );
}
