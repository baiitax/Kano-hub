"use client";
import { AssocShell } from "@/components/assoc-shell";
import { Badge, Button, Card, PageHead, ProtoNote } from "@/components/ui";
import { assocDues } from "@/data/association";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <AssocShell>
      <PageHead title="Dues" />
      <ProtoNote>Collections via participating partners if a member pays digitally — not association banking.</ProtoNote>
      {assocDues.map((d) => (
        <Card key={d.id} className="mb-2 flex items-center justify-between p-4 text-sm">
          <span>
            {d.id} · {d.member} · {d.period}
          </span>
          <span className="flex items-center gap-2">
            {naira(d.amount)} <Badge>{d.status}</Badge>
            <Button size="sm" variant="outline" onClick={() => toast("Reminder", d.member)}>
              Remind
            </Button>
          </span>
        </Card>
      ))}
    </AssocShell>
  );
}
