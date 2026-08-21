"use client";
import { AgentShell } from "@/components/agent-shell";
import { Card, PageHead } from "@/components/ui";
import { agentVisits } from "@/data/agent";

export default function Page() {
  return (
    <AgentShell>
      <PageHead title="Live tape" />
      {agentVisits.map((v) => (
        <Card key={v.t + v.text} className="mb-2 p-4 text-sm">
          <span className="font-mono text-xs text-emerald-800">{v.t}</span> {v.text}
        </Card>
      ))}
    </AgentShell>
  );
}
