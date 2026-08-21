"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, Input, PageHead } from "@/components/ui";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell kind="admin">
      <PageHead title="Platform settings" />
      <Card className="space-y-3 p-4">
        <Input label="Support phone" defaultValue="+234 700 000 0000" />
        <Input label="Default LGA" defaultValue="Kano Municipal" />
        <Input label="Take rate %" defaultValue="1.8" />
        <Button onClick={() => toast("Platform settings saved")}>Save</Button>
      </Card>
    </AppShell>
  );
}
