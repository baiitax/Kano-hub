"use client";

import { useState } from "react";
import { Button, Card, Input, Select } from "@/components/ui";
import { Logo } from "@/components/chrome";
import { lgas } from "@/data/mock";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="mx-auto max-w-lg py-8">
        <Logo />
        <p className="mt-4 text-sm text-slate-500">Step {step} of 7</p>
        {step === 1 && (
          <Card className="mt-4 space-y-2 p-6">
            <h1 className="text-xl font-bold">What do you want to do?</h1>
            {["Sell products", "Offer services", "Deliver goods", "Buy products"].map((o) => (
              <button key={o} onClick={() => setStep(2)} className="block w-full rounded-lg border p-3 text-left hover:border-emerald-600">
                {o}
              </button>
            ))}
          </Card>
        )}
        {step === 2 && (
          <Card className="mt-4 space-y-3 p-6">
            <h1 className="text-xl font-bold">Business information</h1>
            <Input label="Business name" defaultValue="Aisha Fashion House" />
            <Select label="Category" defaultValue="Fashion">
              <option>Fashion</option>
              <option>Food</option>
              <option>Electronics</option>
            </Select>
            <Input label="Phone" defaultValue="0803 441 2290" />
            <Input label="Address" defaultValue="No. 14 Zoo Road" />
            <Select label="LGA">
              {lgas.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </Select>
            <Button onClick={() => setStep(3)}>Continue</Button>
          </Card>
        )}
        {step === 3 && (
          <Card className="mt-4 space-y-2 p-6">
            <h1 className="text-xl font-bold">Business type</h1>
            {["Sole proprietor", "Partnership", "Limited company", "Informal business"].map((o) => (
              <button key={o} onClick={() => setStep(4)} className="block w-full rounded-lg border p-3 text-left">
                {o}
              </button>
            ))}
          </Card>
        )}
        {step === 4 && (
          <Card className="mt-4 space-y-3 p-6">
            <h1 className="text-xl font-bold">Verification</h1>
            <p className="text-sm">Phone verified · Identity pending · Documents pending</p>
            <p className="rounded-lg bg-amber-50 p-2 text-sm">Status: Pending</p>
            <Button onClick={() => setStep(5)}>Continue</Button>
          </Card>
        )}
        {step === 5 && (
          <Card className="mt-4 space-y-3 p-6">
            <h1 className="text-xl font-bold">Shop setup</h1>
            <Input label="Description" defaultValue="Ready-to-wear and custom kaftans." />
            <Input label="Opening hours" defaultValue="Mon–Sat 9:00–19:00" />
            <Button onClick={() => setStep(6)}>Continue</Button>
          </Card>
        )}
        {step === 6 && (
          <Card className="mt-4 space-y-3 p-6">
            <h1 className="text-xl font-bold">Add first product</h1>
            <Input label="Product name" defaultValue="Men’s Emerald Kaftan" />
            <Input label="Price" defaultValue="85000" />
            <Input label="Cost" defaultValue="42000" />
            <Input label="Quantity" defaultValue="24" />
            <Button onClick={() => setStep(7)}>Continue</Button>
          </Card>
        )}
        {step === 7 && (
          <Card className="mt-4 p-8 text-center">
            <h1 className="text-2xl font-bold">Your digital shop is ready</h1>
            <p className="mt-2 text-slate-500">Aisha Fashion House is live on KanoHub.</p>
            <Button href="/merchant" className="mt-6">
              Open My Dashboard
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}
