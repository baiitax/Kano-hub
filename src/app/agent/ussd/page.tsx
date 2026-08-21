"use client";
import { AgentShell } from "@/components/agent-shell";
import { Button, Card, PageHead, ProtoNote } from "@/components/ui";
import { useStore } from "@/lib/store";
import { useState } from "react";

export default function Page() {
  const { toast } = useStore();
  const [line, setLine] = useState("*347*KH#");
  return (
    <AgentShell>
      <PageHead title="USSD kiosk" sub="Feature-phone assist · prototype menu" />
      <ProtoNote>No real telco session. Illustrative *347*KH# flow for traders without smartphones.</ProtoNote>
      <Card className="mx-auto max-w-sm bg-slate-900 p-6 font-mono text-sm text-emerald-300">
        <p>{line}</p>
        <p className="mt-3 text-white">1. Cash-in</p>
        <p className="text-white">2. Cash-out</p>
        <p className="text-white">3. Shop balance</p>
        <p className="text-white">4. Hausa / English</p>
        <Button
          className="mt-4"
          size="sm"
          onClick={() => {
            setLine("1 → Enter amount → Partner PIN");
            toast("USSD step", "Cash-in selected (prototype)");
          }}
        >
          Dial 1
        </Button>
      </Card>
    </AgentShell>
  );
}
