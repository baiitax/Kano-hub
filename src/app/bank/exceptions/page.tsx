"use client";
import { PortalShell } from "@/components/portals";
import { Button, Card, PageHead } from "@/components/ui";
import { exceptions } from "@/data/bank";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="bank">
      <PageHead title="Exceptions" sub="Unmatched, duplicates, name mismatch" />
      {exceptions.map((e) => (
        <Card key={e.id} className="mb-3 flex flex-wrap items-center justify-between gap-2 p-4 text-sm">
          <div>
            <p className="font-semibold">
              {e.id} · {e.type}
            </p>
            <p className="text-slate-500">
              {e.merchant} · {naira(e.amount)} · age {e.age}
            </p>
          </div>
          <Button size="sm" onClick={() => toast("Assigned to ops", e.id)}>
            Assign
          </Button>
        </Card>
      ))}
    </PortalShell>
  );
}
