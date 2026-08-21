"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { exceptions, settlementCalendar } from "@/data/trust";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  const hold = settlementCalendar.reduce((s, d) => s + d.hold, 0);
  return (
    <AppShell>
      <PageHead
        title="Settlement calendar"
        sub="T+1 windows · dispute holds · split-cart legs"
        actions={<Button href="/merchant/credit-pack" size="sm">Credit pack</Button>}
      />
      <ProtoNote>
        Payouts are processed by participating licensed financial partners. KanoHub does not hold merchant deposits as a
        bank.
      </ProtoNote>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="Queued tonight" value={naira(374790)} />
        <StatCard label="On hold" value={naira(hold)} hint="Disputes + undelivered legs" />
        <StatCard label="Fees (est.)" value={naira(7710)} />
        <StatCard label="Next window" value="22:00 WAT" />
      </div>
      <Card className="mt-4 overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-white/40 text-left text-xs">
            <tr>
              <th className="p-3">Day</th>
              <th>GMV</th>
              <th>Fee</th>
              <th>Hold</th>
              <th>Net</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {settlementCalendar.map((r) => (
              <tr key={r.day} className="border-t">
                <td className="p-3">
                  {r.day}
                  <p className="text-xs text-slate-500">{r.window}</p>
                </td>
                <td>{naira(r.gmv)}</td>
                <td>{naira(r.fee)}</td>
                <td>{naira(r.hold)}</td>
                <td className="font-semibold">{naira(r.net)}</td>
                <td>
                  <Badge tone={r.status === "Settled" ? "green" : "amber"}>{r.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <h2 className="mt-6 font-bold">Exceptions</h2>
      {exceptions.map((e) => (
        <Card key={e.id} className="mt-2 flex justify-between p-4 text-sm">
          <span>
            {e.id} · {e.type} · {e.ref}
            <p className="text-xs text-slate-500">{e.note}</p>
          </span>
          <span className="font-bold">{naira(e.amount)}</span>
        </Card>
      ))}
      <Button className="mt-4" onClick={() => toast("Payout requested", "Partner queue")}>
        Request payout
      </Button>
    </AppShell>
  );
}
