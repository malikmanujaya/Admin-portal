// src/app/page.tsx
import { redirect } from "next/navigation";

export default function RootRedirect() {
  redirect("/auth/sign-in");
}
