"use client";

import { Logo } from "@/components/chrome";
import { Button, Card, Input } from "@/components/ui";

export default function Register() {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-50 p-4">
      <Card className="w-full max-w-md space-y-3 p-8">
        <Logo />
        <h1 className="text-2xl font-bold">Create account</h1>
        <Input label="Full name" placeholder="Aisha Abdullahi" />
        <Input label="Phone" placeholder="0803 000 0000" />
        <Input label="Email" />
        <Input label="Password" type="password" />
        <Button href="/verify-phone" className="w-full">
          Continue
        </Button>
      </Card>
    </div>
  );
}
