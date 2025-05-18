"use client";
import { useState } from "react";
import {
  Facebook,
  Youtube,
  Twitter,
  Instagram,
  Mail,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ message: "", type: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormStatus({
        message: "Please enter a valid email address",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setFormStatus({ message: "Thank you for subscribing!", type: "success" });
      setEmail("");
      setIsSubmitting(false);

      // Auto-clear success message after 3 seconds
      setTimeout(() => {
        setFormStatus({ message: "", type: "" });
      }, 3000);
    }, 1000);
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "About Us", href: "/about" },
    { name: "leaderboard", href: "/leaderboard" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Contributor", href: "/contributor" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
    { icon: <Mail size={20} />, href: "#", label: "Email" },
  ];

  return (
    <div className="flex flex-col bg-gradient-to-br from-blue-500 to-blue-600">
      {/* Hero CTA Section */}
      <div className="px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left: Text Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Join Our Community{" "}
                <span className="text-yellow-300">Today</span>
              </h2>
              <p className="text-white text-base md:text-lg opacity-90 max-w-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, ut. Ducimus eos excepturi quidem aspernatur ipsa
                accusamus, sapiente aperiam ratione!
                <span className="block mt-2 italic">- IdanDevs</span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 pr-12 rounded-lg bg-white text-gray-800 outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email address"
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    className={`absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 rounded-md p-2 ${
                      isSubmitting
                        ? "bg-gray-200"
                        : "bg-blue-600 hover:bg-blue-700"
                    } text-white transition-colors`}
                    disabled={isSubmitting}
                    aria-label="Subscribe">
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <ArrowRight size={20} />
                    )}
                  </button>
                </div>

                {formStatus.message && (
                  <p
                    className={`text-sm ${
                      formStatus.type === "error"
                        ? "text-red-200"
                        : "text-green-200"
                    }`}>
                    {formStatus.message}
                  </p>
                )}

                <p className="text-xs text-white/70">
                  By subscribing, you agree to our{" "}
                  <Link href="/privacy" className="underline hover:text-white">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>

            {/* Right: Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-blue-200/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <div className="absolute inset-0 bg-blue-100/10 rounded-full animate-pulse"></div>
                {/* place an image here */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="w-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24">
          <path
            d="M0,56 C240,150 480,0 720,56 C960,112 1200,28 1440,56 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <footer className="bg-white pt-4 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Footer Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
            {/* Column 1: About */}
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
                doloremque?{" "}
              </p>
              <div className="flex space-x-3 mt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-blue-100 p-2 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                    aria-label={social.label}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {footerLinks.slice(0, 3).map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1">
                      <span className="text-blue-500">›</span> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                {footerLinks.slice(3).map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1">
                      <span className="text-blue-500">›</span> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Contact Us
              </h3>
              <address className="not-italic text-gray-600">
                <p className="mb-2">123 Community Avenue</p>
                <p className="mb-2">Cityville, ST 12345</p>
                <p className="mb-2">
                  <a href="tel:+11234567890" className="hover:text-blue-600">
                    +1 (123) 456-7890
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:info@example.org"
                    className="hover:text-blue-600">
                    info@example.org
                  </a>
                </p>
              </address>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center py-6 text-gray-500 text-sm">
            <div className="mb-4 md:mb-0">
              © {currentYear} IdanDevs. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link
                href="/terms"
                className="hover:text-blue-600 transition-colors">
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
              <Link
                href="/accessibility"
                className="hover:text-blue-600 transition-colors">
                Accessibility
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-blue-600 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
