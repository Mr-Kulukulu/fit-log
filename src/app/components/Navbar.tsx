"use client";

import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    return (
        <nav className="border-b border-gray-400">
            {/* Mobile Navbar */}
            <div className="grid grid-cols-3 items-center p-4 md:hidden">

                {/* Hamburger */}
                <div className="flex justify-start">
                    <RxHamburgerMenu className="cursor-pointer text-2xl" />
                </div>

                {/* Center Logo */}
                <Link href="/" className="flex items-center justify-center gap-1">
                    <Image
                        src="/logo.png"
                        alt="FitLog logo"
                        width={20}
                        height={20}
                    />
                    <h2 className="font-bold">FITLOG</h2>
                </Link>

                {/* Badges */}
                <div className="flex justify-end gap-1">
                    <Link
                        href="/my-plan"
                        className="rounded-full bg-[#ccff00] px-2 py-1 text-xs font-bold text-black"
                    >
                        0
                    </Link>

                    <Link
                        href="/my-plan"
                        className="rounded-full border border-[#ccff00] px-2 py-1 text-xs font-bold text-[#ccff00]"
                    >
                        0
                    </Link>
                </div>
            </div>

            {/* Desktop Navbar */}
            <div className="hidden items-center justify-between p-4 md:flex">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-1">
                    <Image
                        src="/logo.png"
                        alt="FitLog logo"
                        width={20}
                        height={20}
                    />
                    <h2 className="font-bold">FITLOG</h2>
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-2">
                    <Link
                        href="/"
                        className="btn btn-neutral btn-outline"
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className="btn btn-neutral btn-outline"
                    >
                        My Plan
                    </Link>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-2">
                    <Link
                        href="/my-plan"
                        className="rounded-full bg-[#ccff00] px-4 py-2 text-sm font-bold text-black transition hover:scale-105"
                    >
                        Plan 0
                    </Link>

                    <Link
                        href="/my-plan"
                        className="rounded-full border border-[#ccff00] px-4 py-2 text-sm font-bold text-[#ccff00] transition hover:bg-[#ccff00] hover:text-black"
                    >
                        Saved 0
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;