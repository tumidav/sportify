import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

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

        <div>
          <SignedIn>
            <UserButton afterSwitchSessionUrl="/"  />
          </SignedIn>
        </div>
        <MobileNav>
          
        </MobileNav>

      </div>
    </header>
  );
};

export default Header;
