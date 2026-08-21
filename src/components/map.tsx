"use client";

import { useEffect, useState } from "react";
import { cn } from "./ui";

export type MapPin = {
  id: string;
  x: number;
  y: number;
  label: string;
  tone?: "pickup" | "drop" | "rider" | "shop" | "idle";
};

export function LiveMap({
  pickup,
  drop,
  riders,
  className,
  live = true,
  caption,
}: {
  pickup?: MapPin;
  drop?: MapPin;
  riders?: MapPin[];
  className?: string;
  live?: boolean;
  caption?: string;
}) {
  const [t, setT] = useState(0.22);
  useEffect(() => {
    if (!live || !pickup || !drop) return;
    const id = setInterval(() => setT((v) => (v >= 0.92 ? 0.18 : v + 0.012)), 420);
    return () => clearInterval(id);
  }, [live, pickup, drop]);
  const rx = pickup && drop ? pickup.x + (drop.x - pickup.x) * t : 48;
  const ry = pickup && drop ? pickup.y + (drop.y - pickup.y) * t : 52;

  return (
    <div className={cn("relative overflow-hidden rounded-2xl border border-white/50 bg-[#dce8d8]", className)}>
      <svg viewBox="0 0 100 72" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#c5d4c0" strokeWidth="0.25" />
          </pattern>
        </defs>
        <rect width="100" height="72" fill="#d7e4d4" />
        <rect width="100" height="72" fill="url(#grid)" />
        <path d="M0 28 H100 M0 44 H100 M22 0 V72 M48 0 V72 M72 0 V72" stroke="#b7c8b4" strokeWidth="1.6" />
        <path d="M0 18 Q40 22 100 14" fill="none" stroke="#9eb8c9" strokeWidth="2.2" />
        <text x="4" y="8" fontSize="3.2" fill="#4b6350" fontFamily="system-ui">
          Nassarawa
        </text>
        <text x="50" y="10" fontSize="3.2" fill="#4b6350" fontFamily="system-ui">
          Tarauni
        </text>
        <text x="4" y="68" fontSize="3.2" fill="#4b6350" fontFamily="system-ui">
          Dala
        </text>
        <text x="74" y="68" fontSize="3.2" fill="#4b6350" fontFamily="system-ui">
          Fagge
        </text>
        {pickup && drop && (
          <line x1={pickup.x} y1={pickup.y} x2={drop.x} y2={drop.y} stroke="#047857" strokeWidth="1.1" strokeDasharray="1.6 1.1" />
        )}
        {pickup && <Pin x={pickup.x} y={pickup.y} color="#047857" />}
        {drop && <Pin x={drop.x} y={drop.y} color="#1d4ed8" />}
        {riders?.map((r) => (
          <g key={r.id}>
            <circle cx={r.x} cy={r.y} r="2.4" fill={r.tone === "idle" ? "#64748b" : "#d97706"} stroke="white" strokeWidth="0.5" />
          </g>
        ))}
        {pickup && drop && (
          <g>
            <circle cx={rx} cy={ry} r="3.2" fill="#047857" stroke="white" strokeWidth="0.7" />
            <circle cx={rx} cy={ry} r="5" fill="none" stroke="#047857" strokeOpacity="0.35" strokeWidth="0.6">
              <animate attributeName="r" values="4;7;4" dur="1.6s" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.5;0;0.5" dur="1.6s" repeatCount="indefinite" />
            </circle>
          </g>
        )}
      </svg>
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between p-2">
        <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
          {live ? "● LIVE" : "Map"} · Kano Metro
        </span>
        <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] text-slate-600">Prototype simulation</span>
      </div>
      {(pickup || drop) && (
        <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1 text-[10px] font-semibold">
          {pickup && <span className="rounded-full bg-emerald-700 px-2 py-0.5 text-white">Pickup {pickup.label}</span>}
          {drop && <span className="rounded-full bg-blue-700 px-2 py-0.5 text-white">Drop {drop.label}</span>}
        </div>
      )}
      {caption && <p className="absolute bottom-8 left-2 text-[10px] text-slate-700">{caption}</p>}
    </div>
  );
}

function Pin({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r="1.8" fill={color} />
      <path d={`M${x} ${y - 4.5} l1.6 3.2 h-3.2 z`} fill={color} />
    </g>
  );
}

export const kanoPins = {
  zoo: { id: "zoo", x: 28, y: 34, label: "Zoo Road" },
  hotoro: { id: "hotoro", x: 62, y: 22, label: "Hotoro" },
  dala: { id: "dala", x: 18, y: 58, label: "Dala" },
  fagge: { id: "fagge", x: 78, y: 50, label: "Sabon Gari" },
  gwale: { id: "gwale", x: 36, y: 52, label: "Gwale" },
};
