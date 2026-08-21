"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, ProtoNote } from "@/components/ui";

const partners = [
  { n: "Participating MFB", products: "Working capital, inventory", apps: 842, rate: "41%" },
  { n: "Participating commercial bank", products: "NUBAN, NIP, cards", apps: 214, rate: "—" },
  { n: "Licensed payment partner", products: "Wallet, POS acquiring", apps: "—", rate: "98.2% auth" },
];

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Financial partners" actions={<Button href="/bank" size="sm">Open bank desk</Button>} />
      <ProtoNote>Prototype partner records — not claimed live partnerships.</ProtoNote>
      {partners.map((p) => (
        <Card key={p.n} className="mb-3 p-4 text-sm">
          <div className="flex justify-between">
            <p className="font-semibold">{p.n}</p>
            <Badge>Prototype</Badge>
          </div>
          <p className="mt-1 text-slate-600">
            {p.products} · Apps {p.apps} · {p.rate}
          </p>
        </Card>
      ))}
    </AppShell>
  );
}
