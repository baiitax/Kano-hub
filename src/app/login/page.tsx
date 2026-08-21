"use client";

import { Logo } from "@/components/chrome";
import { Button, Card, Input } from "@/components/ui";
import { useRouter } from "next/navigation";
import { useStore } from "@/lib/store";

export default function Login() {
  const router = useRouter();
  const { setRole } = useStore();
  return (
    <div className="grid min-h-screen place-items-center bg-slate-50 p-4">
      <Card className="w-full max-w-md p-8">
        <Logo />
        <h1 className="mt-6 text-2xl font-bold">Sign in</h1>
        <p className="text-sm text-slate-500">Phone, email or demo accounts</p>
        <div className="mt-4 space-y-3">
          <Input label="Phone or email" defaultValue="0803 441 2290" />
          <Input label="Password" type="password" defaultValue="password" />
          <Button
            className="w-full"
            onClick={() => {
              setRole("merchant");
              router.push("/merchant");
            }}
          >
            Continue
          </Button>
          <Button href="/forgot-password" variant="ghost" className="w-full">
            Forgot password
          </Button>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <Button variant="outline" onClick={() => { setRole("customer"); router.push("/marketplace"); }}>
              Demo customer
            </Button>
            <Button variant="outline" onClick={() => { setRole("merchant"); router.push("/merchant"); }}>
              Demo merchant
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
