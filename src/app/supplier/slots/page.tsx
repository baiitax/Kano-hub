"use client";
import { SupplierShell } from "@/components/supplier-shell";
import { Badge, Button, Card, PageHead, ProtoNote } from "@/components/ui";
import { millSlots } from "@/data/supplier";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <SupplierShell>
      <PageHead title="Dispatch slots" sub="Vans from Sharada and Dawanau into metro LGAs" />
      <ProtoNote />
      <div className="grid gap-3 md:grid-cols-2">
        {millSlots.map((s) => (
          <Card key={s.id} className="p-4">
            <p className="font-semibold">{s.window}</p>
            <p className="text-sm text-slate-600">{s.zone}</p>
            <div className="mt-2 flex items-center justify-between">
              <Badge>
                {s.booked}/{s.capacity.split(" ")[0]} booked · {s.capacity}
              </Badge>
              <Button size="sm" variant="outline" onClick={() => toast("Slot opened", s.window)}>
                Add van
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </SupplierShell>
  );
}
