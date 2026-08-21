"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { accessRoles } from "@/data/soc";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="security">
      <PageHead title="Access / IAM" sub="MFA · break-glass · least privilege" />
      {accessRoles.map((a) => (
        <Card key={a.who} className="mb-2 flex flex-wrap items-center justify-between gap-2 p-4 text-sm">
          <div>
            <p className="font-semibold">{a.who}</p>
            <p className="text-slate-500">
              {a.role} · last {a.last}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge tone="green">MFA {a.mfa}</Badge>
            <Button size="sm" variant="outline" onClick={() => toast("Session revoked", a.who)}>
              Revoke
            </Button>
          </div>
        </Card>
      ))}
    </PortalShell>
  );
}
