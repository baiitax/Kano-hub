"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { staff } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell>
      <PageHead title="Staff" actions={<Button onClick={() => toast("Invite sent")}>Invite</Button>} />
      <Card className="divide-y">
        {staff.map((s) => (
          <div key={s.id} className="flex items-center justify-between p-4 text-sm">
            <div>
              <p className="font-semibold">{s.name}</p>
              <p className="text-slate-500">{s.role} · last {s.last}</p>
            </div>
            <Badge tone="green">{s.status}</Badge>
          </div>
        ))}
      </Card>
      <p className="mt-3 text-xs text-slate-500">Roles: Owner, Manager, Cashier, Inventory Manager, Accountant, Sales Agent</p>
    </AppShell>
  );
}
