"use client";
import { AppShell } from "@/components/chrome";
import { Badge, Button, Card, PageHead, ProtoNote } from "@/components/ui";
import { naira } from "@/data/mock";
import { mills } from "@/data/supplier";
import Link from "next/link";

export default function Page() {
  return (
    <AppShell>
      <PageHead
        title="Suppliers"
        actions={
          <div className="flex gap-2">
            <Button href="/wholesale">B2B floor</Button>
            <Button href="/merchant/wholesale" variant="outline">
              My POs
            </Button>
          </div>
        }
      />
      <ProtoNote>Restock from mills in bales, yards and bags. Credit is a partner product.</ProtoNote>
      <Card className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-xs">
            <tr>
              <th className="p-3">Mill</th>
              <th>Cluster</th>
              <th>30d GMV</th>
              <th>Outstanding</th>
              <th>MOQ</th>
            </tr>
          </thead>
          <tbody>
            {mills.map((s) => (
              <tr key={s.id} className="border-t">
                <td className="p-3">
                  <Link href={`/merchant/suppliers/${s.id}`} className="font-medium">
                    {s.name}
                  </Link>{" "}
                  {s.verified && <Badge tone="green">Verified</Badge>}
                </td>
                <td>{s.cluster}</td>
                <td>{naira(s.gmv30)}</td>
                <td>{naira(s.outstanding)}</td>
                <td>{s.moq}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppShell>
  );
}
