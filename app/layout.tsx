import type { Metadata } from "next";
import { League_Spartan, Silkscreen } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/nav-bar";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--leagueSpartan",
});
const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--silkscreen",
});

export const metadata: Metadata = {
  robots: {index:true, follow:true},
  title: "Uzair-Masood Portfolio",
  description: "Next app Portfolio",
  verification:{
    google: 'oWFmoJ1ROoUAsi20efUAxZNowTMvkqWdRj7m1pRVY3k'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${
          (leagueSpartan.variable, silkscreen.variable)
        } w-screen h-screen bg-[#1B1B1D] overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
