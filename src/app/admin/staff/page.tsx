"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Card, PageHead } from "@/components/ui";

const ops = [
  { name: "Halima Usman", role: "Ops lead", access: "Admin" },
  { name: "Tunde Ade", role: "Risk", access: "Security" },
  { name: "Amina Bello", role: "Support", access: "Tickets" },
  { name: "Ibrahim Sani", role: "Lender liaison", access: "Financing" },
];

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Operations staff" />
      {ops.map((o) => (
        <Card key={o.name} className="mb-2 flex justify-between p-3 text-sm">
          <span>
            {o.name} · {o.role}
          </span>
          <Badge>{o.access}</Badge>
        </Card>
      ))}
    </AppShell>
  );
}
