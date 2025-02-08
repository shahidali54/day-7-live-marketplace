import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";
import { GoChevronDown } from "react-icons/go";
import { IoPersonOutline, IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { HiBars3BottomRight } from "react-icons/hi2";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <ClerkProvider>
      <div className="w-full px-4 md:px-6 py-4 bg-white font-sans font-semibold sticky top-0 z-50">
        <div className="flex justify-between items-center">
          
          <div className="flex items-center gap-3 md:gap-2 lg:gap-12">
            <h2 className="text-2xl font-bold">Bandage</h2>
            <nav className="hidden md:flex">
              <ul className="flex gap-x-6">
                {[
                  { name: "Home", path: "/" },
                  { name: "Shop", path: "/productpage", icon: <GoChevronDown /> },
                  { name: "About", path: "/about" },
                  { name: "Blog", path: "/multiy-components/home" },
                  { name: "Contact", path: "/contact" },
                  { name: "Pages", path: "/multiy-components/teamsection" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link href={item.path} className="hover:text-blue-500 flex items-center gap-1">
                      {item.name} {item.icon && item.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-x-4">
            <div className="hidden md:flex items-center gap-x-6">
              <div className="flex items-center gap-x-2 text-[#23A6F0]">
                <IoPersonOutline size={20} />
                <div>
                  <SignedOut>
                    <SignInButton mode="modal" />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
              </div>
              <ul className="flex items-center gap-x-4 text-[#23A6F0]">
                {[IoSearch, FiShoppingCart, CiHeart].map((Icon, index) => (
                  <li key={index}>
                    <Link href={index === 1 ? "/cart" : index === 2 ? "/wishlist" : "/"} className="hover:text-blue-500 flex items-center gap-x-1">
                      <Icon size={24} />
                      {index > 0 && <div>1</div>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex md:hidden items-center gap-x-4">
              <IoSearch size={24} className="text-[#23A6F0]" />
              <Link href={'/cart'}>
                <FiShoppingCart size={24} className="text-[#23A6F0]" />
              </Link>
              <Sheet>
                <SheetTrigger>
                  <HiBars3BottomRight size={30} className="text-black" />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col justify-center items-center gap-y-6 text-2xl font-semibold text-[#39393a]">
                    <ul className="flex flex-col items-center gap-8">
                      {[
                        { name: "Home", path: "/" },
                        { name: "Shop", path: "/productpage", icon: <GoChevronDown /> },
                        { name: "About", path: "/about" },
                        { name: "Blog", path: "/multiy-components/heart" },
                        { name: "Contact", path: "/contact" },
                        { name: "Pages", path: "/multiy-components/teamsection" },
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-1">
                          <Link href={item.path} className="hover:text-blue-500 text-white">
                            {item.name} {item.icon && item.icon}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col items-center gap-6 text-white">
                      <div className="flex flex-col gap-3 items-center">
                        <IoPersonOutline size={30} />
                        <p>Login / Register</p>
                      </div>
                      <ul className="flex items-center gap-x-4">
                        {[IoSearch, FiShoppingCart, CiHeart].map((Icon, index) => (
                          <li key={index} className="flex items-center gap-x-1 hover:text-blue-900">
                            <Icon size={24} />
                            {index > 0 && <div>1</div>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </ClerkProvider>
  );
}
