import darkLogo from "@/assets/logos/dark.svg";
import logo from "@/assets/logos/main.svg";
import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-8 max-w-[10.847rem]">
      {/* <Image
        src={logo}
        fill
        className="dark:hidden"
        alt="AIA logo"
        role="presentation"
        quality={100}
      /> */}

      {/* <h1 className="mb-0.5 text-heading-5 font-bold text-dark dark:text-white dark:hidden">
          AIA
        </h1> */}

      {/* <Image
        src={darkLogo}
        fill
        className="hidden dark:block"
        alt="AIA logo"
        role="presentation"
        quality={100}
      /> */}

{/* <h1 className="mb-0.5 text-heading-5 font-bold text-dark dark:text-white dark:hidden hidden dark:block">
          AIA
        </h1> */}

<h1 className="mb-0.5 text-heading-5 font-bold text-dark dark:hidden">
    AIA
  </h1>

  {/* Dark Mode Text */}
  <h1 className="mb-0.5 text-heading-5 font-bold text-white hidden dark:block">
    AIA
  </h1>

    </div>
  );
}
