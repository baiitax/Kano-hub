"use client";
import { GovShell } from "@/components/gov-shell";
import { govLgas } from "@/data/gov";

export default function Page() {
  return (
    <GovShell>
      <h1 className="text-xl font-bold">LGA penetration</h1>
      <p className="text-xs text-slate-500">Illustrative GMV ₦bn · not a census</p>
      <div className="mt-4 overflow-auto rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead className="text-left text-xs text-slate-400">
            <tr>
              <th className="p-3">LGA</th>
              <th>Shops</th>
              <th>GMV ₦bn</th>
              <th>Jobs</th>
              <th>Women %</th>
            </tr>
          </thead>
          <tbody>
            {govLgas.map((r) => (
              <tr key={r.lga} className="border-t border-white/10">
                <td className="p-3">{r.lga}</td>
                <td>{r.shops.toLocaleString()}</td>
                <td>{r.gmv}</td>
                <td>{r.jobs.toLocaleString()}</td>
                <td>{r.women}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GovShell>
  );
}
