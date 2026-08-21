"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, StatCard } from "@/components/ui";
import { useStore } from "@/lib/store";

const tickets = [
  { id: "KH-T-441", who: "Aisha Fashion House", topic: "Payout delay", pri: "High", status: "Open", age: "32m" },
  { id: "KH-T-438", who: "Maryam Yusuf", topic: "Missing item", pri: "Med", status: "Waiting", age: "2h" },
  { id: "KH-T-401", who: "Abdullahi Musa", topic: "App crash on map", pri: "Low", status: "Resolved", age: "1d" },
];

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell kind="admin">
      <PageHead title="Support tickets" />
      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <StatCard label="Open" value="2" />
        <StatCard label="SLA breaches" value="0" />
        <StatCard label="CSAT 7d" value="4.6" />
      </div>
      {tickets.map((t) => (
        <Card key={t.id} className="mb-2 flex flex-wrap items-center justify-between gap-2 p-3 text-sm">
          <span>
            {t.id} · {t.who} · {t.topic} · {t.age}
          </span>
          <div className="flex items-center gap-2">
            <Badge tone={t.pri === "High" ? "red" : "amber"}>{t.pri}</Badge>
            <Badge>{t.status}</Badge>
            <Button size="sm" variant="outline" onClick={() => toast("Assigned to Amina", t.id)}>
              Assign
            </Button>
          </div>
        </Card>
      ))}
    </AppShell>
  );
}
