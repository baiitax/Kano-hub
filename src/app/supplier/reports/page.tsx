"use client";
import { SupplierShell } from "@/components/supplier-shell";
import { Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { naira } from "@/data/mock";
import { millSeries } from "@/data/supplier";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export default function Page() {
  return (
    <SupplierShell>
      <PageHead title="Mill reports" sub="Illustrative — not statutory filings" />
      <ProtoNote />
      <div className="grid grid-cols-2 gap-3">
        <StatCard label="Week GMV" value={naira(millSeries.reduce((s, d) => s + d.gmv, 0))} />
        <StatCard label="POs" value={String(millSeries.reduce((s, d) => s + d.pos, 0))} />
      </div>
      <Card className="mt-4 p-4">
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={millSeries}>
              <XAxis dataKey="d" />
              <Tooltip />
              <Bar dataKey="gmv" fill="#047857" radius={6} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </SupplierShell>
  );
}
