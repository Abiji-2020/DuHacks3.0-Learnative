"use client";

import { Monserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/Link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Monserrat({
  weight: "600",
  subsets: ["latin"]
});

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

return(
  <nav className="p-4 bg-transparent flex items-center justify-between">
  </nav>
  )
}
