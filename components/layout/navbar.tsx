"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Award, User, LogOut, BarChart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface User {
  name?: string;
  email?: string;
  image?: string;
}

export default function Navbar({ user }: { user?: User }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMenuOpen])

  // Navigation links data for DRY code
  const navLinks = [
    { href: "/leaderboard", label: "Leaderboard", icon: <BarChart className="mr-2 h-4 w-4 md:hidden" /> },
    { href: "/contributors", label: "Contributors", icon: <Users className="mr-2 h-4 w-4 md:hidden" /> },
  ]

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent): void => {
      if (event.key === "Escape" && isMenuOpen) {
      setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscKey)
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isMenuOpen])

  return (
    <nav 
      className={cn(
        "sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow duration-200",
        scrolled && "shadow-sm"
      )}
      aria-label="Main navigation"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 transition-colors hover:text-primary">
            <Award className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">RankForge</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="relative text-sm font-medium transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full p-0" aria-label="User menu">
                  {user.image ? (
                    <Image 
                      src={user.image} 
                      alt={user.name || "User profile"} 
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      {user.name?.charAt(0) || "U"}
                    </div>
                  )}
                  <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex flex-col space-y-1 p-2">
                  <p className="text-sm font-medium">{user.name || "User"}</p>
                  {user.email && <p className="text-xs text-muted-foreground">{user.email}</p>}
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="cursor-pointer">
                    <BarChart className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive focus:text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/auth/signin">Sign in</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/auth/signup">Sign up</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "absolute left-0 right-0 top-16 transform bg-background shadow-md transition-all duration-200 ease-in-out md:hidden",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        )}
      >
        <div className="container py-4">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
            
            <div className="my-2 h-px bg-border" />
            
            {user ? (
              <>
                <div className="flex items-center px-3 py-2">
                  {user.image ? (
                    <Image
                      src={user.image} 
                      alt={user.name || "User profile"} 
                      className="mr-3 h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      {user.name?.charAt(0) || "U"}
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium">{user.name || "User"}</p>
                    {user.email && <p className="text-xs text-muted-foreground">{user.email}</p>}
                  </div>
                </div>
                <Link
                  href="/dashboard"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BarChart className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/profile"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
                <button
                  className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-destructive transition-colors hover:bg-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-2 px-3 pt-2">
                <Button variant="outline" asChild className="justify-center w-full">
                  <Link href="/auth/signin" onClick={() => setIsMenuOpen(false)}>
                    Sign in
                  </Link>
                </Button>
                <Button asChild className="justify-center w-full">
                  <Link href="/auth/signup" onClick={() => setIsMenuOpen(false)}>
                    Sign up
                  </Link>
                </Button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </nav>
  )
}