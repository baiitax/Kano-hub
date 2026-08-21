"use client";
import { SupplierShell } from "@/components/supplier-shell";
import { Badge, Button, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { naira } from "@/data/mock";
import { millBuyers, millPos } from "@/data/supplier";
import { useStore } from "@/lib/store";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const b = millBuyers.find((x) => x.id === id) || millBuyers[0];
  const pos = millPos.filter((p) => p.shop === b.name);
  const { toast } = useStore();
  return (
    <SupplierShell>
      <PageHead title={b.name} sub={`${b.lga} · terms ${b.terms} · last PO ${b.last}`} />
      <ProtoNote />
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="Lifetime spend" value={naira(b.spend)} />
        <StatCard label="POs" value={String(b.orders)} />
        <StatCard label="Credit used" value={naira(b.used)} hint={"Limit " + naira(b.creditLimit)} />
        <StatCard label="Risk" value={b.risk} />
      </div>
      <Card className="mt-4 p-4">
        <div className="mb-3 flex justify-between">
          <p className="font-semibold">Recent POs</p>
          <Button size="sm" onClick={() => toast("Credit review", "Sent to participating partner")}>
            Request limit review
          </Button>
        </div>
        {pos.map((p) => (
          <div key={p.id} className="flex justify-between border-t py-2 text-sm">
            <span>{p.id}</span>
            <span>{naira(p.amount)}</span>
            <Badge>{p.status}</Badge>
          </div>
        ))}
      </Card>
    </SupplierShell>
  );
}
