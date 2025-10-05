import React from "react";

const Hero = () => {
  return (
    <section className="bg-black">
      <div className="relative pt-10 2xl:h-[86.3vh] xl:pt-0">
        <video
          src="/video/iPhone-17-2.mp4"
          autoPlay
          muted
          playsInline
          className="h-full mx-auto"
        ></video>

        <div className="flex flex-col gap-y-3 items-center absolute bottom-[5%] left-0 w-full">
          <button className="bg-[#0076DF] w-max hover:bg-[#0090df] transition-colors duration-300 text-white font-semibold text-xl px-6 py-2 rounded-full">
            Buy
          </button>
          <p className="text-white font-semibold text-xl">
            From ₹134900.00* or ₹10825.00/mo. for 12 mo.‡
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
