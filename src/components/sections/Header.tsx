import { navItems } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-black ">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 py-7 max-sm:py-5">
        {/* <Image
          src={"/images/icons/apple.svg"}
          alt="logo"
          width={24}
          height={24}
        /> */}
        <div className="size-10"></div>

        <nav className="space-x-7 max-md:hidden">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-white/70">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex gap-10">
          {/* <Image
            src={"/images/icons/search.svg"}
            alt="logo"
            width={24}
            height={24}
          />
          <Image
            src={"/images/icons/bag.svg"}
            alt="logo"
            width={24}
            height={24}
          /> */}
          <div className="size-10"></div>
          <div className="size-10"></div>
        </div>
      </div>
      <div className="bg-[#1D1D1F] py-5 padding-x">
        <p className="text-white/90  mx-auto sm:text-lg text-center text-sm text-balance">
          Celebrate with ₹5000 instant cashback on iPhone 17 Pro with eligible
          cards. Plus up to 12 months of No Cost EMI.{" "}
          <Link href={"/"} className="text-blue-600">
            Buy
          </Link>
        </p>
      </div>
    </header>
  );
};

export default Header;
