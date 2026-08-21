"use client";
import { SupplierShell } from "@/components/supplier-shell";
import { Badge, Button, Card, PageHead, ProtoNote } from "@/components/ui";
import { naira } from "@/data/mock";
import { millQuotes } from "@/data/supplier";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <SupplierShell>
      <PageHead title="Quotes" sub="Kantin Kwari and Nassarawa shops requesting mill-gate prices" />
      <ProtoNote />
      <div className="grid gap-3">
        {millQuotes.map((q) => (
          <Card key={q.id} className="flex flex-wrap items-center justify-between gap-3 p-4">
            <div>
              <p className="font-semibold">
                {q.id} · {q.shop}
              </p>
              <p className="text-sm text-slate-600">
                {q.sku} · {naira(q.amount)} · expires {q.expires}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge tone={q.status === "Accepted" ? "green" : "amber"}>{q.status}</Badge>
              <Button size="sm" onClick={() => toast("Quote sent", q.id)}>
                Send / revise
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </SupplierShell>
  );
}
