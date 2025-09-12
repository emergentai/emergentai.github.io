"use client";
import Link from "next/link";
import React from "react";
import { NavigationRoutes } from "../constants";
import { ThemeToggle } from "./theme-toggle";

const navigation = Object.values(NavigationRoutes);

export function Navigation() {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // Only handle internal anchor links
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100; // Account for fixed nav height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    };
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in px-4 w-full max-w-fit">
            <div className="bg-white/80 dark:bg-zinc-900/90 backdrop-blur-xl rounded-full border border-white/30 dark:border-zinc-700/50 shadow-2xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.8)] px-3 sm:px-6 py-2 sm:py-3 ring-1 ring-black/5 dark:ring-white/10">
                <div className="flex items-center justify-center gap-2 sm:gap-4">
                    <ul className="flex items-center justify-center gap-1 sm:gap-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={(e) => handleSmoothScroll(e, item.href)}
                                className="text-xs sm:text-sm duration-300 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white font-medium px-2 sm:px-3 py-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all whitespace-nowrap"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </ul>
                    <div className="w-px h-3 sm:h-4 bg-zinc-300 dark:bg-zinc-600" />
                    <Link
                        href="https://calendly.com/emergentai/intro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all duration-300 whitespace-nowrap shadow-lg"
                    >
                        Book Call
                    </Link>
                    <div className="w-px h-3 sm:h-4 bg-zinc-300 dark:bg-zinc-600" />
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}