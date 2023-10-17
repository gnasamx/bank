"use client";

import Link from "next/link";
import GeneralIcon from "./icons/general";
import SavingsIcon from "./icons/savings";

export default function NavLink({ label, href }) {
  return (
    <Link
      href={href}
      className="appearance-none scale-100 transition-transform active:scale-[0.98]"
    >
      <div className="group relative my-0.5 flex items-center rounded-lg px-2 py-1.5 text-left text-sm font-medium transition-colors text-secondary hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800">
        <div className="mr-2 transition-colors text-gray-600 dark:text-gray-300">
          {label === "General" ? (
            <GeneralIcon />
          ) : label === "Savings" ? (
            <SavingsIcon />
          ) : (
            "?"
          )}
        </div>
        <span className="flex-1">{label}</span>
      </div>
    </Link>
  );
}
