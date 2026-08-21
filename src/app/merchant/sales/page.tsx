"use client";
import { AppShell } from "@/components/chrome";
import { Card, PageHead, StatCard } from "@/components/ui";
import { naira, revenueSeries } from "@/data/mock";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export default function Page() {
  return (
    <AppShell>
      <PageHead title="Sales" />
      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard label="Revenue" value={naira(4280500)} />
        <StatCard label="Cost of goods" value={naira(3359100)} />
        <StatCard label="Gross profit" value={naira(921400)} />
        <StatCard label="Avg order" value={naira(15072)} />
      </div>
      <Card className="mt-6 h-64 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueSeries}>
            <XAxis dataKey="d" />
            <Tooltip />
            <Bar dataKey="revenue" fill="#047857" radius={6} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </AppShell>
  );
}
