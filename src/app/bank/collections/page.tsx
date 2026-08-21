"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Button, Card, PageHead, StatCard } from "@/components/ui";
import { loanBook } from "@/data/intel";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="bank">
      <PageHead title="Collections" />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Due today" value="₦312,000" />
        <StatCard label="Collected" value="₦265,000" />
        <StatCard label="PAR30" value="2.4%" />
      </div>
      {loanBook.map((l) => (
        <Card key={l.id} className="mt-3 flex flex-wrap items-center justify-between gap-2 p-4 text-sm">
          <span>
            {l.id} · {l.merchant} · {naira(l.outstanding)} · {l.dpd} DPD
          </span>
          <div className="flex items-center gap-2">
            <Badge tone={l.status === "Arrears" ? "red" : l.status === "Watch" ? "amber" : "green"}>{l.status}</Badge>
            <Button size="sm" variant="outline" onClick={() => toast("Reminder sent", l.id)}>
              Remind
            </Button>
          </div>
        </Card>
      ))}
    </PortalShell>
  );
}
