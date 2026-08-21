"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, PageHead } from "@/components/ui";
import { naira, suppliers } from "@/data/mock";
import { useParams } from "next/navigation";
import { useStore } from "@/lib/store";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const s = suppliers.find((x) => x.id === id) || suppliers[0];
  const { toast } = useStore();
  return (
    <AppShell>
      <PageHead title={s.name} sub={`${s.location} · ${s.contact}`} />
      <Card className="p-4 text-sm">
        <p>Total purchases {naira(s.purchases)}</p>
        <p>Outstanding {naira(s.outstanding)}</p>
        <p>MOQ {s.moq}</p>
        <Button className="mt-3" onClick={() => toast("Wholesale order created")}>
          Create wholesale order
        </Button>
      </Card>
    </AppShell>
  );
}
