"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { loanPipeline } from "@/data/intel";
import { naira } from "@/data/mock";
import { useStore } from "@/lib/store";
import Link from "next/link";

export default function Page() {
  const { toast, setLoanStatus } = useStore();
  return (
    <PortalShell kind="loans">
      <PageHead title="Application pipeline" />
      <div className="space-y-3">
        {loanPipeline.map((l) => (
          <Card key={l.id} className="p-4">
            <div className="flex flex-wrap justify-between gap-2">
              <div>
                <p className="font-bold">
                  {l.id} · {l.merchant}
                </p>
                <p className="text-sm text-slate-600">
                  {l.product} · {naira(l.amount)} · Score {l.score} · {l.lga} · {l.days}d
                </p>
              </div>
              <Badge>{l.status}</Badge>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Button size="sm" href="/merchant/financial-profile" variant="outline">
                Financial profile
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  setLoanStatus("Under review");
                  toast("Moved to review", l.id);
                }}
              >
                Advance
              </Button>
              <Button size="sm" variant="outline" onClick={() => toast("Documents requested", l.id)}>
                Request docs
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <Link href="/admin/financing" className="mt-4 inline-block text-sm font-semibold text-emerald-800">
        Platform loan admin →
      </Link>
    </PortalShell>
  );
}
