"use client";
import { PropsWithChildren } from "react";

export const SimpleCard: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="overflow-hidden relative duration-300 border rounded-xl hover:border-zinc-400/50 dark:hover:border-zinc-400/50 border-zinc-300 dark:border-zinc-600 bg-zinc-50/50 dark:bg-zinc-900/20">
            {children}
        </div>
    );
};