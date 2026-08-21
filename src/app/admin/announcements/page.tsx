"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, Input, PageHead } from "@/components/ui";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell kind="admin">
      <PageHead title="Announcements" sub="In-app + SMS concept (no real send)" />
      <Card className="space-y-3 p-4">
        <Input label="Title" defaultValue="Sallah delivery cut-off 18:00" />
        <Input label="Audience" defaultValue="All verified merchants in metro LGAs" />
        <Button onClick={() => toast("Announcement scheduled")}>Schedule</Button>
      </Card>
      <Card className="mt-3 p-4 text-sm">
        Last: “Wallet settlement 22:00 WAT” · 8,426 merchants · 12 Aug
      </Card>
    </AppShell>
  );
}
