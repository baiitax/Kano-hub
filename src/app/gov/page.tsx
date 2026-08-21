"use client";
import { GovShell } from "@/components/gov-shell";
import { govKpis } from "@/data/gov";

export default function Page() {
  return (
    <GovShell>
      <p className="text-[10px] font-bold uppercase tracking-wider text-amber-400">View only · illustrative prototype · not official statistics</p>
      <h1 className="mt-2 text-2xl font-extrabold text-white">Kano SME economic desk</h1>
      <p className="mt-1 text-sm text-slate-400">
        Ministry of Commerce / SMEDAN / donor conversation pack. KanoHub is not a government agency or tax authority.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {govKpis.map((k) => (
          <div key={k.k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs text-slate-400">{k.k}</p>
            <p className="mt-1 text-2xl font-bold text-emerald-300">{k.v}</p>
          </div>
        ))}
      </div>
    </GovShell>
  );
}
