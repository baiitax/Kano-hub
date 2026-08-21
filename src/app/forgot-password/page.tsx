"use client";

import { Logo } from "@/components/chrome";
import { Button, Card, Input } from "@/components/ui";
import { useStore } from "@/lib/store";

export default function Forgot() {
  const { toast } = useStore();
  return (
    <div className="grid min-h-screen place-items-center p-4">
      <Card className="w-full max-w-md space-y-3 p-8">
        <Logo />
        <h1 className="text-xl font-bold">Reset password</h1>
        <Input label="Phone or email" />
        <Button onClick={() => toast("OTP sent")}>Send OTP</Button>
      </Card>
    </div>
  );
}
