// import type { PropsWithChildren } from "react";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Profile Page",
// };

// export default function Layout({ children }: PropsWithChildren) {
//   return children;
// }

// src/app/(dashboard)/layout.tsx
import { Sidebar } from "@/components/Layouts/sidebar";
import { Header } from "@/components/Layouts/header";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="w-full bg-gray-2 dark:bg-[#020d1a]">
        <Header />
        <main className="isolate mx-auto w-full max-w-screen-2xl overflow-hidden p-4 md:p-6 2xl:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
