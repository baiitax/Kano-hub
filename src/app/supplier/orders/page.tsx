"use client";
import { SupplierShell } from "@/components/supplier-shell";
import { Badge, Button, Card, PageHead, ProtoNote } from "@/components/ui";
import { naira } from "@/data/mock";
import { millPos } from "@/data/supplier";
import Link from "next/link";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <SupplierShell>
      <PageHead
        title="Purchase orders"
        sub="Confirm, pick, invoice. Mill-to-shop — not marketplace retail."
        actions={
          <Button size="sm" onClick={() => toast("Export queued", "CSV of open POs")}>
            Export
          </Button>
        }
      />
      <ProtoNote />
      <Card className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-white/40 text-left text-xs">
            <tr>
              <th className="p-3">PO</th>
              <th>Buyer shop</th>
              <th>LGA</th>
              <th>Amount</th>
              <th>Credit</th>
              <th>Slot</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {millPos.map((p) => (
              <tr key={p.id} className="border-t border-white/40">
                <td className="p-3 font-semibold">
                  <Link href={`/supplier/orders/${p.id}`} className="text-emerald-800">
                    {p.id}
                  </Link>
                </td>
                <td>{p.shop}</td>
                <td>{p.lga}</td>
                <td className="tabular-nums">{naira(p.amount)}</td>
                <td>{p.credit}</td>
                <td className="text-xs">{p.slot}</td>
                <td>
                  <Badge tone={p.status.includes("Deliver") || p.status === "Settled" ? "green" : "amber"}>{p.status}</Badge>
                </td>
                <td className="p-2">
                  <Button size="sm" variant="outline" onClick={() => toast("PO " + p.id, "Marked confirmed (prototype)")}>
                    Confirm
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </SupplierShell>
  );
}
