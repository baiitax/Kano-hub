"use client";
import { PortalShell } from "@/components/portals";
import { Button, Card, PageHead, StatCard } from "@/components/ui";
import { loanBook } from "@/data/intel";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="loans">
      <PageHead title="Collections" />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Due today" value="₦312,000" />
        <StatCard label="Collected" value="₦265,000" />
        <StatCard label="Broken PTP" value="1" />
      </div>
      {loanBook
        .filter((l) => l.dpd > 0)
        .map((l) => (
          <Card key={l.id} className="mt-3 flex flex-wrap items-center justify-between gap-2 p-4 text-sm">
            <span>
              {l.merchant} · {l.dpd} DPD · {naira(l.outstanding)}
            </span>
            <Button size="sm" onClick={() => toast("SMS reminder queued", l.id)}>
              Remind
            </Button>
          </Card>
        ))}
    </PortalShell>
  );
}
