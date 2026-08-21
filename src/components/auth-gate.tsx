"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { isSignedInRoute, requiredRole } from "@/data/accounts";
import { useStore } from "@/lib/store";

export function AuthGate({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const router = useRouter();
  const { session, authReady } = useStore();
  const need = requiredRole(path);

  useEffect(() => {
    if (!authReady) return;
    if (isSignedInRoute(path)) {
      if (!session) router.replace("/login?next=" + encodeURIComponent(path));
      return;
    }
    if (!need) return;
    if (!session) {
      router.replace("/login?next=" + encodeURIComponent(path));
      return;
    }
    if (session.role !== need && session.role !== "admin") {
      router.replace("/login?denied=1&need=" + need);
    }
  }, [authReady, session, path, need, router]);

  if (!authReady) return <div className="grid min-h-screen place-items-center text-sm text-slate-500">Loading…</div>;
  if (need && !session) return <div className="grid min-h-screen place-items-center text-sm text-slate-500">Redirecting to sign in…</div>;
  if (need && session && session.role !== need && session.role !== "admin") {
    return <div className="grid min-h-screen place-items-center text-sm text-slate-500">This area is for another role…</div>;
  }
  return <>{children}</>;
}
