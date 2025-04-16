import { EmailIcon, PasswordIcon, UserIcon } from "@/assets/icons";
import GoogleSigninButton from "@/components/Auth/GoogleSigninButton";
import InputGroup from "@/components/FormElements/InputGroup";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import Link from "next/link";

export function SignUpForm() {
  return (
    <>
    

    <GoogleSigninButton text="Sign up" />
    
          <div className="my-6 flex items-center justify-center">
            <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
            <div className="block w-full min-w-fit bg-white px-3 text-center font-medium dark:bg-gray-dark">
              Or sign up with email
            </div>
            <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
          </div>

    {/* <ShowcaseSection title="Sign Up Form" className="!p-6.5"> */}
      <form action="#">
        <InputGroup
          label="Name"
          type="text"
          placeholder="Enter full name"
          className="mb-4.5"
          icon={<UserIcon />}
          
        />

        <InputGroup
          label="Email"
          type="email"
          placeholder="Enter email address"
          className="mb-4.5" 
          icon={<EmailIcon />}

        />

        <InputGroup
          label="Password"
          type="password"
          placeholder="Enter password"
          className="mb-4.5"
          icon={<PasswordIcon />}
          
        />

        <InputGroup
          label="Re-type Password"
          type="password"
          placeholder="Re-type password"
          className="mb-5.5"
          icon={<PasswordIcon />}
          
        />

        <button className="flex w-full justify-center rounded-lg bg-primary p-[13px] font-medium text-white hover:bg-opacity-90">
          Create Account
        </button>
      </form>
    {/* </ShowcaseSection> */}

    <div className="mt-6 text-center">
        <p>
        Already have an account?{" "}
          <Link href="/auth/sign-in" className="text-primary">
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
}
