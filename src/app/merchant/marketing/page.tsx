"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, Input, PageHead } from "@/components/ui";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell>
      <PageHead title="Marketing" />
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="space-y-3 p-5">
          <h3 className="font-bold">Create coupon</h3>
          <Input label="Name" defaultValue="Sallah 10" />
          <Input label="Code" defaultValue="SALLAH10" />
          <Input label="Discount %" defaultValue="10" />
          <Input label="Minimum order" defaultValue="20000" />
          <Button onClick={() => toast("Coupon live")}>Publish</Button>
        </Card>
        <Card className="p-5 text-sm">
          <h3 className="font-bold">Campaign performance</h3>
          <p>WhatsApp broadcast · 1,820 reached · 94 orders</p>
          <p>Flash sale Friday · ₦640,000 GMV</p>
          <Button className="mt-3" variant="outline" onClick={() => toast("Broadcast queued")}>
            Customer broadcast
          </Button>
        </Card>
      </div>
    </AppShell>
  );
}
