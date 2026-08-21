"use client";
import { ExecShell } from "@/components/exec-shell";
import { Badge, Button, Card } from "@/components/ui";
import { boardDecisions } from "@/data/executive";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <ExecShell>
      <h1 className="text-2xl font-extrabold text-white">Board pack</h1>
      <p className="text-sm text-slate-400">Q3 2026 working papers · 21 Aug circulation</p>
      <div className="mt-4 space-y-3">
        {boardDecisions.map((b) => (
          <Card key={b.id} className="bg-slate-900/80 p-4">
            <div className="flex flex-wrap justify-between gap-2">
              <div>
                <p className="font-bold text-white">
                  {b.id} · {b.title}
                </p>
                <p className="text-sm text-slate-400">
                  Owner {b.owner} · Due {b.due}
                </p>
              </div>
              <Badge>{b.status}</Badge>
            </div>
          </Card>
        ))}
      </div>
      <Card className="mt-4 bg-slate-900/80 p-4 text-sm text-slate-300">
        <p className="font-semibold text-white">Appendices</p>
        <p>A. GMV bridge Mar–Aug · B. LGA heat · C. Partner credit memo · D. SOC incidents · E. Regulatory language</p>
        <Button className="mt-3" onClick={() => toast("Board PDF queued (prototype)")}>
          Export pack
        </Button>
      </Card>
    </ExecShell>
  );
}
