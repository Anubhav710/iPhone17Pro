import { heroVideo } from "@/utils";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative  bg-black">
      <div className="padding-x relative max-md:h-[80vh] md:h-[70vh] lg:h-[77vh] xl:h-[86vh] ">
        <video
          src={heroVideo}
          autoPlay
          muted
          playsInline
          height={100}
          className="h-auto object-contain 2xl:pt-10  max-h-full w-full max-md:hidden absolute bottom-0 left-0 "
        ></video>

        <Image
          width={420}
          height={776}
          src={"/images/hero-image-mobile.jpg"}
          alt="hero-image"
          className="h-full md:hidden object-contain w-full pt-10"
        />

        <div className="flex flex-col gap-y-3 max-md:bg-black/80 max-md:backdrop-blur-xl items-center b py-7 absolute -bottom-1 left-0 w-full">
          <button className="bg-[#0076DF] w-max text-sm hover:bg-[#0090df] transition-colors duration-300 text-white font-semibold sm:text-xl px-6 py-2 rounded-full">
            Buy
          </button>
          <p className="text-white font-semibold md:text-xl sm:text-lg text-[0.8rem]">
            From ₹134900.00* or ₹10825.00/mo. for 12 mo.‡
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
