"use client";

import { cn } from "./ui";
import type { Stall } from "@/data/markets";

export function StallMap({ stalls, title, className }: { stalls: Stall[]; title?: string; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-white/50 bg-[#efe6d4]", className)}>
      <svg viewBox="0 0 100 72" className="h-full w-full">
        <rect width="100" height="72" fill="#ead9b8" />
        <path d="M8 10 H92 V62 H8 Z" fill="#dcc9a0" stroke="#b0894a" strokeWidth="0.6" />
        {[20, 36, 52, 68, 84].map((x) => (
          <line key={x} x1={x} y1="12" x2={x} y2="60" stroke="#c4a574" strokeWidth="0.35" />
        ))}
        {[22, 36, 50].map((y) => (
          <line key={y} x1="10" y1={y} x2="90" y2={y} stroke="#c4a574" strokeWidth="0.35" />
        ))}
        <text x="12" y="8" fontSize="3" fill="#6b4f1d" fontFamily="system-ui">
          {title || "Stall rows · prototype overlay"}
        </text>
        {stalls.map((s) => {
          const fill = s.status === "open" ? "#047857" : s.status === "busy" ? "#d97706" : "#64748b";
          return (
            <g key={s.id}>
              <rect x={s.x - 4} y={s.y - 3} width="10" height="8" rx="1.2" fill={fill} opacity="0.9" />
              <text x={s.x - 3} y={s.y + 1.5} fontSize="2.2" fill="white" fontFamily="system-ui">
                {s.id}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
        Simulated stall map · not GPS
      </p>
    </div>
  );
}
