"use client";

import "@/css/satoshi.css";
import "@/css/style.css";
import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import type { PropsWithChildren } from "react";
import NextTopLoader from "nextjs-toploader";
import { Providers } from "../providers";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <Providers>
      <NextTopLoader color="#5750F1" showSpinner={false} />
      <div className="min-h-screen bg-gray-2 dark:bg-[#020d1a] flex items-center justify-center p-4">
        {children}
      </div>
    </Providers>
  );
}
