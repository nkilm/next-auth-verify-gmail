import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

import { LoginIcon } from "@/components/Icons";

export default function Home() {
  // data contains all the user data like name, email, image, etc.
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div className="flex flex-col items-center justify-center h-screen gap-7">
          <h1 className="text-base text-white/80 sm:text-xl">
            Hello <span className="font-semibold">{session.user?.name}</span>👋
          </h1>
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-sm sm:text-lg text-white/80">
              signed in as{" "}
              <span className="text-transparent pointer-events-none bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                {session.user?.email}
              </span>
            </h2>
            <button
              className="py-2 rounded-md outline-none focus:outline-none focus:ring-1 focus:ring-blue-400/25 bg-[#222] w-2/4 sm:max-w-xs cursor-pointer text-[#a1a1a1] hover:bg-[#2e2e2e] hover:text-[#fff] transition-colors duration-200 ease-in-out text-sm sm:text-base"
              onClick={() => signOut()}
            >
              Log out
            </button>
          </div>
        </div>
      ) : (
        <div className="h-screen bg-[#000] flex justify-center items-center flex-col">
          <div>
            <h1 className="text-xl font-semibold sm:text-3xl text-white/80">
              <Link
                href="https://next-auth.js.org/"
                target="_blank"
                className="border-b border-b-pink-400/80"
              >
                next-auth
              </Link>{" "}
              example for Google
            </h1>

            <div className="flex flex-col items-center justify-center w-full gap-3 px-10 mt-7 text-white/80">
              <button
                className="py-2 rounded-md outline-none focus:outline-none focus:ring-1 focus:ring-blue-400/25 bg-[#222] w-full sm:max-w-md cursor-pointer text-[#a1a1a1] hover:bg-[#2e2e2e] hover:text-[#fff] transition-colors duration-200 ease-in-out flex items-center justify-center gap-1 text-sm sm:text-base"
                type="submit"
                onClick={() => signIn("google")}
              >
                Login via Gmail{" "}
                <span>
                  <LoginIcon />
                </span>
              </button>
            </div>
          </div>
          <div className="mt-20 text-xs text-white/50 group sm:text-sm">
            Code:{" "}
            <Link
              href="https://github.com/nkilm/next-auth-verify-gmail"
              target="_blank"
              className="transition-colors duration-200 ease-in-out border-b border-b-pink-400/30 group-hover:text-white/70"
            >
              https://github.com/nkilm/next-auth-verify-gmail
            </Link>{" "}
          </div>
        </div>
      )}
    </>
  );
}
