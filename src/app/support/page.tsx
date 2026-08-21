"use client";
import { PublicHeader } from "@/components/chrome";
import { Button, Card, Input } from "@/components/ui";
import { useStore } from "@/lib/store";
import { useState } from "react";

export default function Page() {
  const { toast } = useStore();
  const [chat, setChat] = useState(false);
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="text-2xl font-bold">Support</h1>
        <Input placeholder="Search help" className="mt-4" />
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {["How do I verify my business?", "How are payments settled?", "How does financing work?", "How do I assign a rider?"].map((q) => (
            <Card key={q} className="p-4 text-sm">
              {q}
            </Card>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <Button onClick={() => toast("Ticket KH-T-441 opened")}>Open ticket</Button>
          <Button variant="outline" onClick={() => setChat(true)}>
            Live chat
          </Button>
        </div>
        {chat && (
          <Card className="mt-4 p-4 text-sm">
            <p className="font-semibold">Chat · Prototype</p>
            <p className="mt-2">Agent Amina: How can we help Aisha Fashion House today?</p>
          </Card>
        )}
      </div>
    </div>
  );
}
