"use client";

import Link from "next/link";
import { Logo } from "@/components/chrome";
import { Button, Card, Input } from "@/components/ui";
import { demoAccounts } from "@/data/accounts";
import { useStore } from "@/lib/store";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function LoginInner() {
  const router = useRouter();
  const sp = useSearchParams();
  const { login, loginAs } = useStore();
  const [id, setId] = useState("aisha@kanohub.ng");
  const [pw, setPw] = useState("kano123");
  const [err, setErr] = useState(sp.get("denied") ? "That workspace needs a different demo role. Pick the matching card below." : "");
  const [show, setShow] = useState(false);

  const submit = () => {
    const res = login(id, pw);
    if (!res.ok) {
      setErr(res.error || "Failed");
      return;
    }
    router.push(sp.get("next") || res.home || "/");
  };

  const unique = demoAccounts.filter((a, i, arr) => arr.findIndex((x) => x.session.role === a.session.role) === i);

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-2">
        <div className="hidden pt-10 lg:block">
          <Logo />
          <h2 className="mt-8 text-3xl font-extrabold text-emerald-950">One login for every desk</h2>
          <p className="mt-3 text-slate-600">
            Merchant OS, customer wallet, rider jobs, bank NIP, loan point, SOC and the board pack — each role is
            sandboxed. Password for all demos: <span className="font-mono font-semibold">kano123</span>
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li>Protected routes bounce you here if the session role does not match.</li>
            <li>Admin may open other desks. Everyone else stays in their workspace.</li>
            <li>
              New shop? <Link href="/register" className="font-semibold text-emerald-800">Create a business</Link>
            </li>
          </ul>
        </div>
        <Card className="p-6 sm:p-8">
          <div className="lg:hidden">
            <Logo />
          </div>
          <h1 className="mt-4 text-2xl font-extrabold lg:mt-0">Sign in</h1>
          <p className="text-sm text-slate-600">Phone, email or tap a demo role.</p>
          {err && <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{err}</p>}
          {sp.get("next") && <p className="mt-2 text-xs text-amber-800">Continue to {sp.get("next")}</p>}
          <div className="mt-4 space-y-3">
            <Input label="Phone or email" value={id} onChange={(e) => setId(e.target.value)} />
            <div className="relative">
              <Input label="Password" type={show ? "text" : "password"} value={pw} onChange={(e) => setPw(e.target.value)} />
              <button type="button" className="absolute right-2 top-8 text-xs font-semibold text-emerald-800" onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
              </button>
            </div>
            <Button className="w-full" onClick={submit}>
              Continue
            </Button>
            <div className="flex justify-between text-sm">
              <Link href="/forgot-password" className="text-emerald-800">
                Forgot password
              </Link>
              <Link href="/register" className="font-semibold text-emerald-800">
                Create account
              </Link>
            </div>
          </div>
          <p className="mt-6 text-sm font-semibold">Demo roles</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {unique.map((a) => (
              <button
                key={a.session.role}
                onClick={() => {
                  loginAs(a.session.role);
                  router.push(sp.get("next") && a.session.role === "admin" ? sp.get("next")! : a.home);
                }}
                className="rounded-xl border border-white/60 bg-white/50 p-3 text-left text-sm hover:border-emerald-600"
              >
                <p className="font-bold">{a.session.title}</p>
                <p className="text-xs text-slate-500">{a.session.name}</p>
                <p className="mt-1 font-mono text-[11px] text-emerald-800">{a.login}</p>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense>
      <LoginInner />
    </Suspense>
  );
}
