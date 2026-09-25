
"use client";

import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import useWorkout from "../hooks/useWorkout";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const { plan, saved } = useWorkout();
    const pathname = usePathname();

    const [menuOpen, setMenuOpen] = useState(false);

    const isMyPlan = pathname === "/my-plan";

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-400 bg-[#111318]">

            {/* Mobile Navbar */}
            <div className="relative grid grid-cols-3 items-center p-4 md:hidden">

                {/* Hamburger */}
                <div className="flex justify-start">
                    <button
                        type="button"
                        onClick={handleMenuToggle}
                        className="flex cursor-pointer items-center"
                        aria-label="Toggle menu"
                    >
                        <RxHamburgerMenu className="text-2xl" />
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute left-4 top-16 z-50 w-48 rounded-xl border border-gray-700 bg-[#222630] p-2 shadow-xl">

                        <ul className="menu menu-sm w-full">

                            <li>
                                <Link
                                    href="/"
                                    onClick={handleMenuClose}
                                    className={
                                        !isMyPlan
                                            ? "bg-[#C2F800] text-black"
                                            : ""
                                    }
                                >
                                    Workouts
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/my-plan"
                                    onClick={handleMenuClose}
                                    className={
                                        isMyPlan
                                            ? "bg-[#C2F800] text-black"
                                            : ""
                                    }
                                >
                                    My Plan
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/my-plan"
                                    onClick={handleMenuClose}
                                >
                                    Plan ({plan.length})
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/my-plan"
                                    onClick={handleMenuClose}
                                >
                                    Saved ({saved.length})
                                </Link>
                            </li>

                        </ul>
                    </div>
                )}

                {/* Center Logo */}
                <Link
                    href="/"
                    onClick={handleMenuClose}
                    className="flex items-center justify-center gap-1"
                >
                    <Image
                        src="/logo.png"
                        alt="FitLog logo"
                        width={20}
                        height={20}
                    />

                    <h2 className="font-bold">
                        FITLOG
                    </h2>
                </Link>

                {/* Mobile Badges */}
                <div className="flex justify-end gap-1">
                    <Link
                        href="/my-plan"
                        className="rounded-full bg-[#ccff00] px-2 py-1 text-xs font-bold text-black"
                    >
                        {plan.length}
                    </Link>

                    <Link
                        href="/my-plan"
                        className="rounded-full border border-[#ccff00] px-2 py-1 text-xs font-bold text-[#ccff00]"
                    >
                        {saved.length}
                    </Link>
                </div>
            </div>

            {/* Desktop Navbar */}
            <div className="hidden items-center justify-between p-4 md:flex">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-1"
                >
                    <Image
                        src="/logo.png"
                        alt="FitLog logo"
                        width={20}
                        height={20}
                    />

                    <h2 className="font-bold">
                        FITLOG
                    </h2>
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-2">

                    <Link
                        href="/"
                        className={`btn ${
                            !isMyPlan
                                ? "rounded-2xl bg-[#C2F800] p-2 text-black"
                                : "btn-neutral btn-outline"
                        }`}
                    >
                        Workouts
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`btn ${
                            isMyPlan
                                ? "rounded-2xl bg-[#C2F800] p-2 text-black"
                                : "btn-neutral btn-outline"
                        }`}
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
                        Plan {plan.length}
                    </Link>

                    <Link
                        href="/my-plan"
                        className="rounded-full border border-[#ccff00] px-4 py-2 text-sm font-bold text-[#ccff00] transition hover:bg-[#ccff00] hover:text-black"
                    >
                        Saved {saved.length}
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
