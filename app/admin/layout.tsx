import AppSidebar from "@/components/layout/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"


import { PropsWithChildren } from "react";

export default function AdminLayout({ children }: PropsWithChildren<object>) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar isAdmin={true} />
        <div className="flex-1">{children}</div>
      </div>
    </SidebarProvider>
  )
}
