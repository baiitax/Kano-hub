"use client";
import { PublicHeader, Footer } from "@/components/chrome";
import { useParams } from "next/navigation";

export default function Page() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div>
      <PublicHeader />
      <article className="prose mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold capitalize">{String(slug).replace(/-/g, " ")}</h1>
        <p className="mt-4 text-slate-600">
          This prototype includes Terms, Privacy, Cookie Policy, Data Protection, Responsible Financing, Merchant
          Agreement, Customer Agreement and Dispute Resolution. KanoHub does not claim to be a licensed bank, lender,
          payment institution or insurer. Payment and financing services are provided through licensed partners.
        </p>
      </article>
      <Footer />
    </div>
  );
}
