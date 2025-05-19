import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/layout/Sidebar"

export default function AdminLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar isAdmin={true} />
        <div className="flex-1">{children}</div>
      </div>
    </SidebarProvider>
  )
}
