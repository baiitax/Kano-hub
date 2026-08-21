"use client";

import Link from "next/link";
import { Button, Card, Input } from "@/components/ui";
import { Logo } from "@/components/chrome";
import { useStore } from "@/lib/store";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Verify() {
  const { toast } = useStore();
  const [code, setCode] = useState("482910");
  const router = useRouter();
  return (
    <div className="grid min-h-screen place-items-center p-4">
      <Card className="w-full max-w-md space-y-3 p-8">
        <Logo />
        <h1 className="text-xl font-extrabold">Verify phone</h1>
        <p className="text-sm text-slate-600">Code sent to 0803 ••• 2290 (prototype OTP 482910).</p>
        <Input label="6-digit code" value={code} onChange={(e) => setCode(e.target.value)} />
        <Button
          className="w-full"
          onClick={() => {
            if (code.replace(/\s/g, "") !== "482910") {
              toast("Wrong code", "Use 482910");
              return;
            }
            toast("Phone verified");
            router.push("/onboarding");
          }}
        >
          Verify and continue
        </Button>
        <button className="text-sm font-semibold text-emerald-800" onClick={() => toast("OTP resent", "482910")}>
          Resend code
        </button>
        <Link href="/register" className="block text-sm text-slate-500">
          Wrong number? Edit register
        </Link>
      </Card>
    </div>
  );
}
