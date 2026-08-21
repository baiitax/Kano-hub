"use client";

import { AppProvider } from "@/lib/store";
import { DemoSwitcher, Toasts } from "./chrome";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      {children}
      <DemoSwitcher />
      <Toasts />
    </AppProvider>
  );
}
