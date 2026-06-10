import type { ReactNode } from "react";
import { CookieConsent } from "@/components/cookie-consent";
import { FloatingTalkBadge } from "@/components/floating-talk-badge/floating-talk-badge";
import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/header/site-header";

type AppShellProps = Readonly<{
  children: ReactNode;
}>;

export function AppShell({ children }: AppShellProps) {
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
      <CookieConsent />
      <FloatingTalkBadge />
    </>
  );
}
