"use client";

import { AgentShell } from "@/components/agent-shell";
import { Badge, Button, Card, Input, PageHead, ProtoNote, Select, StatCard } from "@/components/ui";
import { agentCash, agentProfile } from "@/data/agent";
import { naira } from "@/data/mock";
import { useT } from "@/lib/i18n";
import { useStore } from "@/lib/store";
import { useState } from "react";

export default function Page() {
  const t = useT();
  const { toast, lang } = useStore();
  const [amt, setAmt] = useState("25000");
  const [dir, setDir] = useState("Cash-in");
  return (
    <AgentShell>
      <PageHead title={t("cashAssist")} sub={lang === "ha" ? "Kiosk na Kwari · AG-KANO-441" : "Kwari kiosk · AG-KANO-441"} />
      <ProtoNote>{t("partnerNote")}</ProtoNote>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        <StatCard label={lang === "ha" ? "Float" : "Float"} value={naira(agentProfile.cashFloat)} />
        <StatCard label="Partner limit" value={naira(agentProfile.partnerLimit)} />
        <StatCard label={lang === "ha" ? "Jiran" : "Pending rail"} value={naira(120000)} />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card className="space-y-3 p-4">
          <Select label={lang === "ha" ? "Iri" : "Type"} value={dir} onChange={(e) => setDir(e.target.value)}>
            <option>Cash-in</option>
            <option>Cash-out</option>
          </Select>
          <Input label={lang === "ha" ? "Wayar / shago" : "Phone or shop"} placeholder="0803 441 2290" />
          <Input label="₦" value={amt} onChange={(e) => setAmt(e.target.value)} />
          <p className="text-xs text-slate-500">
            {lang === "ha"
              ? "Kuɗin hannu yana shiga walat ɗin abokin hulɗa. Ba ajiyar KanoHub ba."
              : "Notes are exchanged at the kiosk; the ledger posts on a participating partner wallet."}
          </p>
          <Button
            onClick={() =>
              toast(dir + " queued", naira(Number(amt) || 0) + " · partner rail (prototype)")
            }
          >
            {lang === "ha" ? "Aika" : "Post with partner"}
          </Button>
        </Card>
        <Card className="p-4">
          <p className="font-semibold">{lang === "ha" ? "Tarihi" : "Today"}</p>
          {agentCash.map((c) => (
            <div key={c.id} className="mt-3 flex items-center justify-between text-sm">
              <div>
                <p className="font-medium">
                  {c.id} · {c.type}
                </p>
                <p className="text-xs text-slate-500">
                  {c.party} · {c.time}
                </p>
              </div>
              <div className="text-right">
                <p className="tabular-nums font-bold">{naira(c.amount)}</p>
                <Badge tone={c.status === "Posted" ? "green" : "amber"}>{c.status}</Badge>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </AgentShell>
  );
}
