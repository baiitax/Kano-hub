"use client";
import { SupplierShell } from "@/components/supplier-shell";
import { Badge, Card, PageHead, ProtoNote } from "@/components/ui";
import { millSkus } from "@/data/supplier";

export default function Page() {
  return (
    <SupplierShell>
      <PageHead title="Mill stock" sub="Sharada bays · wax, lining, notions" />
      <ProtoNote />
      <Card className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-white/40 text-left text-xs">
            <tr>
              <th className="p-3">SKU</th>
              <th>Name</th>
              <th>Unit</th>
              <th>On hand</th>
              <th>Reorder</th>
              <th>Lead</th>
            </tr>
          </thead>
          <tbody>
            {millSkus.map((s) => (
              <tr key={s.id} className="border-t border-white/40">
                <td className="p-3 font-mono text-xs">{s.sku}</td>
                <td>
                  {s.name}
                  <p className="text-xs text-slate-500">{s.mill}</p>
                </td>
                <td>{s.unit}</td>
                <td className="tabular-nums">{s.stock}</td>
                <td>{s.reorder}</td>
                <td>
                  <Badge tone={s.stock <= s.reorder ? "red" : s.stock <= s.reorder * 2 ? "amber" : "green"}>{s.leadDays}d</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </SupplierShell>
  );
}
