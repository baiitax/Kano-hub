"use client";
import { PortalShell } from "@/components/portals";
import { Button, Card, PageHead } from "@/components/ui";
import { useStore } from "@/lib/store";

const reports = ["Daily incident digest", "Weekly fraud precision", "ATO after-action", "Partner webhook SLO", "Board cyber appendix"];

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="security">
      <PageHead title="SOC reports" />
      {reports.map((r) => (
        <Card key={r} className="mb-2 flex items-center justify-between p-4">
          <span className="font-medium">{r}</span>
          <Button size="sm" onClick={() => toast("Queued", r)}>
            Generate
          </Button>
        </Card>
      ))}
    </PortalShell>
  );
}
