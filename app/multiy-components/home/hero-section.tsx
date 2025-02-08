import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-20">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/shop-hero.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="w-full h-full"
          priority
        />
      </div>

      <div className="h-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start text-center lg:text-left text-white w-full max-w-5xl">
        <div className="lg:w-1/2">
          <p className="text-xs sm:text-sm md:text-lg">SUMMER 2020</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-6 whitespace-nowrap max-w-fit">
            NEW COLLECTION
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-semibold mb-6">
            We know how large objects will act,
            <br />
            but things on a small scale.
          </p>

          <Link href="/productpage">
            <button className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-bold bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
