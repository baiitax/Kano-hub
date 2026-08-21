"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Card, PageHead } from "@/components/ui";

const tickets = [
  { id: "KH-T-441", who: "Aisha Fashion House", topic: "Payout delay", pri: "High", status: "Open" },
  { id: "KH-T-438", who: "Maryam Yusuf", topic: "Missing item", pri: "Med", status: "Waiting" },
  { id: "KH-T-401", who: "Abdullahi Musa", topic: "App crash on map", pri: "Low", status: "Resolved" },
];

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Support tickets" />
      {tickets.map((t) => (
        <Card key={t.id} className="mb-2 flex justify-between p-3 text-sm">
          <span>
            {t.id} · {t.who} · {t.topic}
          </span>
          <Badge>{t.status}</Badge>
        </Card>
      ))}
    </AppShell>
  );
}
