"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, StatCard } from "@/components/ui";
import { businesses } from "@/data/mock";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell kind="admin">
      <PageHead title="Verification queue" />
      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <StatCard label="Pending" value={String(businesses.filter((b) => !b.verified).length)} />
        <StatCard label="Verified" value={String(businesses.filter((b) => b.verified).length)} />
        <StatCard label="Rejected 7d" value="2" />
      </div>
      {businesses.map((b) => (
        <Card key={b.id} className="mb-2 flex flex-wrap items-center justify-between p-3 text-sm">
          <span>
            {b.name} · {b.owner} · {b.lga} <Badge tone={b.verified ? "green" : "amber"}>{b.status}</Badge>
          </span>
          {!b.verified && (
            <div className="flex gap-2">
              <Button size="sm" onClick={() => toast("Approved " + b.name)}>
                Approve
              </Button>
              <Button size="sm" variant="outline" onClick={() => toast("Docs requested", b.name)}>
                Request
              </Button>
            </div>
          )}
        </Card>
      ))}
    </AppShell>
  );
}
