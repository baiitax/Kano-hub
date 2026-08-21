"use client";

import Link from "next/link";
import { Logo } from "@/components/chrome";
import { Button, Card, Input } from "@/components/ui";
import { useRouter } from "next/navigation";
import { useState } from "react";

const roles = [
  { id: "merchant", title: "Sell products", blurb: "Shop, POS, stock, riders, books." },
  { id: "services", title: "Offer services", blurb: "Bookings-style shop (same OS)." },
  { id: "rider", title: "Deliver goods", blurb: "Join as a rider (demo uses Abdullahi)." },
  { id: "customer", title: "Buy products", blurb: "Marketplace + wallet." },
];

export default function Register() {
  const router = useRouter();
  const [role, setRole] = useState("merchant");
  const [name, setName] = useState("Aisha Abdullahi");
  const [phone, setPhone] = useState("0803 441 2290");
  const [email, setEmail] = useState("aisha@kanohub.ng");
  const [pw, setPw] = useState("kano123");
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  const go = () => {
    if (!name.trim() || phone.replace(/\D/g, "").length < 10 || pw.length < 6) {
      setErr("Name, a valid Nigerian phone and 6+ character password required.");
      return;
    }
    setErr("");
    if (role === "customer") router.push("/login");
    else if (role === "rider") router.push("/login");
    else router.push("/verify-phone");
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <Card className="mx-auto max-w-lg space-y-4 p-6 sm:p-8">
        <Logo />
        <h1 className="text-2xl font-extrabold">Create your KanoHub account</h1>
        <p className="text-sm text-slate-600">
          Prototype signup. You will verify phone then complete 7-step shop onboarding. Already have a demo?{" "}
          <Link href="/login" className="font-semibold text-emerald-800">
            Sign in
          </Link>
        </p>
        {err && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{err}</p>}
        <p className="text-sm font-semibold">I want to</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {roles.map((r) => (
            <button
              key={r.id}
              onClick={() => setRole(r.id)}
              className={`rounded-xl border p-3 text-left text-sm ${role === r.id ? "border-emerald-700 bg-emerald-50" : "border-white/60"}`}
            >
              <p className="font-bold">{r.title}</p>
              <p className="text-xs text-slate-500">{r.blurb}</p>
            </button>
          ))}
        </div>
        <Input label="Full name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
        <label className="flex items-start gap-2 text-xs text-slate-600">
          <input type="checkbox" checked={ok} onChange={(e) => setOk(e.target.checked)} className="mt-0.5" />
          I agree to the prototype Merchant Agreement, Privacy and that KanoHub is not a licensed bank or lender.
        </label>
        <Button className="w-full" disabled={!ok} onClick={go}>
          Continue to verification
        </Button>
      </Card>
    </div>
  );
}
