"use client";
import { SupplierShell } from "@/components/supplier-shell";
import { Button, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { naira } from "@/data/mock";
import { millBuyers } from "@/data/supplier";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  const book = millBuyers.reduce((s, b) => s + b.used, 0);
  return (
    <SupplierShell>
      <PageHead title="Trade credit book" sub="7 / 14 / 30 day mill terms" />
      <ProtoNote>
        Powered by participating licensed financial partners. Financing not guaranteed. KanoHub does not extend credit as a
        lender.
      </ProtoNote>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        <StatCard label="Utilised" value={naira(book)} />
        <StatCard label="Limits granted" value={naira(millBuyers.reduce((s, b) => s + b.creditLimit, 0))} />
        <StatCard label="Watchlist shops" value={String(millBuyers.filter((b) => b.risk !== "Good").length)} />
      </div>
      <Card className="mt-4 overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-white/40 text-left text-xs">
            <tr>
              <th className="p-3">Shop</th>
              <th>Terms</th>
              <th>Used</th>
              <th>Limit</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {millBuyers.map((b) => (
              <tr key={b.id} className="border-t">
                <td className="p-3">{b.name}</td>
                <td>{b.terms}</td>
                <td>{naira(b.used)}</td>
                <td>{naira(b.creditLimit)}</td>
                <td className="p-2">
                  <Button size="sm" variant="outline" onClick={() => toast("Hold requested", b.name)}>
                    Hold
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
