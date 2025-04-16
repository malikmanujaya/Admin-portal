// src/app/(auth)/auth/sign-in/page.tsx
"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { SignUpForm } from "./_components/sign-up-form";

export default function SignUp() {
  return (
    <>
      {/* <Breadcrumb pageName="Sign In" /> */}

      <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card w-full">
        <div className="flex flex-wrap items-center">
          <div className="w-full xl:w-1/3">
            <div className="w-full p-4 sm:p-12.5 xl:p-15">
              <SignUpForm />
            </div>
          </div>

          <div className="hidden w-full p-7.5 xl:block xl:w-2/3">
            <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:!bg-dark-2 dark:bg-none">
              {/* <Link className="mb-10 inline-block" href="/">
                <Image
                  className="hidden dark:block"
                  src={"/images/logo/logo.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
                <Image
                  className="dark:hidden"
                  src={"/images/logo/logo-dark.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
              </Link> */}
<Link className="mb-10 inline-block" href="/">
<h1 className="mb-0.5 text-heading-5 font-bold text-dark dark:hidden">
    Admin Portal
  </h1>

  {/* Dark Mode Text */}
  <h1 className="mb-0.5 text-heading-5 font-bold text-white hidden dark:block">
  Admin Portal
  </h1>
  </Link>

              <p className="mb-3 text-xl font-medium text-dark dark:text-white">
                Sign up to create your account
              </p>

              <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
                Welcome Back!
              </h1>

              <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
              For create your account please fill up the necessary fields below
              </p>

              <div className="mt-31">
                <Image
                  src={"/images/grids/grid-02.svg"}
                  alt="Illustration"
                  width={405}
                  height={325}
                  className="mx-auto dark:opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
