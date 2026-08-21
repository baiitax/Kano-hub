"use client";
import { Footer, PublicHeader } from "@/components/chrome";
import { Badge, Button, Card, ProtoNote } from "@/components/ui";
import { naira } from "@/data/mock";
import { mills } from "@/data/supplier";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-2xl font-bold">Supplier marketplace</h1>
        <p className="text-sm text-slate-500">Mills and distributors for Kano merchants — Kantin Kwari, Dawanau, Sabon Gari, Sharada.</p>
        <ProtoNote>Illustrative mill cards. Trade credit via participating licensed partners — financing not guaranteed.</ProtoNote>
        <div className="mb-6 flex gap-2">
          <Button href="/wholesale" size="sm">
            Open B2B floor
          </Button>
          <Button href="/merchant/wholesale" size="sm" variant="outline">
            My mill POs
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {mills.map((s) => (
            <Card key={s.id} className="p-5">
              {s.verified && <Badge tone="green">Verified</Badge>}
              <h3 className="mt-2 font-bold">
                <Link href={`/suppliers/${s.id}`}>{s.name}</Link>
              </h3>
              <p className="text-sm text-slate-500">
                {s.category} · {s.cluster} · {s.location}
              </p>
              <p className="mt-1 text-sm">{s.description}</p>
              <p className="mt-2 text-xs text-slate-500">
                MOQ {s.moq} · 30d {naira(s.gmv30)} · {s.rating}★
              </p>
              <div className="mt-3 flex gap-2">
                <Button size="sm" href={`/suppliers/${s.id}`}>
                  Mill profile
                </Button>
                <Button size="sm" variant="outline" href="/wholesale">
                  Order
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
