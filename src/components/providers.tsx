"use client";

import { AppProvider } from "@/lib/store";
import { DemoSwitcher, Toasts } from "./chrome";
import { AuthGate } from "./auth-gate";
import { Preloader } from "./preloader";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <Preloader />
      <AuthGate>
        {children}
        <DemoSwitcher />
        <Toasts />
      </AuthGate>
    </AppProvider>
  );
}
