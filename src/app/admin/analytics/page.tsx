"use client";
import { AppShell } from "@/components/chrome";
import { Card, PageHead, ProtoNote, StatCard } from "@/components/ui";
import { monthly } from "@/data/executive";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Platform analytics" />
      <ProtoNote />
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Retention" value="64%" />
        <StatCard label="AOV" value="₦18,400" />
        <StatCard label="Merchant churn" value="2.1%" />
        <StatCard label="CAC (illustrative)" value="₦1,200" />
        <StatCard label="LTV (illustrative)" value="₦86,000" />
        <StatCard label="Activation" value="71%" />
      </div>
      <Card className="mt-4 h-56 p-4">
        <p className="text-sm font-semibold">GMV ₦bn</p>
        <ResponsiveContainer width="100%" height="85%">
          <LineChart data={monthly}>
            <XAxis dataKey="m" />
            <Tooltip />
            <Line dataKey="gmv" stroke="#047857" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </AppShell>
  );
}
