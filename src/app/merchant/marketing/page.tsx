"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, Input, PageHead, StatCard } from "@/components/ui";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell>
      <PageHead title="Marketing" />
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard label="Live coupons" value="2" />
        <StatCard label="Broadcast reach 7d" value="1,820" />
        <StatCard label="Attributed GMV" value="₦640,000" />
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Card className="space-y-3 p-5">
          <h3 className="font-bold">Create coupon</h3>
          <Input label="Name" defaultValue="Sallah 10" />
          <Input label="Code" defaultValue="SALLAH10" />
          <Input label="Discount %" defaultValue="10" />
          <Input label="Minimum order" defaultValue="20000" />
          <Button onClick={() => toast("Coupon live")}>Publish</Button>
        </Card>
        <Card className="p-5 text-sm">
          <h3 className="font-bold">Campaigns</h3>
          <p className="mt-2">
            WhatsApp broadcast · 1,820 reached · 94 orders <Badge tone="green">Done</Badge>
          </p>
          <p className="mt-2">
            Flash sale Friday · ₦640,000 GMV <Badge tone="gold">Best</Badge>
          </p>
          <p className="mt-2">VIP double points · queued for Friday</p>
          <Button className="mt-3" variant="outline" onClick={() => toast("Broadcast queued")}>
            Customer broadcast
          </Button>
        </Card>
      </div>
    </AppShell>
  );
}
