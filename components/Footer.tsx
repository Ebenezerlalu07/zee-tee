"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f3f2ef]">
      <div className="px-15  py-4 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* LEFT : LINKS */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-6 text-[15px] text-gray-700">
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-black transition">
            About
          </Link>
          <Link href="/service" className="hover:text-black transition">
            Service
          </Link>
          <Link href="/gallery" className="hover:text-black transition">
            Gallery
          </Link>
          <Link href="/contact" className="hover:text-black transition">
            Contact
          </Link>
        </nav>

        {/* RIGHT : COPYRIGHT */}
        <p className="text-[14px] text-gray-700 text-center md:text-right">
          © Copyright Chatta Events
        </p>

      </div>
    </footer>
  );
}
