import type { ReactNode } from "react";
import { SiteHeader } from "@/components/header/site-header";
import { CursorFollower } from "@/components/ui/cursor-follower";

type AppShellProps = Readonly<{
  children: ReactNode;
}>;

export function AppShell({ children }: AppShellProps) {
  return (
    <>
      <SiteHeader />
      {children}
      <CursorFollower />
    </>
  );
}
