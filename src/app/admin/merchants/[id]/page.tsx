"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Card, PageHead } from "@/components/ui";
import { businesses } from "@/data/mock";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const b = businesses.find((x) => x.id === id) || businesses[0];
  return (
    <AppShell kind="admin">
      <PageHead title={b.name} sub={b.owner} />
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-4 text-sm">
          <p>{b.address}</p>
          <p>{b.phone}</p>
          <Badge tone="green">{b.status}</Badge>
        </Card>
        <Card className="p-4 text-sm">
          <p>Risk flags: none</p>
          <p>Audit: verification approved 02 Mar 2026 by Ops</p>
          <p>Tickets: 1 resolved</p>
        </Card>
      </div>
    </AppShell>
  );
}
