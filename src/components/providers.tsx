"use client";

import { AppProvider } from "@/lib/store";
import { DemoSwitcher, Toasts } from "./chrome";
import { AuthGate } from "./auth-gate";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <AuthGate>
        {children}
        <DemoSwitcher />
        <Toasts />
      </AuthGate>
    </AppProvider>
  );
}
