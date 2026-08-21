"use client";
import { GovShell } from "@/components/gov-shell";

export default function Page() {
  return (
    <GovShell>
      <h1 className="text-xl font-bold">Jobs & inclusion</h1>
      <p className="mt-2 text-sm text-slate-400">Riders, mill pick-face, agents, rumfa cashiers — illustrative headcount.</p>
      <ul className="mt-4 space-y-2 text-sm">
        <li>Youth riders · 2,140</li>
        <li>Kwari stall assistants · 6,800</li>
        <li>Field agents · 410</li>
        <li>Sharada mill shifts · 1,200</li>
      </ul>
    </GovShell>
  );
}
