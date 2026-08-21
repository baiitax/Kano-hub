"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { useStore } from "@/lib/store";

const items = [
  ["CBN circular alignment", "Documented"],
  ["KYC tier mapping", "Tier 1–3 live"],
  ["STR workflow", "1 draft today"],
  ["Data residency", "NG cloud (planned)"],
  ["Sanctions screening", "Daily batch"],
  ["Partner SLA", "Signed (illustrative)"],
];

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="bank">
      <PageHead title="Compliance / AML" />
      {items.map(([k, v]) => (
        <Card key={k} className="mb-2 flex justify-between p-3 text-sm">
          <span>{k}</span>
          <Badge>{v}</Badge>
        </Card>
      ))}
      <Button className="mt-2" onClick={() => toast("STR pack exported")}>
        Export STR draft
      </Button>
    </PortalShell>
  );
}
