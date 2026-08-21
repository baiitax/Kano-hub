"use client";
import { GovShell } from "@/components/gov-shell";
import { Button } from "@/components/ui";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <GovShell>
      <h1 className="text-xl font-bold">Donor / board brief</h1>
      <p className="mt-3 max-w-xl text-sm text-slate-400">
        One-pager for BOI, SMEDAN, state: Kwari digital GMV, youth riders, women-owned share, mill-to-shop POs. Figures
        are illustrative. Financing remains with licensed partners.
      </p>
      <Button className="mt-6" onClick={() => toast("Brief copied", "Prototype pack")}>
        Copy talking points
      </Button>
    </GovShell>
  );
}
