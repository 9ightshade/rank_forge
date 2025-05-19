import Link from "next/link"
import { Award, Github, Twitter, Mail, Heart, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-10 md:py-16">
        {/* Top section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand section */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="group flex items-center gap-2 transition-colors">
              <Award className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
              <span className="text-xl font-bold tracking-tight">RankForge</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              A platform for idan-devs contributors to track progress and get recognized for their valuable open-source contributions.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="mailto:contact@rankforge.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Platform links */}
          <div className="lg:ml-8">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/leaderboard" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link href="/contributors" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Contributors
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Documentation
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  Contribution Guidelines
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  API Access
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:ml-auto">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-3">Subscribe to our newsletter for updates</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-md border border-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" 
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 cursor-pointer text-primary-foreground text-sm px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} RankForge. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <span className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="h-3 w-3 fill-red-500 text-red-500" />
              <span>by idan-devs</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}