"use client";

import { Button, Card, Input } from "@/components/ui";
import { Logo } from "@/components/chrome";

export default function Verify() {
  return (
    <div className="grid min-h-screen place-items-center p-4">
      <Card className="w-full max-w-md space-y-3 p-8">
        <Logo />
        <h1 className="text-xl font-bold">Verify phone</h1>
        <p className="text-sm text-slate-500">Enter the 6-digit code sent to 0803 ••• 2290</p>
        <Input defaultValue="482910" />
        <Button href="/onboarding" className="w-full">
          Verify
        </Button>
      </Card>
    </div>
  );
}
