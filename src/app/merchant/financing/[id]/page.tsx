"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, Input, PageHead, ProtoNote } from "@/components/ui";
import { financingOffers, naira } from "@/data/mock";
import { useParams, useRouter } from "next/navigation";
import { useStore } from "@/lib/store";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const f = financingOffers.find((x) => x.id === id) || financingOffers[0];
  const { setLoanStatus, toast } = useStore();
  const router = useRouter();
  return (
    <AppShell>
      <PageHead title={f.name} />
      <ProtoNote>Example / prototype offer · Provided by participating financial partner</ProtoNote>
      <Card className="space-y-3 p-6">
        <p className="text-3xl font-bold">Up to {naira(f.amount)}</p>
        <Input label="Amount requested" defaultValue="750000" />
        <Input label="Purpose" defaultValue="Inventory restock before Sallah" />
        <Input label="Duration (months)" defaultValue="3" />
        <p className="text-sm text-slate-500">Illustrative repayment estimate: ₦265,000 / month. Not an offer.</p>
        <Button
          onClick={() => {
            setLoanStatus("Under review");
            toast("Application submitted");
            router.push("/merchant/financing/status");
          }}
        >
          Submit application
        </Button>
      </Card>
    </AppShell>
  );
}
