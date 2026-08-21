"use client";
import { Footer, PublicHeader } from "@/components/chrome";
import { Card } from "@/components/ui";

const faqs = [
  ["Is KanoHub a bank?", "No. Payment and financing are shown as partner-powered prototypes."],
  ["Can I get a loan?", "Not from KanoHub. Eligible shops may see partner offers. Approval is not guaranteed."],
  ["Which LGAs?", "Kano metro sample: Municipal, Nassarawa, Fagge, Dala, Gwale, Tarauni, Ungogo, Kumbotso."],
  ["Hausa?", "Language toggle is wired. Primary UI is English in this build."],
  ["How do I demo?", "Login with kano123 and pick a role, or use Demo Mode."],
];

export default function Page() {
  return (
    <div>
      <PublicHeader />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-4xl font-extrabold">FAQ</h1>
        {faqs.map(([q, a]) => (
          <Card key={q} className="mt-3 p-4">
            <p className="font-bold">{q}</p>
            <p className="mt-1 text-sm text-slate-600">{a}</p>
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
}
