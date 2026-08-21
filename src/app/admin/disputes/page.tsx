"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Card, PageHead } from "@/components/ui";

const cases = [
  { id: "DSP-441", type: "Order", pri: "High", status: "Open", agent: "Halima" },
  { id: "DSP-438", type: "Payment", pri: "Med", status: "Investigating", agent: "Tunde" },
  { id: "DSP-401", type: "Logistics", pri: "Low", status: "Resolved", agent: "Amina" },
];

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Dispute center" />
      {cases.map((c) => (
        <Card key={c.id} className="mb-2 flex justify-between p-3 text-sm">
          <span>
            {c.id} · {c.type}
          </span>
          <span>
            <Badge>{c.status}</Badge> {c.agent}
          </span>
        </Card>
      ))}
    </AppShell>
  );
}
