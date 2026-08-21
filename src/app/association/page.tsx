"use client";
import { AssocShell } from "@/components/assoc-shell";
import { Badge, Button, Card, ProtoNote, StatCard } from "@/components/ui";
import { assocMembers } from "@/data/association";

export default function Page() {
  return (
    <AssocShell>
      <ProtoNote>Chapter workspace for Kantin Kwari traders. Not a government licence or tax authority.</ProtoNote>
      <h1 className="text-2xl font-extrabold">Kantin Kwari Traders Association</h1>
      <p className="text-sm text-slate-600">Alhaji Musa Kwari · dues, bulk mill deals, training</p>
      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="Members" value={String(assocMembers.length * 465)} hint="Illustrative roll" />
        <StatCard label="Dues this month" value="₦4.2m" />
        <StatCard label="Open mill pool" value="1" />
        <StatCard label="Arrears rumfa" value="1" />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button href="/association/members" size="sm">Members</Button>
        <Button href="/association/deals" size="sm" variant="outline">Bulk deals</Button>
        <Button href="/markets/kantin-kwari" size="sm" variant="ghost">Stall map</Button>
      </div>
      <Card className="mt-4 p-4 text-sm">
        Next training: POS + Hausa listings with agents · Sat 22 Aug · Kwari gate hall
      </Card>
    </AssocShell>
  );
}
