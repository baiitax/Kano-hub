"use client";
import { ExecShell } from "@/components/exec-shell";
import { LiveMap, kanoPins } from "@/components/map";
import { Card, StatCard } from "@/components/ui";
import { lgaStats } from "@/data/mock";
import { riders } from "@/data/logistics";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export default function Page() {
  return (
    <ExecShell>
      <h1 className="text-2xl font-extrabold text-white">LGA penetration</h1>
      <p className="text-sm text-slate-400">Coverage across Kano metro — illustrative platform activity.</p>
      <LiveMap
        className="mt-4 h-64"
        pickup={{ ...kanoPins.zoo, label: "Nassarawa" }}
        drop={{ ...kanoPins.fagge, label: "Fagge" }}
        riders={riders.map((r) => ({ id: r.id, x: r.x, y: r.y, label: r.name, tone: "rider" as const }))}
        live={false}
      />
      <Card className="mt-4 h-56 bg-slate-900/80 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={lgaStats}>
            <XAxis dataKey="lga" hide />
            <Tooltip />
            <Bar dataKey="gmv" fill="#34d399" name="GMV index" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {lgaStats.map((l) => (
          <Card key={l.lga} className="flex justify-between bg-slate-900/80 p-3 text-sm text-slate-200">
            <span>{l.lga}</span>
            <span>{l.businesses.toLocaleString()} businesses · GMV idx {l.gmv}</span>
          </Card>
        ))}
      </div>
    </ExecShell>
  );
}
