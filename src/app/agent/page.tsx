"use client";

import { AgentShell } from "@/components/agent-shell";
import { Badge, Button, Card, ProtoNote, StatCard } from "@/components/ui";
import { agentCash, agentLeads, agentProfile, agentVisits } from "@/data/agent";
import { naira } from "@/data/mock";
import { useT } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import Link from "next/link";

export default function Page() {
  const t = useT();
  const { lang } = useStore();
  const a = agentProfile;
  return (
    <AgentShell>
      <ProtoNote>{t("partnerNote")}</ProtoNote>
      <h1 className="text-2xl font-extrabold">
        {lang === "ha" ? "Sannu, Sadiya" : "Good morning, Sadiya"}
      </h1>
      <p className="text-sm text-slate-600">
        {a.code} · {a.cluster} <Badge tone="green">{lang === "ha" ? "Wakili mai tabbaci" : "Verified agent"}</Badge>
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label={lang === "ha" ? "Shaguna" : "Shops"} value={String(a.shops)} />
        <StatCard label="KYC" value={String(a.pendingKyc)} hint={lang === "ha" ? "Daure" : "Pending photos"} />
        <StatCard label={lang === "ha" ? "Kashi watan nan" : "Commission MTD"} value={naira(a.commissionMtd)} />
        <StatCard label={lang === "ha" ? "Kuɗin hannu" : "Cash float"} value={naira(a.cashFloat)} hint={"Limit " + naira(a.partnerLimit)} />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:hidden">
        <Button href="/agent/onboard" size="sm">
          {lang === "ha" ? "Shiga shago" : "Onboard"}
        </Button>
        <Button href="/agent/cash" size="sm" variant="outline">
          {t("cashAssist")}
        </Button>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <Card className="p-4">
          <p className="font-semibold">{lang === "ha" ? "Kuɗi na yau" : "Today’s cash assist"}</p>
          {agentCash.map((c) => (
            <div key={c.id} className="mt-2 flex justify-between text-sm">
              <span>
                {c.type} · {c.party}
              </span>
              <span className="tabular-nums">{naira(c.amount)}</span>
            </div>
          ))}
          <Button href="/agent/cash" size="sm" className="mt-3" variant="ghost">
            {lang === "ha" ? "Duka" : "Open desk"}
          </Button>
        </Card>
        <Card className="p-4">
          <p className="font-semibold">{lang === "ha" ? "Ziyara" : "Field tape"}</p>
          {agentVisits.slice(0, 4).map((v) => (
            <p key={v.t + v.text} className="mt-2 text-sm">
              <span className="font-mono text-xs text-emerald-800">{v.t}</span> {v.text}
            </p>
          ))}
        </Card>
      </div>
      <Card className="mt-4 p-4">
        <p className="font-semibold">{lang === "ha" ? "Jagororin kasuwa" : "Cluster leads"}</p>
        {agentLeads.map((l) => (
          <Link key={l.name} href={`/markets/${l.cluster === "singer" ? "singer-market" : l.cluster === "sabon" ? "sabon-gari" : l.cluster}`} className="mt-2 block text-sm">
            {l.name} · {l.need}
          </Link>
        ))}
      </Card>
    </AgentShell>
  );
}
