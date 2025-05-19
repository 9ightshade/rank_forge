"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  User, 
  FileText, 
  PlusCircle, 
  Award, 
  Settings, 
  Users, 
  ClipboardCheck, 
  ChevronLeft,
  LogOut,
  Shield,
  Bell
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserProfile {
  name?: string;
  email?: string;
  image?: string;
  role?: string;
  notifications?: number;
}

export default function AppSidebar({ 
  isAdmin = false, 
  userProfile = { 
    name: "Username", 
    role: isAdmin ? "Admin" : "Contributor" 
  } 
}: { 
  isAdmin?: boolean;
  userProfile?: UserProfile;
}) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  // Check if viewport is mobile on mount and when resized
  useEffect(() => {
    const checkMobile = () => {
      setCollapsed(window.innerWidth < 768)
    }
    
    // Initial check
    checkMobile()
    
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  const contributorLinks = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      section: "dashboard",
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: User,
      section: "dashboard",
    },
    {
      title: "Submissions",
      href: "/dashboard/submissions",
      icon: FileText,
      section: "dashboard",
      badge: 3, // Example badge count
    },
    {
      title: "New Submission",
      href: "/dashboard/new-submission",
      icon: PlusCircle,
      section: "dashboard",
      highlight: true,
    },
    {
      title: "Leaderboard",
      href: "/leaderboard",
      icon: Award,
      section: "rankings",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
      section: "dashboard",
    },
  ]
  
  const adminLinks = [
    {
      title: "Admin Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      section: "admin",
    },
    {
      title: "Review Submissions",
      href: "/admin/review",
      icon: ClipboardCheck,
      section: "admin",
      badge: 12, // Example pending reviews
      highlight: true,
    },
    {
      title: "Contributors",
      href: "/admin/contributors",
      icon: Users,
      section: "admin",
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
      section: "admin",
    },
  ]
  
  // Group links by section
  const links = isAdmin ? adminLinks : contributorLinks
  const sections = links.reduce((acc, link) => {
    if (!acc[link.section]) {
      acc[link.section] = []
    }
    acc[link.section].push(link)
    return acc
  }, {} as Record<string, typeof links>)

  return (
    <Sidebar 
      className={cn(
        "group relative z-30 flex h-screen max-h-screen w-[250px] flex-col border-r bg-background transition-all duration-300",
        collapsed && "w-[70px]"
      )}
    >
      <SidebarHeader className="border-b px-4 py-3">
        <div className={cn(
          "flex items-center gap-2 transition-opacity", 
          collapsed ? "justify-center" : "justify-between"
        )}>
          <Link href="/" className="flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            <span className={cn(
              "text-lg font-bold transition-opacity duration-200", 
              collapsed && "opacity-0 w-0 hidden"
            )}>
              RankForge
            </span>
          </Link>
          
          {!collapsed && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 w-8 p-0"
                    onClick={() => setCollapsed(!collapsed)}
                  >
                    <Bell className="h-4 w-4" />
                    {userProfile?.notifications && userProfile.notifications > 0 && (
                      <span className="absolute right-1 top-1 flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive"></span>
                      </span>
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Notifications</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </SidebarHeader>
      
      <SidebarContent className="flex-1 overflow-auto px-3 py-2 scrollbar-thin">
        {Object.entries(sections).map(([sectionKey, sectionLinks]) => (
          <div key={sectionKey} className="mb-6">
            {!collapsed && (
              <h3 className="mb-1 px-2 text-xs font-medium uppercase text-muted-foreground">
                {sectionKey === "dashboard" ? "Dashboard" : 
                 sectionKey === "admin" ? "Administration" : 
                 sectionKey === "rankings" ? "Rankings" : sectionKey}
              </h3>
            )}
            <SidebarMenu>
              {sectionLinks.map((link) => (
                <SidebarMenuItem key={link.href}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuButton 
                          asChild 
                          isActive={pathname === link.href}
                          className={cn(
                            "group relative flex w-full items-center gap-3 rounded-md px-3 py-2 transition-all",
                            pathname === link.href ? "bg-primary/10 text-primary" : "hover:bg-accent hover:text-foreground",
                            link.highlight && "bg-secondary/20 font-medium hover:bg-secondary/30"
                          )}
                        >
                          <Link href={link.href} className={cn(
                            "flex w-full items-center", 
                            collapsed ? "justify-center" : "justify-start gap-3"
                          )}>
                            <div className="relative flex items-center justify-center">
                              <link.icon className={cn(
                                "h-5 w-5",
                                pathname === link.href && "text-primary"
                              )} />
                              {link.badge && (
                                <Badge 
                                  variant="destructive" 
                                  className={cn(
                                    "absolute -right-2 -top-2 h-5 w-5 items-center justify-center p-0 text-[10px]", 
                                    collapsed && "-right-1"
                                  )}
                                >
                                  {link.badge}
                                </Badge>
                              )}
                            </div>
                            <span className={cn(
                              "text-sm transition-opacity duration-200", 
                              collapsed && "opacity-0 w-0 hidden"
                            )}>
                              {link.title}
                            </span>
                            
                            {pathname === link.href && !collapsed && (
                              <div className="absolute right-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary" />
                            )}
                          </Link>
                        </SidebarMenuButton>
                      </TooltipTrigger>
                      <TooltipContent 
                        side="right" 
                        className={cn("z-50", !collapsed && "hidden")}
                      >
                        <div className="flex flex-col">
                          <p>{link.title}</p>
                          {link.badge && (
                            <p className="text-xs text-muted-foreground">
                              {link.badge} {link.badge === 1 ? "item" : "items"}
                            </p>
                          )}
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </div>
        ))}
      </SidebarContent>
      
      <SidebarFooter className="border-t p-3">
        <div className={cn(
          "flex items-center gap-3 rounded-md p-2 transition-all duration-200 hover:bg-accent",
          collapsed && "justify-center p-1"
        )}>
          <Avatar className="h-9 w-9 border border-border">
            <AvatarImage src={userProfile?.image} />
            <AvatarFallback className="bg-primary/10 text-primary">
              {userProfile?.name?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>
          
          <div className={cn(
            "flex flex-1 flex-col transition-opacity duration-200", 
            collapsed && "opacity-0 w-0 hidden"
          )}>
            <span className="truncate text-sm font-medium">{userProfile?.name}</span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              {isAdmin ? (
                <>
                  <Shield className="h-3 w-3" /> Admin
                </>
              ) : (
                userProfile?.role || "Contributor"
              )}
            </span>
          </div>
          
          {!collapsed && (
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full p-0">
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Log out</span>
            </Button>
          )}
        </div>
      </SidebarFooter>
      
      <Button 
        variant="secondary" 
        size="sm" 
        className="absolute -right-3 top-20 h-6 w-6 rounded-full p-0 shadow-md"
        onClick={() => setCollapsed(!collapsed)}
      >
        <ChevronLeft className={cn(
          "h-4 w-4 transition-transform", 
          collapsed && "rotate-180"
        )} />
        <span className="sr-only">
          {collapsed ? "Expand" : "Collapse"} sidebar
        </span>
      </Button>
    </Sidebar>
  )
}