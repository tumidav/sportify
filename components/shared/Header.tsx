import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            width={128}
            height={38}
            alt="Sportify Logo"
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems></NavItems>
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSwitchSessionUrl="/"  />
            <MobileNav/>

          
          </SignedIn>
          <SignedOut>
            <Button className="rounded-full" size="lg" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </SignedOut>
        </div>
        

      

      </div>
    </header>
  );
};

export default Header;
