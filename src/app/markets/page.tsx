"use client";

import { Footer, PublicHeader } from "@/components/chrome";
import { StallMap } from "@/components/stall-map";
import { Badge, Button, Card, ProtoNote } from "@/components/ui";
import { clusters } from "@/data/markets";
import { useT } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import Link from "next/link";

export default function Page() {
  const t = useT();
  const { lang } = useStore();
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">{t("kanoState")}</p>
        <h1 className="mt-1 text-3xl font-extrabold">{t("clustersTitle")}</h1>
        <p className="mt-2 max-w-2xl text-slate-600">{t("clustersSub")}</p>
        <ProtoNote>
          Stall overlays are simulated. Association names are illustrative. Not a live cadastral map.
        </ProtoNote>
        <div className="grid gap-5 md:grid-cols-2">
          {clusters.map((c) => (
            <Link key={c.id} href={`/markets/${c.slug}`}>
              <Card className="overflow-hidden hover:-translate-y-0.5">
                <StallMap stalls={c.map} title={c.name} className="h-40 rounded-none" />
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold">{lang === "ha" ? c.nameHa : c.name}</h2>
                    <Badge>{c.lga}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">{lang === "ha" ? c.blurbHa : c.blurb}</p>
                  <p className="mt-2 text-xs text-slate-500">
                    {t("stalls")} {c.stalls.toLocaleString()} · {t("traders")} {c.traders.toLocaleString()} · 30d ₦
                    {c.gmv30}B
                  </p>
                  <p className="mt-3 text-xs font-semibold text-emerald-800">{t("openMap")} →</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
        <Button href="/agent" className="mt-8" variant="outline">
          {t("agent")} · {t("cashAssist")}
        </Button>
      </div>
      <Footer />
    </div>
  );
}
