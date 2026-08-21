"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { socSessions } from "@/data/soc";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="security">
      <PageHead title="Active sessions" sub="Force logout · step-up OTP" />
      {socSessions.map((s) => (
        <Card key={s.id} className="mb-2 flex flex-wrap items-center justify-between gap-2 p-4 text-sm">
          <div>
            <p className="font-semibold">{s.who}</p>
            <p className="text-slate-500">
              {s.device} · {s.ip} · {s.loc} · risk {s.risk}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge tone={s.risk > 80 ? "red" : s.risk > 30 ? "amber" : "green"}>{s.action}</Badge>
            <Button size="sm" variant="outline" onClick={() => toast("Session killed", s.who)}>
              Kill
            </Button>
          </div>
        </Card>
      ))}
    </PortalShell>
  );
}
