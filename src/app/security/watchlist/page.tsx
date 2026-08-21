"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Card, PageHead } from "@/components/ui";
import { watchlist } from "@/data/intel";

export default function Page() {
  return (
    <PortalShell kind="security">
      <PageHead title="Watchlist" />
      {watchlist.map((w) => (
        <Card key={w.id} className="mb-2 flex justify-between p-4 text-sm">
          <div>
            <p className="font-semibold">
              {w.type} · {w.value}
            </p>
            <p className="text-slate-500">{w.reason}</p>
          </div>
          <Badge tone={w.risk > 80 ? "red" : "amber"}>Risk {w.risk}</Badge>
        </Card>
      ))}
    </PortalShell>
  );
}
