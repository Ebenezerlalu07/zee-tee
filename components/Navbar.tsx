"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Service", href: "/service" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <>
            <header className="fixed top-0 left-0 z-50 w-full border-b bg-white">
                <div className="px-10 py-4 flex items-center justify-between">

                    {/* LEFT : LOGO */}
                    <div className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Zee Tee Logo"
                            width={150}
                            height={150}
                            priority
                        />
                    </div>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex flex-1 justify-center overflow-hidden">
                        <nav
                            className={`
                flex gap-10 transition-all duration-500 ease-out
                ${!open
                                    ? "opacity-100 translate-x-0 pointer-events-auto"
                                    : "opacity-0 translate-x-20 pointer-events-none"}
              `}
                        >
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`text-[20px] font-medium transition ${isActive(item.href)
                                            ? "text-[#D53F52]"
                                            : "text-black hover:text-[#D53F52]"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* HAMBURGER */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex flex-col gap-1.5 cursor-pointer group"
                        aria-label="Menu"
                    >
                        <span className="w-6 h-0.5 bg-black transition "></span>
                        <span className="w-6 h-0.5 bg-black transition "></span>
                        <span className="w-6 h-0.5 bg-black transition "></span>
                    </button>
                </div>

                {/* MOBILE MENU */}
                <div
                    className={`
            md:hidden overflow-hidden transition-all duration-500 ease-out
            ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
                >
                    <nav className="flex flex-col items-center gap-6 py-6 bg-white">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`text-lg font-medium transition ${isActive(item.href)
                                        ? "text-[#D53F52]"
                                        : "text-black hover:text-[#D53F52]"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Spacer to avoid content hidden behind fixed navbar */}
            <div className="h-[90px]" />
        </>
    );
}
