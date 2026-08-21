"use client";
import { SupplierShell } from "@/components/supplier-shell";
import { Card, PageHead } from "@/components/ui";
import Link from "next/link";

const links = [
  ["/supplier/activity", "Live tape"],
  ["/supplier/quotes", "Quotes"],
  ["/supplier/credit", "Trade credit"],
  ["/supplier/slots", "Dispatch slots"],
  ["/supplier/invoices", "Invoices"],
  ["/supplier/pricing", "MOQ & bales"],
  ["/supplier/returns", "Returns"],
  ["/supplier/reports", "Reports"],
  ["/supplier/staff", "Staff"],
  ["/wholesale", "Public B2B floor"],
  ["/settings", "Settings"],
  ["/support", "Support"],
];

export default function Page() {
  return (
    <SupplierShell>
      <PageHead title="More" sub="Mill modules" />
      <div className="grid grid-cols-2 gap-3">
        {links.map(([h, l]) => (
          <Link key={h} href={h}>
            <Card className="p-4 font-semibold">{l}</Card>
          </Link>
        ))}
      </div>
    </SupplierShell>
  );
}
