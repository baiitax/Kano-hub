"use client";
import { AgentShell } from "@/components/agent-shell";
import { Button, Card, PageHead } from "@/components/ui";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast, lang } = useStore();
  return (
    <AgentShell>
      <PageHead title={lang === "ha" ? "Taimakawa saka kaya" : "Help with listings"} />
      <Card className="p-4 text-sm">
        <p>{lang === "ha" ? "Ankara 6-yadi don Stall 214 — hoto daga rumfa." : "Ankara 6-yard for Stall 214 — photo from rumfa."}</p>
        <Button className="mt-3" size="sm" onClick={() => toast("Listing published", "AFH-ANK-6Y")}>
          {lang === "ha" ? "Buga" : "Publish for merchant"}
        </Button>
      </Card>
    </AgentShell>
  );
}
