"use client";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Highlights />
      <div className="h-screen w-full"></div>
    </main>
  );
}
