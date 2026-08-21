"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { socCases } from "@/data/soc";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="security">
      <PageHead title="Cases" sub="War room · SLA clocks · dual control" />
      {socCases.map((c) => (
        <Card key={c.id} className="mb-3 p-4">
          <div className="flex flex-wrap justify-between gap-2">
            <div>
              <p className="font-bold text-lg">
                {c.id} · {c.title}
              </p>
              <p className="text-sm text-slate-600">
                Alert {c.alert} · Owner {c.owner} · Opened {c.opened} · SLA {c.sla}
              </p>
            </div>
            <div className="text-right">
              <Badge tone={c.sev === "Critical" ? "red" : "amber"}>{c.sev}</Badge>
              <p className="mt-1 text-xs font-semibold">{c.status}</p>
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <Button size="sm" onClick={() => toast("Note added to " + c.id)}>
              Add note
            </Button>
            <Button size="sm" variant="outline" onClick={() => toast("Escalated", c.id)}>
              Escalate
            </Button>
            <Button size="sm" variant="ghost" href="/security/playbooks">
              Run playbook
            </Button>
          </div>
        </Card>
      ))}
    </PortalShell>
  );
}
