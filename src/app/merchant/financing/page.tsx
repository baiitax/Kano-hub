"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, ProtoNote } from "@/components/ui";
import { financingOffers, naira } from "@/data/mock";


export default function Page() {
  return (
    <AppShell>
      <PageHead title="Financing marketplace" />
      <ProtoNote>
        Example / prototype offers. Provided by participating financial partners. Financing subject to partner eligibility and approval.
      </ProtoNote>
      <div className="grid gap-4 md:grid-cols-3">
        {financingOffers.map((f) => (
          <Card key={f.id} className="p-5">
            <Badge tone="gold">Prototype offer</Badge>
            <h3 className="mt-3 text-lg font-bold">{f.name}</h3>
            <p className="text-2xl font-extrabold">{naira(f.amount)}</p>
            <p className="text-sm text-slate-500">Duration {f.duration}</p>
            <p className="text-sm">Estimated rate: {f.rate}</p>
            <p className="mt-2 text-xs text-slate-500">{f.partner}</p>
            <Button href={`/merchant/financing/${f.id}`} className="mt-4">
              View offer
            </Button>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
