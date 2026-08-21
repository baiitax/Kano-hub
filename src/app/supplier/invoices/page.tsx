"use client";
import { SupplierShell } from "@/components/supplier-shell";
import { Badge, Button, Card, PageHead, ProtoNote } from "@/components/ui";
import { naira } from "@/data/mock";
import { millInvoices } from "@/data/supplier";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <SupplierShell>
      <PageHead title="Mill invoices" sub="Issued to merchant buyers" />
      <ProtoNote>Collections via participating licensed partners.</ProtoNote>
      <Card className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-white/40 text-left text-xs">
            <tr>
              <th className="p-3">Invoice</th>
              <th>Shop</th>
              <th>Amount</th>
              <th>Due</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {millInvoices.map((i) => (
              <tr key={i.id} className="border-t">
                <td className="p-3 font-semibold">{i.id}</td>
                <td>{i.shop}</td>
                <td>{naira(i.amount)}</td>
                <td>{i.due}</td>
                <td>
                  <Badge tone={i.status === "Paid" ? "green" : i.status === "Overdue" ? "red" : "amber"}>{i.status}</Badge>
                </td>
                <td className="p-2">
                  <Button size="sm" variant="outline" onClick={() => toast("Reminder", i.id)}>
                    Remind
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
