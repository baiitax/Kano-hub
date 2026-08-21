"use client";

import { Footer, PublicHeader } from "@/components/chrome";
import { StallMap } from "@/components/stall-map";
import { Badge, Button, Card, ProtoNote, StatCard } from "@/components/ui";
import { clusters } from "@/data/markets";
import { useT } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { useParams } from "next/navigation";

export default function Page() {
  const { slug } = useParams<{ slug: string }>();
  const c = clusters.find((x) => x.slug === slug) || clusters[0];
  const { lang, toast } = useStore();
  const t = useT();
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Badge tone="gold">{c.lga}</Badge>
        <h1 className="mt-2 text-3xl font-extrabold">{lang === "ha" ? c.nameHa : c.name}</h1>
        <p className="text-slate-600">{lang === "ha" ? c.specialtyHa : c.specialty}</p>
        <p className="mt-2 max-w-2xl text-sm">{lang === "ha" ? c.blurbHa : c.blurb}</p>
        <ProtoNote>Simulated stall map. Association: {c.association}.</ProtoNote>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard label={t("stalls")} value={c.stalls.toLocaleString()} />
          <StatCard label={t("traders")} value={c.traders.toLocaleString()} />
          <StatCard label="30d GMV (proto)" value={`₦${c.gmv30}B`} />
          <StatCard label={t("hours")} value={c.hours.split("·")[0]} hint={c.hours} />
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-5">
          <StallMap stalls={c.map} title={c.name} className="h-80 lg:col-span-3" />
          <div className="space-y-2 lg:col-span-2">
            {c.map.map((s) => (
              <Card key={s.id} className="p-3 text-sm">
                <div className="flex justify-between">
                  <p className="font-semibold">
                    {s.id} · {s.name}
                  </p>
                  <Badge tone={s.status === "open" ? "green" : s.status === "busy" ? "amber" : "slate"}>{s.status}</Badge>
                </div>
                <p className="text-slate-500">{s.trade}</p>
              </Card>
            ))}
            <Button href="/wholesale" size="sm">
              {t("wholesale")}
            </Button>
            <Button
              href="/agent"
              size="sm"
              variant="outline"
              className="ml-2"
              onClick={() => toast("Agent visit", c.name)}
            >
              {t("agent")}
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
