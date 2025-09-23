"use client";
import { PropsWithChildren } from "react";

export const SimpleCard: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="group overflow-hidden relative border rounded-xl border-zinc-300 dark:border-zinc-600 bg-zinc-50/50 dark:bg-zinc-900/20 transition-transform duration-200 hover:shadow-lg hover:shadow-zinc-900/5 dark:hover:shadow-white/5 hover:-translate-y-0.5 cursor-pointer">
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};