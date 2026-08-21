"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Button, Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { loanBook, loanPipeline } from "@/data/intel";
import { naira } from "@/data/mock";

export default function Page() {
  return (
    <PortalShell kind="loans">
      <PageHead title="Loan point" sub="MFB / officer console · partner decisions only" />
      <ProtoNote>Not a KanoHub lending licence. Applications are illustrative.</ProtoNote>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Pipeline" value={String(loanPipeline.length)} />
        <StatCard label="Book outstanding" value={naira(loanBook.reduce((s, l) => s + l.outstanding, 0))} />
        <StatCard label="Approval rate" value="41%" />
        <StatCard label="In arrears" value="1" />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card className="p-4">
          <p className="font-semibold">Needs action</p>
          {loanPipeline
            .filter((l) => l.status !== "Rejected" && l.status !== "Disbursed")
            .map((l) => (
              <div key={l.id} className="mt-2 flex justify-between text-sm">
                <span>
                  {l.id} · {l.merchant}
                </span>
                <Badge>{l.status}</Badge>
              </div>
            ))}
          <Button href="/loans/pipeline" className="mt-3" size="sm">
            Open pipeline
          </Button>
        </Card>
        <Card className="p-4 text-sm">
          <p className="font-semibold">Today’s collections</p>
          <p>Expected ₦312,000 · Received ₦265,000 · 2 promises-to-pay</p>
          <Button href="/loans/collections" size="sm" className="mt-3" variant="outline">
            Collections
          </Button>
        </Card>
      </div>
    </PortalShell>
  );
}
