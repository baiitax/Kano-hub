"use client";

import { useStore } from "@/lib/store";
import { cn } from "./ui";
import { useT } from "@/lib/i18n";

export function LangToggle({ compact }: { compact?: boolean }) {
  const { lang, setLang } = useStore();
  const t = useT();
  return (
    <div className={cn("inline-flex rounded-full border border-white/60 bg-white/50 p-0.5 text-xs font-bold", compact && "scale-90")}>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={cn("rounded-full px-2.5 py-1", lang === "en" ? "bg-emerald-700 text-white" : "text-slate-600")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("ha")}
        className={cn("rounded-full px-2.5 py-1", lang === "ha" ? "bg-emerald-700 text-white" : "text-slate-600")}
        aria-pressed={lang === "ha"}
        title={t("hausa")}
      >
        HA
      </button>
    </div>
  );
}
