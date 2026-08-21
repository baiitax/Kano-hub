"use client";
import { PortalShell } from "@/components/portals";
import { Card, PageHead } from "@/components/ui";

const officers = [
  { name: "Halima Usman", book: "₦48M", apps: 22, lga: "Nassarawa" },
  { name: "Ibrahim Sani", book: "₦31M", apps: 14, lga: "Fagge" },
  { name: "Aisha Bello", book: "₦27M", apps: 11, lga: "Tarauni" },
];

export default function Page() {
  return (
    <PortalShell kind="loans">
      <PageHead title="Loan officers" />
      {officers.map((o) => (
        <Card key={o.name} className="mb-2 flex justify-between p-4 text-sm">
          <span className="font-semibold">{o.name}</span>
          <span>
            {o.lga} · {o.apps} apps · {o.book}
          </span>
        </Card>
      ))}
    </PortalShell>
  );
}
