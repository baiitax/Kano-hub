"use client";
import { PortalShell } from "@/components/portals";
import { Badge, Button, Card, PageHead } from "@/components/ui";
import { useStore } from "@/lib/store";

const devices = [
  { id: "DV-4412", who: "Maryam Yusuf", device: "Tecno Spark 20 · Android 14", loc: "Tarauni", fingerprint: "a91c-22", risk: "Low", seen: "09:14" },
  { id: "DV-2290", who: "Aisha Abdullahi", device: "iPhone 13 · Safari", loc: "Nassarawa", fingerprint: "b10e-01", risk: "Low", seen: "09:20" },
  { id: "DV-0007", who: "Unknown", device: "Android emulator · Chrome", loc: "Kaduna ASN", fingerprint: "dead-07", risk: "Critical", seen: "09:40" },
  { id: "DV-7788", who: "Umar Faruk", device: "Infinix · Android 13", loc: "Ungogo", fingerprint: "c33a-19", risk: "Medium", seen: "08:05" },
  { id: "DV-1104", who: "3 merchant IDs", device: "IMEI ••4412 shared", loc: "Fagge", fingerprint: "mule-03", risk: "High", seen: "08:28" },
];

export default function Page() {
  const { toast } = useStore();
  return (
    <PortalShell kind="security">
      <PageHead title="Devices" sub="Fingerprints · emulator · shared IMEI" />
      {devices.map((d) => (
        <Card key={d.id} className="mb-2 p-4 text-sm">
          <div className="flex flex-wrap justify-between gap-2">
            <div>
              <p className="font-semibold">
                {d.id} · {d.who}
              </p>
              <p className="text-slate-600">
                {d.device} · {d.loc} · {d.fingerprint} · last {d.seen}
              </p>
            </div>
            <Badge tone={d.risk === "Critical" ? "red" : d.risk === "High" || d.risk === "Medium" ? "amber" : "green"}>{d.risk}</Badge>
          </div>
          <Button className="mt-2" size="sm" variant="outline" onClick={() => toast("Device bound to watchlist", d.id)}>
            Watch
          </Button>
        </Card>
      ))}
    </PortalShell>
  );
}
