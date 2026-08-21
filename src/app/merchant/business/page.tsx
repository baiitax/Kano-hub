"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, Input, PageHead } from "@/components/ui";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell>
      <PageHead title="Business profile" />
      <Card className="space-y-3 p-6">
        <Input label="Business name" defaultValue="Aisha Fashion House" />
        <Input label="Address" defaultValue="No. 14 Zoo Road, Nassarawa, Kano" />
        <Input label="Hours" defaultValue="Mon–Sat 9:00–19:00" />
        <Button onClick={() => toast("Business updated")}>Save</Button>
      </Card>
      <Card className="mt-4 p-6">
        <h3 className="font-bold">Verification checklist</h3>
        {[
          ["Phone", "Verified"],
          ["Identity", "Verified"],
          ["Business information", "Verified"],
          ["Address", "Verified"],
          ["Documents", "Verified"],
        ].map(([k, v]) => (
          <div key={k} className="mt-2 flex justify-between text-sm">
            <span>{k}</span>
            <Badge tone="green">{v}</Badge>
          </div>
        ))}
        <p className="mt-3 text-xs text-slate-500">Verified badge: Business information has been verified by the platform.</p>
      </Card>
    </AppShell>
  );
}
