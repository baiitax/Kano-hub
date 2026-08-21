"use client";
import { AppShell } from "@/components/chrome";
import { Card, PageHead } from "@/components/ui";
import { revenueSeries } from "@/data/mock";
import { Line, LineChart, Pie, PieChart, Cell, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export default function Page() {
  const pie = [
    { name: "Fashion", v: 62 },
    { name: "Footwear", v: 24 },
    { name: "Fabric", v: 14 },
  ];
  return (
    <AppShell>
      <PageHead title="Analytics" />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="h-64 p-4">
          <p className="font-semibold">Revenue trend</p>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={revenueSeries}>
              <XAxis dataKey="d" />
              <Tooltip />
              <Line dataKey="revenue" stroke="#047857" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        <Card className="h-64 p-4">
          <p className="font-semibold">Sales by category</p>
          <ResponsiveContainer width="100%" height="85%">
            <PieChart>
              <Pie data={pie} dataKey="v" nameKey="name" innerRadius={40} outerRadius={70}>
                {pie.map((_, i) => (
                  <Cell key={i} fill={["#047857", "#1d4ed8", "#d97706"][i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>
      <Card className="mt-4 p-4 text-sm">
        <p className="font-semibold">Business insights</p>
        <ul className="mt-2 list-disc pl-5 text-slate-600">
          <li>Your sales are growing.</li>
          <li>Men’s kaftans generate 34% of revenue.</li>
          <li>Indomie carton may run out within 5 days (on Kano Fresh Foods).</li>
          <li>Customers who buy kaftans often buy sneakers.</li>
          <li>Average order value increased 12%.</li>
          <li>Friday is your strongest sales day.</li>
        </ul>
      </Card>
    </AppShell>
  );
}
