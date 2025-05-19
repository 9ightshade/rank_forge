import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CivicAuthProvider } from "@civic/auth-web3/nextjs";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'RankForge | Contributor Platform',
  description: 'Centralized platform for idan-devs repo contributors',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
           <CivicAuthProvider>
        <div className="min-h-screen flex flex-col">
    
          <main className="flex-grow">
            {children}
          </main>
        
        </div>
        </CivicAuthProvider>
      </body>
    </html>
  );
}
