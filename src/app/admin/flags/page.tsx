"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { flags } from "@/data/ops";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <AppShell kind="admin">
      <PageHead title="Feature flags" sub="Dual control on production toggles" />
      {flags.map((f) => (
        <Card key={f.key} className="mb-2 flex items-center justify-between p-4 text-sm">
          <div>
            <p className="font-mono font-semibold">{f.key}</p>
            <p className="text-slate-500">{f.note}</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge tone={f.on ? "green" : "slate"}>{f.on ? "On" : "Off"}</Badge>
            <Button size="sm" variant="outline" onClick={() => toast("Toggle queued", f.key)}>
              Toggle
            </Button>
          </div>
        </Card>
      ))}
    </AppShell>
  );
}
