"use client";
import { AppShell } from "@/components/chrome";
import { Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { lgaStats, platformKpis } from "@/data/mock";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Kano economic dashboard" sub="For government, investors and partners" />
      <ProtoNote>Illustrative prototype data — not official Kano statistics.</ProtoNote>
      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Businesses onboarded" value={platformKpis.merchants.toLocaleString()} />
        <StatCard label="Active" value={platformKpis.active.toLocaleString()} />
        <StatCard label="GMV" value={`₦${platformKpis.gmv}B`} />
        <StatCard label="Jobs supported" value={platformKpis.jobs.toLocaleString()} />
      </div>
      <Card className="mt-6 h-72 p-4">
        <p className="font-semibold">Activity by LGA (illustrative)</p>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={lgaStats}>
            <XAxis dataKey="lga" hide />
            <Tooltip />
            <Bar dataKey="gmv" fill="#047857" name="GMV index" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {lgaStats.map((l) => (
          <Card key={l.lga} className="flex justify-between p-3 text-sm">
            <span>{l.lga}</span>
            <span>
              {l.businesses.toLocaleString()} businesses
            </span>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
