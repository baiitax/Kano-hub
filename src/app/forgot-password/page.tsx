"use client";

import Link from "next/link";
import { Logo } from "@/components/chrome";
import { Button, Card, Input } from "@/components/ui";
import { useStore } from "@/lib/store";
import { useState } from "react";

export default function Forgot() {
  const { toast } = useStore();
  const [sent, setSent] = useState(false);
  return (
    <div className="grid min-h-screen place-items-center p-4">
      <Card className="w-full max-w-md space-y-3 p-8">
        <Logo />
        <h1 className="text-xl font-extrabold">Reset password</h1>
        <p className="text-sm text-slate-600">Prototype: we show an OTP toast. Demo password stays kano123.</p>
        <Input label="Phone or email" defaultValue="aisha@kanohub.ng" />
        <Button
          className="w-full"
          onClick={() => {
            toast("OTP sent", "482910");
            setSent(true);
          }}
        >
          Send OTP
        </Button>
        {sent && (
          <>
            <Input label="OTP" defaultValue="482910" />
            <Input label="New password" type="password" defaultValue="kano123" />
            <Button href="/login" className="w-full">
              Save and sign in
            </Button>
          </>
        )}
        <Link href="/login" className="block text-sm font-semibold text-emerald-800">
          Back to sign in
        </Link>
      </Card>
    </div>
  );
}
