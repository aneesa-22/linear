import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { MotionProvider } from "@/components/motion/motion-provider";
import { siteConfig } from "@/config/site";
import "./globals.css";

const theatreCondensed = localFont({
  src: "../styles/theater.bold-condensed.otf",
  variable: "--font-display",
  display: "swap",
  weight: "700",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={theatreCondensed.variable}>
        <MotionProvider>
          <AppShell>{children}</AppShell>
        </MotionProvider>
      </body>
    </html>
  );
}
