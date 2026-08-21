"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, PageHead } from "@/components/ui";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell kind="admin">
      <PageHead title="Content" />
      {["Hero banner", "Category tiles", "Trust copy", "Hausa strings"].map((c) => (
        <Card key={c} className="mb-2 flex justify-between p-3">
          <span>{c}</span>
          <Button size="sm" variant="outline" onClick={() => toast("Draft saved", c)}>
            Edit
          </Button>
        </Card>
      ))}
    </AppShell>
  );
}
