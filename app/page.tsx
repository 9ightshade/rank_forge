"use client";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Award,
  Code,
  BarChart3,
  Users,
  ArrowRight,
  Star,
  GitPullRequest,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Image from "next/image";
// Stats data
const stats = [
  { value: "230+", label: "Active Contributors" },
  { value: "1,500+", label: "Pull Requests" },
  { value: "98%", label: "Contributor Satisfaction" },
  { value: "12K+", label: "Points Awarded" },
];
// Features data
const features = [
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "Track Contributions",
    description:
      "Log and showcase all your contributions to the idan-devs repository in one centralized platform.",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    title: "Transparent Scoring",
    description:
      "Get evaluated based on quality, complexity, and impact with detailed feedback from project admins.",
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    title: "Rank & Recognition",
    description:
      "Climb the ranks from Bronze to Platinum as you contribute more and improve your skills.",
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Community Profile",
    description:
      "Build your public profile showcasing your contributions, skills, and achievements.",
  },
  {
    icon: <GitPullRequest className="h-6 w-6 text-primary" />,
    title: "Progress Tracking",
    description:
      "Monitor your growth over time with detailed analytics and progress indicators.",
  },
  {
    icon: <Star className="h-6 w-6 text-primary" />,
    title: "Leaderboard",
    description:
      "Compete with other contributors and see where you stand in the community rankings.",
  },
];
// Testimonials data
const testimonials = [
  {
    content:
      "RankForge has completely transformed how I track my contributions. The scoring system is transparent and the feedback helps me grow.",
    author: "Alex Chen",
    role: "Senior Developer",
    avatar: "/api/placeholder/40/40",
  },
  {
    content:
      "The ranking system motivates me to contribute more and improve the quality of my work. I've learned so much since joining.",
    author: "Priya Sharma",
    role: "Full Stack Developer",
    avatar: "/api/placeholder/40/40",
  },
  {
    content:
      "As a project maintainer, RankForge helps me recognize and reward the best contributors with minimal effort.",
    author: "Marco Rossi",
    role: "Project Admin",
    avatar: "/api/placeholder/40/40",
  },
];
export default function HomePage() {
  // Observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Section visible: ${entry.target.id}`);
          }
        });
      },
      { threshold: 0.2 }
    );
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Now tracking idan-devs contributions
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Track, Measure, and Grow Your Contributions
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl mx-auto max-w-3xl">
                RankForge helps contributors to the idan-devs repository
                showcase their work, get recognized, and climb the ranks through
                a transparent scoring system.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="group transition-all hover:pr-5"
                  asChild>
                  <Link href="/auth/signup">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/leaderboard">View Leaderboard</Link>
                </Button>
              </div>
            </div>
          </div>
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-1/4 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-primary/3 blur-3xl" />
          </div>
        </section>
        {/* Stats Section */}
        <section id="stats" className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-center">
                  <div className="text-3xl font-bold text-primary md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section id="features" className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Elevate Your Contribution Experience
              </h2>
              <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-xl">
                RankForge provides the tools and visibility you need to showcase
                your skills and get recognized.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-all hover:border-primary/30 flex flex-col h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* How It Works Section */}
        <section id="how-it-works" className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Process
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                How RankForge Works
              </h2>
              <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-xl">
                A simple process to get your contributions recognized and
                scored.
              </p>
            </div>
            <div className="relative mt-16 grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              {/* Line connecting steps (desktop only) */}
              <div className="absolute top-8 left-0 hidden w-full h-0.5 bg-border md:block" />
              {/* Step 1 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground z-10">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="mt-6 text-xl font-medium">
                  Submit Your Contribution
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Log your pull requests and contributions to the idan-devs
                  repository through our simple submission form.
                </p>
              </div>
              {/* Step 2 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground z-10">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="mt-6 text-xl font-medium">Get Evaluated</h3>
                <p className="mt-2 text-muted-foreground">
                  Project admins review your work and score it based on quality,
                  complexity, and impact on the project.
                </p>
              </div>
              {/* Step 3 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground z-10">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="mt-6 text-xl font-medium">Climb the Ranks</h3>
                <p className="mt-2 text-muted-foreground">
                  Accumulate points, earn badges, and progress through ranks
                  from Bronze to Platinum as you contribute more.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Rank Tiers Section */}
        <section id="rank-tiers" className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Recognition
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Climb Through the Ranks
              </h2>
              <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-xl">
                As you contribute more and improve your skills, you&apos;ll
                progress through our tiered ranking system.
              </p>
            </div>
            <div className="mt-16 space-y-6 max-w-5xl mx-auto">
              {/* Bronze Tier */}
              <div className="rounded-lg border bg-card overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-amber-700/10 p-6 md:w-1/4 flex flex-col items-center justify-center text-center">
                    <Award className="h-12 w-12 text-amber-700" />
                    <h3 className="mt-4 text-2xl font-bold text-amber-700">
                      Bronze
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      0-100 points
                    </p>
                  </div>
                  <div className="p-6 md:w-3/4">
                    <h4 className="text-lg font-medium">Getting Started</h4>
                    <p className="mt-2 text-muted-foreground">
                      Everyone begins at Bronze tier. Complete your first few
                      contributions to start earning points and recognition.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                        <span>Access to basic contributor features</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                        <span>Appear on the community leaderboard</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Silver Tier */}
              <div className="rounded-lg border bg-card overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-gray-300/20 p-6 md:w-1/4 flex flex-col items-center justify-center text-center">
                    <Award className="h-12 w-12 text-gray-500" />
                    <h3 className="mt-4 text-2xl font-bold text-gray-500">
                      Silver
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      101-500 points
                    </p>
                  </div>
                  <div className="p-6 md:w-3/4">
                    <h4 className="text-lg font-medium">
                      Consistent Contributor
                    </h4>
                    <p className="mt-2 text-muted-foreground">
                      You&apos;ve shown dedication and are becoming a valued
                      member of the community with regular contributions.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                        <span>Special Silver badge on your profile</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                        <span>Featured in monthly contributor spotlight</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Gold Tier */}
              <div className="rounded-lg border bg-card overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-yellow-500/10 p-6 md:w-1/4 flex flex-col items-center justify-center text-center">
                    <Award className="h-12 w-12 text-yellow-500" />
                    <h3 className="mt-4 text-2xl font-bold text-yellow-500">
                      Gold
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      501-1000 points
                    </p>
                  </div>
                  <div className="p-6 md:w-3/4">
                    <h4 className="text-lg font-medium">Expert Contributor</h4>
                    <p className="mt-2 text-muted-foreground">
                      You&apos;re now among the top contributors with
                      significant impact on the project.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                        <span>Exclusive Gold badge and profile highlights</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                        <span>Priority review of your contributions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Platinum Tier */}
              <div className="rounded-lg border bg-card overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-blue-500/10 p-6 md:w-1/4 flex flex-col items-center justify-center text-center">
                    <Award className="h-12 w-12 text-blue-500" />
                    <h3 className="mt-4 text-2xl font-bold text-blue-500">
                      Platinum
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      1000+ points
                    </p>
                  </div>
                  <div className="p-6 md:w-3/4">
                    <h4 className="text-lg font-medium">Elite Contributor</h4>
                    <p className="mt-2 text-muted-foreground">
                      The highest tier reserved for the most dedicated and
                      skilled contributors to the idan-devs ecosystem.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                        <span>
                          Prestigious Platinum badge and featured status
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                        <span>Opportunity to become a project reviewer</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                        <span>Access to exclusive community events</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section id="testimonials" className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What Our Contributors Say
              </h2>
              <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-xl">
                Join the growing community of developers who have elevated their
                open source contributions with RankForge.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-card p-6 shadow-sm h-full flex flex-col">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex-grow">
                    <p className="text-muted-foreground italic">
                      &quot;{testimonial.content}&quot;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                FAQ
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-xl">
                Everything you need to know about RankForge and how it works.
              </p>
            </div>
            <div className="mt-12 mx-auto max-w-3xl">
              <div className="space-y-6">
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-lg font-medium">
                    Who can use RankForge?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    RankForge is designed for all contributors to the idan-devs
                    repository, from newcomers to seasoned developers.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-lg font-medium">
                    How are contributions scored?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Contributions are evaluated by project admins based on
                    quality, complexity, and impact. Each criterion has specific
                    metrics that are clearly communicated.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-lg font-medium">
                    Can I track contributions to other repositories?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Currently, RankForge is exclusively focused on the idan-devs
                    repository, but we plan to expand to other repositories in
                    the future.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="text-lg font-medium">
                    How do I submit my contributions?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    After creating an account, you can submit contributions via
                    our simple form. Just provide the pull request link and some
                    basic information about your work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section
          id="cta"
          className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="rounded-xl border bg-card shadow-lg px-6 py-12 md:px-12 md:py-16 relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-1/4 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -bottom-1/4 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
              </div>
              <div className="mx-auto max-w-3xl text-center relative z-10">
                <div className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-4 py-1.5 text-sm font-medium text-primary mb-6">
                  <Briefcase className="h-4 w-4" />
                  Join 230+ contributors today
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Ready to Showcase Your Contributions?
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  Join RankForge today and start building your contributor
                  profile, tracking your progress, and climbing the ranks in the
                  idan-devs community.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    className="group transition-all hover:pr-5"
                    asChild>
                    <Link href="/auth/signup">
                      Create Your Account
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/leaderboard">Explore the Leaderboard</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
