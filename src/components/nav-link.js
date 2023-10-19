"use client";

import Link from "next/link";
import GeneralIcon from "./icons/general";
import SavingsIcon from "./icons/savings";

export default function NavLink({ label, href }) {
  return (
    <Link
      href={href}
      className="scale-100 appearance-none transition-transform active:scale-[0.98]"
    >
      <div className="group relative my-0.5 flex items-center rounded-lg px-2 py-1.5 text-left text-sm font-medium text-secondary transition-colors hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-800">
        <div className="mr-2 text-gray-600 transition-colors dark:text-gray-300">
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
