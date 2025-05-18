"use client";
import { useUser, useWallet } from "@civic/auth-web3/react";
import Link from "next/link";
import { useCallback, useState, useEffect, useRef } from "react";
import { userHasWallet } from "@civic/auth-web3";
import Image from "next/image";
import { User } from "lucide-react";

export default function NavBar() {
  const [active, setActive] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navRef = useRef(null);
  const { signIn, signOut, user } = useUser();

  const userContext = useUser();
  const wallet = useWallet({
    type: "solana",
  });

  // Set active menu based on current path on initial load
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/") {
      setActive("Home");
    } else if (path.includes("about")) {
      setActive("About");
    } else if (path.includes("dashboard")) {
      setActive("dashboard");
    }else if (path.includes("leaderboard")) {
      setActive("leaderboard");
    }
  }, []);

  // Handle user and wallet
  useEffect(() => {
    if (user && !userHasWallet(userContext)) {
      userContext
        .createWallet()
        .catch((err) => console.error("Error creating wallet:", err));
    }
  }, [user, userContext]);

  const doSignIn = useCallback(() => {
    setIsLoading(true);
    signIn()
      .then(() => {
        console.log("Sign-in completed successfully");
      })
      .catch((error) => {
        console.error("Sign-in failed:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [signIn]);

  const doSignOut = useCallback(() => {
    setIsLoading(true);
    signOut()
      .then(() => {
        console.log("Sign-out completed successfully");
      })
      .catch((error) => {
        console.error("Sign-out failed:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [signOut]);

  // Handle scroll effect for navbar with throttling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        navRef.current &&
        !(navRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Close menu on ESC key
    const handleEscKey = (event: KeyboardEvent): void => {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Leaderboard", path: "/leaderboard" },
  ];

  interface TruncateAddressProps {
    address: string | null | undefined;
  }

  const truncateAddress = (
    address: TruncateAddressProps["address"]
  ): string => {
    return address ? `${address.slice(0, 4)}...${address.slice(-4)}` : "...";
  };

  return (
    <nav
      ref={navRef}
      className={`py-3 fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md backdrop-blur-md bg-opacity-95"
          : "bg-gray-50"
      }`}
      aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with hover effect */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center group"
              onClick={() => setActive("Home")}>
              <span className="text-blue-600 font-bold text-2xl tracking-tight transition-transform group-hover:scale-105 duration-300">
                Rank
              </span>
              <span className="text-black font-bold text-2xl tracking-tight transition-all duration-300">
                Forge
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative group py-1 px-1 transition-all duration-200 ${
                  active === item.name
                    ? "text-black font-medium"
                    : "text-gray-600 hover:text-black"
                }`}
                onClick={() => setActive(item.name)}
                aria-current={active === item.name ? "page" : undefined}>
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                    active === item.name
                      ? "bg-blue-500 scale-100"
                      : "bg-blue-500 scale-0 group-hover:scale-100"
                  }`}></span>
              </Link>
            ))}
          </div>

          {/* Authentication Buttons for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {!user ? (
              <button
                onClick={doSignIn}
                disabled={isLoading}
                className="px-5 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 disabled:opacity-70 cursor-pointer ">
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Connecting...
                  </span>
                ) : (
                  "Login / Sign up"
                )}
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                {wallet?.address && (
                  <div className="bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-700 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                    {truncateAddress(wallet.address)}
                  </div>
                )}

                <button
                  onClick={doSignOut}
                  disabled={isLoading}
                  className="px-5 py-2 bg-blue-500 text-white flex items-center gap-2 rounded-full hover:bg-blue-600 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 disabled:opacity-70 cursor-pointer ">
                  {user.picture ? (
                    <Image
                      src={user.picture}
                      alt="User Avatar"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  ) : (
                    <User size={18} />
                  )}
                  {isLoading ? "Signing out..." : "Sign out"}
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button with animation */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition-colors duration-300 p-2 rounded-md cursor-pointer "
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? "rotate-45 top-3" : "rotate-0 top-1"
                  }`}></span>
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100 top-3"
                  }`}></span>
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? "-rotate-45 top-3" : "rotate-0 top-5"
                  }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with slide animation */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-[61px] left-0 right-0 bottom-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex flex-col p-5 h-full">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`px-4 py-3 rounded-lg transition-all duration-200 ${
                  active === item.name
                    ? "text-blue-600 font-medium bg-blue-50"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => {
                  setActive(item.name);
                  setMobileMenuOpen(false);
                }}
                aria-current={active === item.name ? "page" : undefined}>
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            {!user ? (
              <button
                onClick={doSignIn}
                disabled={isLoading}
                className="w-full px-4 py-3 flex justify-center items-center border border-blue-500 text-blue-500 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 focus:outline-none cursor-pointer focus:ring-2 focus:ring-blue-300 disabled:opacity-70">
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Connecting...
                  </span>
                ) : (
                  "Login / Sign up"
                )}
              </button>
            ) : (
              <>
                {wallet?.address && (
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center font-medium text-gray-700 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                    Wallet: {truncateAddress(wallet.address)}
                  </div>
                )}

                <button
                  onClick={doSignOut}
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-blue-500 text-white flex items-center justify-center gap-2 rounded-lg hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer disabled:opacity-70">
                  {user.picture ? (
                    <Image
                      src={user.picture}
                      alt="User Avatar"
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  ) : (
                    <User size={18} />
                  )}
                  {isLoading ? "Signing out..." : "Sign out"}
                </button>
              </>
            )}
          </div>

          <div className="mt-auto pb-6 text-center text-gray-500 text-sm">
            <p>© RankForge {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
