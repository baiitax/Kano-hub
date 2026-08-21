"use client";
import { AppShell } from "@/components/chrome";
import { Card, PageHead, ProtoNote } from "@/components/ui";

export default function Page() {
  return (
    <AppShell kind="admin">
      <PageHead title="Financial partners" />
      <ProtoNote>Prototype partner records — not claimed live partnerships.</ProtoNote>
      {["Participating MFB", "Participating commercial bank", "Licensed payment partner"].map((p) => (
        <Card key={p} className="mb-3 p-4 text-sm">
          <p className="font-semibold">{p}</p>
          <p>Products: working capital, inventory · Approval rate (illustrative) 41%</p>
        </Card>
      ))}
    </AppShell>
  );
}
