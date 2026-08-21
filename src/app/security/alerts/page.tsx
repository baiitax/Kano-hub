"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { socAlerts } from "@/data/intel";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="security">
      <PageHead title="Alert queue" />
      {socAlerts.map((a) => (
        <Card key={a.id} className="mb-3 p-4">
          <div className="flex flex-wrap justify-between gap-2">
            <div>
              <p className="font-bold">
                {a.id} · {a.cat}
              </p>
              <p className="text-sm text-slate-600">{a.detail}</p>
              <p className="text-xs text-slate-400">
                {a.entity} · {a.time}
              </p>
            </div>
            <Badge tone={a.sev === "Critical" ? "red" : a.sev === "High" ? "amber" : "slate"}>{a.sev}</Badge>
          </div>
          <div className="mt-3 flex gap-2">
            <Button size="sm" onClick={() => toast("Case opened", a.id)}>
              Investigate
            </Button>
            <Button size="sm" variant="outline" onClick={() => toast("Contained", a.id)}>
              Contain
            </Button>
            <Button size="sm" variant="ghost" href="/admin/risk">
              Risk console
            </Button>
          </div>
        </Card>
      ))}
    </PortalShell>
  );
}
