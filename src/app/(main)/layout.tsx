import { Menu } from "@/components/menu";
import { ScreenWrapper } from "@/components/screen-wrapper";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: RootLayoutProps) {
  return (
    <div className="flex h-screen bg-gray5 py-3 px-2">
      <input type="checkbox" id="toggle-menu-sidebar" className="peer hidden" />

      <Menu />
      <ScreenWrapper>{children}</ScreenWrapper>
    </div>
  );
}
