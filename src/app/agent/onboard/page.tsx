"use client";
import { AgentShell } from "@/components/agent-shell";
import { Button, Card, Input, PageHead, ProtoNote, Select } from "@/components/ui";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast, lang } = useStore();
  return (
    <AgentShell>
      <PageHead
        title={lang === "ha" ? "Shigar da shago" : "Onboard a shop"}
        sub={lang === "ha" ? "Hoto, waya, rumfa" : "Photos, phone, stall ID"}
      />
      <ProtoNote>Field KYC is a prototype. Verification is not a government licence.</ProtoNote>
      <Card className="max-w-lg space-y-3 p-4">
        <Input label={lang === "ha" ? "Sunan shago" : "Shop name"} placeholder="Hajiya Lami Rumfa C22" />
        <Select label={lang === "ha" ? "Kasuwa" : "Cluster"} defaultValue="kwari">
          <option value="kwari">Kantin Kwari</option>
          <option value="sabon">Sabon Gari</option>
          <option value="dawanau">Dawanau</option>
          <option value="wambai">Kofar Wambai</option>
        </Select>
        <Input label={lang === "ha" ? "Lambar rumfa" : "Stall ID"} placeholder="C22" />
        <Input label={lang === "ha" ? "Waya" : "Phone"} placeholder="0803…" />
        <Button onClick={() => toast(lang === "ha" ? "An ajiye" : "Draft saved", "OTP 482910 · prototype")}>
          {lang === "ha" ? "Aika OTP" : "Send OTP & save photos"}
        </Button>
      </Card>
    </AgentShell>
  );
}
