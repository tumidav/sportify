import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import NavItems from "./NavItems";
import { Separator } from "@radix-ui/react-separator";

const MobileNav = () => {
  return (
    <nav className="md:hidden ">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image src="/assets/icons/menu.svg" alt="Menu-icon" width={24} height={24} className="cursor-pointer"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
         <Image src="/assets/images/logo.png" alt="Sportify Logo" width={128} height={38} />
         <Separator className="border border-gray-50">

         </Separator>
         <NavItems></NavItems> 
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
