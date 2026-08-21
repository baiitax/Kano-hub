"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Card, PageHead } from "@/components/ui";

const devices = [
  { id: "DV-1", who: "Maryam Yusuf", device: "Tecno · Android 14", loc: "Tarauni", risk: "Low" },
  { id: "DV-2", who: "Aisha Abdullahi", device: "iPhone · Safari", loc: "Nassarawa", risk: "Low" },
  { id: "DV-3", who: "Unknown", device: "Emulator · Chrome", loc: "Kaduna ASN", risk: "Critical" },
  { id: "DV-4", who: "Umar Faruk", device: "Infinix · Android", loc: "Ungogo", risk: "Medium" },
];

export default function Page() {
  return (
    <PortalShell kind="security">
      <PageHead title="Devices" />
      {devices.map((d) => (
        <Card key={d.id} className="mb-2 flex justify-between p-3 text-sm">
          <span>
            {d.who} · {d.device} · {d.loc}
          </span>
          <Badge tone={d.risk === "Critical" ? "red" : d.risk === "Medium" ? "amber" : "green"}>{d.risk}</Badge>
        </Card>
      ))}
    </PortalShell>
  );
}
