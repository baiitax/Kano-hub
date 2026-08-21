"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Button, Card, Input, PageHead } from "@/components/ui";
import { watchlist } from "@/data/intel";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="security">
      <PageHead title="Watchlist" sub="Devices · phones · merchants" />
      <Card className="mb-4 flex gap-2 p-3">
        <Input placeholder="Add entity (masked)" className="flex-1" />
        <Button onClick={() => toast("Entity queued for dual control")}>Add</Button>
      </Card>
      {watchlist.map((w) => (
        <Card key={w.id} className="mb-2 flex justify-between p-4 text-sm">
          <div>
            <p className="font-semibold">
              {w.id} · {w.type} · {w.value}
            </p>
            <p className="text-slate-500">{w.reason}</p>
          </div>
          <Badge tone={w.risk > 80 ? "red" : "amber"}>Risk {w.risk}</Badge>
        </Card>
      ))}
    </PortalShell>
  );
}
