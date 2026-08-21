"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { socAlerts } from "@/data/intel";
import { useStore } from "@/lib/store";
import { useState } from "react";

export default function Page() {
  const { toast } = useStore();
  const [sev, setSev] = useState("All");
  const list = sev === "All" ? socAlerts : socAlerts.filter((a) => a.sev === sev);
  return (
    <PortalShell kind="security">
      <PageHead title="Alert queue" sub="Triage · assign · contain" />
      <div className="mb-3 flex gap-2 overflow-auto">
        {["All", "Critical", "High", "Medium", "Low"].map((s) => (
          <button key={s} onClick={() => setSev(s)} className={`shrink-0 rounded-full px-3 py-2 text-xs font-semibold ${sev === s ? "bg-emerald-700 text-white" : "glass"}`}>
            {s}
          </button>
        ))}
      </div>
      {list.map((a) => (
        <Card key={a.id} className="mb-3 p-4">
          <div className="flex flex-wrap justify-between gap-2">
            <div>
              <p className="font-bold">
                {a.id} · {a.cat}
              </p>
              <p className="text-sm text-slate-600">{a.detail}</p>
              <p className="text-xs text-slate-400">
                {a.entity} · {a.time} · {a.status}
              </p>
            </div>
            <Badge tone={a.sev === "Critical" ? "red" : a.sev === "High" ? "amber" : "slate"}>{a.sev}</Badge>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button size="sm" href="/security/cases">
              Promote to case
            </Button>
            <Button size="sm" variant="outline" onClick={() => toast("Contained", a.id)}>
              Contain
            </Button>
            <Button size="sm" variant="ghost" onClick={() => toast("False positive", a.id)}>
              Mark FP
            </Button>
          </div>
        </Card>
      ))}
    </PortalShell>
  );
}
