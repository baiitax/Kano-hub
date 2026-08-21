"use client";
import { CompanyShell } from "@/components/logistics-shell";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { incidents } from "@/data/fleet";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <CompanyShell>
      <PageHead title="Incidents" />
      {incidents.map((i) => (
        <Card key={i.id} className="mb-2 flex flex-wrap items-center justify-between gap-2 p-4 text-sm">
          <span>
            {i.id} · {i.type} · {i.job} · {i.rider}
          </span>
          <div className="flex items-center gap-2">
            <Badge tone={i.status === "Closed" ? "green" : "amber"}>{i.status}</Badge>
            <Button size="sm" variant="outline" onClick={() => toast("Assigned supervisor", i.id)}>
              Assign
            </Button>
          </div>
        </Card>
      ))}
    </CompanyShell>
  );
}
