"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, StatCard } from "@/components/ui";
import { naira, staff } from "@/data/mock";
import { useStore } from "@/lib/store";

const sales = ["—", "₦1.28M", "—", "₦900k"];

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell>
      <PageHead title="Staff" sub="Roles, PIN, last active" actions={<Button onClick={() => toast("Invite sent")}>Invite</Button>} />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Active now" value="3" />
        <StatCard label="Cashiers" value="1" />
        <StatCard label="Today POS by staff" value={naira(1280000)} />
      </div>
      <Card className="mt-4 divide-y divide-white/40">
        {staff.map((s, i) => (
          <div key={s.id} className="flex flex-wrap items-center justify-between gap-2 p-4 text-sm">
            <div>
              <p className="font-semibold">{s.name}</p>
              <p className="text-slate-500">
                {s.role} · last {s.last} · sales {sales[i]}
              </p>
            </div>
            <Badge tone={s.status === "Active" ? "green" : "slate"}>{s.status}</Badge>
          </div>
        ))}
      </Card>
      <p className="mt-3 text-xs text-slate-500">Roles: Owner, Manager, Cashier, Inventory Manager, Accountant, Sales Agent. PIN required on POS.</p>
    </AppShell>
  );
}
