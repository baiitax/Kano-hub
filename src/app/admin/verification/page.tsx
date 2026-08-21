"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { businesses } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell kind="admin">
      <PageHead title="Verification queue" />
      {businesses.map((b) => (
        <Card key={b.id} className="mb-2 flex items-center justify-between p-3 text-sm">
          <span>
            {b.name} · {b.lga} <Badge>{b.status}</Badge>
          </span>
          <Button size="sm" onClick={() => toast("Approved " + b.name)}>
            Approve
          </Button>
        </Card>
      ))}
    </AppShell>
  );
}
