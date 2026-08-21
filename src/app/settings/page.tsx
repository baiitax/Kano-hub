"use client";

import { Logo } from "@/components/chrome";
import { LangToggle } from "@/components/lang-toggle";
import { Button, Card, PageHead } from "@/components/ui";
import { roleHome } from "@/data/accounts";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const { lang, toast, session, logout } = useStore();
  const router = useRouter();
  return (
    <div className="mx-auto min-h-screen max-w-lg px-4 py-6 pb-28">
      <Logo />
      <PageHead title="Settings" sub={session ? `${session.name} · ${session.title}` : "Not signed in"} />
      <Card className="p-4 text-sm">
        <p className="font-semibold">Session</p>
        <p>{session ? session.phone : "Guest"}</p>
        {session && (
          <Button
            className="mt-3"
            variant="danger"
            onClick={() => {
              logout();
              router.push("/login");
            }}
          >
            Sign out
          </Button>
        )}
        {!session && <Button className="mt-3" href="/login">Sign in</Button>}
      </Card>
      <Card className="mt-4 p-4">
        <p className="font-semibold">Language / Harshe</p>
        <div className="mt-2">
          <LangToggle />
        </div>
        <p className="mt-2 text-xs text-slate-500">{lang === "ha" ? "Ana amfani da Hausa a kan kasuwa, wakili da rumfuna." : "Hausa applies to marketplace, agent desk and market clusters."}</p>
        <Button className="ml-2" onClick={() => toast("Settings saved")}>
          Save
        </Button>
      </Card>
      {session && (
        <Link href={roleHome(session.role)} className="mt-4 inline-block text-sm font-semibold text-emerald-800">
          Back to {session.title}
        </Link>
      )}
    </div>
  );
}
