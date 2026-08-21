import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: `${brand.name} — ${brand.subtitle}`,
  description: brand.description,
  icons: {
    icon: [{ url: "/kanohub-icon.png", type: "image/png" }, { url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: "/icon-192.png",
    shortcut: "/kanohub-mark.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
