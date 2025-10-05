import { navItems } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-black">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 py-7">
        <Image
          src={"/images/icons/apple.svg"}
          alt="logo"
          width={24}
          height={24}
        />

        <nav className="space-x-7 max-md:hidden">
          {navItems.map((item) => (
            <Link href={item.href} className="text-white/70">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex gap-10">
          <Image
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
          />
        </div>
      </div>
      <div className="bg-[#1D1D1F] py-5">
        <p className="text-white/90 w-max mx-auto text-lg">
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
