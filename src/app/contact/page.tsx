"use client";
import { Footer, PublicHeader } from "@/components/chrome";
import { Button, Card, Input } from "@/components/ui";
import { brand } from "@/config/brand";
import { useStore } from "@/lib/store";

export default function Page() {
  const { toast } = useStore();
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-lg px-4 py-12">
        <h1 className="text-4xl font-extrabold">Contact</h1>
        <p className="mt-2 text-slate-600">
          {brand.supportEmail} · {brand.supportPhone}
        </p>
        <Card className="mt-6 space-y-3 p-6">
          <Input label="Name" placeholder="Your name" />
          <Input label="Email" placeholder="you@example.com" />
          <Input label="Message" placeholder="Partnership, demo, press…" />
          <Button onClick={() => toast("Message queued (prototype)")}>Send</Button>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
