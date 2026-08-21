"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { kycQueue } from "@/data/bank";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="bank">
      <PageHead title="KYC / tiers" sub="Tier 1–3 mapping for partner rails" />
      {kycQueue.map((k) => (
        <Card key={k.merchant} className="mb-3 flex flex-wrap items-center justify-between gap-2 p-4 text-sm">
          <div>
            <p className="font-semibold">{k.merchant}</p>
            <p className="text-slate-500">
              {k.tier} · Gap: {k.gap}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge tone={k.risk === "High" ? "red" : k.risk === "Med" ? "amber" : "green"}>{k.risk}</Badge>
            <Button size="sm" variant="outline" onClick={() => toast("Docs requested", k.merchant)}>
              Request docs
            </Button>
          </div>
        </Card>
      ))}
    </PortalShell>
  );
}
