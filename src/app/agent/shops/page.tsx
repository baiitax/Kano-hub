"use client";
import { AgentShell } from "@/components/agent-shell";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { agentShops } from "@/data/agent";
import { useStore } from "@/lib/store";
import Link from "next/link";

export default function Page() {
  const { lang, toast } = useStore();
  return (
    <AgentShell>
      <PageHead title={lang === "ha" ? "Shagunana" : "My shops"} sub="38 live · 4 KYC" />
      {agentShops.map((s) => (
        <Card key={s.id} className="mb-3 flex flex-wrap items-center justify-between gap-2 p-4">
          <div>
            <p className="font-semibold">{s.name}</p>
            <p className="text-xs text-slate-500">
              {s.lga} · {s.last}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge tone={s.status === "Live" ? "green" : "amber"}>{s.status}</Badge>
            {s.cash && <Badge tone="gold">Cash</Badge>}
            <Button size="sm" variant="outline" onClick={() => toast("Visit logged", s.name)}>
              {lang === "ha" ? "Ziyara" : "Visit"}
            </Button>
          </div>
        </Card>
      ))}
      <Link href="/agent/onboard" className="text-sm font-semibold text-emerald-800">
        {lang === "ha" ? "+ Shago sabo" : "+ New shop"}
      </Link>
    </AgentShell>
  );
}
