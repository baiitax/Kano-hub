"use client";
import { AssocShell } from "@/components/assoc-shell";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { assocDeals } from "@/data/association";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <AssocShell>
      <PageHead title="Bulk mill deals" sub="Pool orders for Sharada bales" />
      {assocDeals.map((d) => (
        <Card key={d.id} className="mb-3 p-4">
          <div className="flex justify-between">
            <p className="font-semibold">{d.title}</p>
            <Badge>{d.status}</Badge>
          </div>
          <p className="text-sm text-slate-600">
            {d.mill} · {d.window}
          </p>
          <Button className="mt-2" size="sm" href="/wholesale" onClick={() => toast("Joined pool", d.id)}>
            Open B2B floor
          </Button>
        </Card>
      ))}
    </AssocShell>
  );
}
