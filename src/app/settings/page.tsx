"use client";
import { AppShell } from "@/components/chrome";
import { Button, Card, PageHead } from "@/components/ui";
import { useStore } from "@/lib/store";

export default function Page() {
  const { lang, setLang, toast } = useStore();
  return (
    <AppShell>
      <PageHead title="Settings" />
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ["Account", "Aisha Abdullahi · 0803 441 2290"],
          ["Security", "2FA, PIN, sessions, devices"],
          ["Notifications", "Orders, payments, inventory"],
          ["Payments", "Settlement account ****4412"],
          ["Privacy", "Consent, export, delete account"],
          ["Integrations", "Payment partners, logistics"],
        ].map(([h, b]) => (
          <Card key={h} className="p-4">
            <p className="font-semibold">{h}</p>
            <p className="text-sm text-slate-500">{b}</p>
          </Card>
        ))}
      </div>
      <Card className="mt-4 p-4">
        <p className="font-semibold">Language</p>
        <Button className="mt-2" variant="outline" onClick={() => setLang(lang === "en" ? "ha" : "en")}>
          {lang === "en" ? "English (switch to Hausa)" : "Hausa (canza zuwa Turanci)"}
        </Button>
        <Button className="ml-2" onClick={() => toast("Settings saved")}>
          Save
        </Button>
      </Card>
      <Card className="mt-4 p-4 text-sm">
        <p className="font-semibold">Active sessions</p>
        <p>Chrome · Abuja · Now</p>
        <p>Android · Kano · Yesterday</p>
      </Card>
    </AppShell>
  );
}
