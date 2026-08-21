"use client";
import { AgentShell } from "@/components/agent-shell";
import { Card, PageHead } from "@/components/ui";
import { StallMap } from "@/components/stall-map";
import { clusters } from "@/data/markets";
import { agentVisits } from "@/data/agent";

export default function Page() {
  const kwari = clusters[0];
  return (
    <AgentShell>
      <PageHead title="Field visits" sub="Kantin Kwari row B · simulated" />
      <StallMap stalls={kwari.map} title="Kwari today" className="mb-4 h-56" />
      {agentVisits.map((v) => (
        <Card key={v.t + v.text} className="mb-2 p-3 text-sm">
          <span className="font-mono text-xs text-emerald-800">{v.t}</span> {v.text}
        </Card>
      ))}
    </AgentShell>
  );
}
