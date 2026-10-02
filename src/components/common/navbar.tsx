"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { LuSearch, LuShoppingBag, LuUser } from "react-icons/lu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="border-b border-border bg-background">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-3xl font-bold tracking-tight text-foreground"
        >
          Fashion.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathName === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium uppercase transition-colors  ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Buttons */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            {/* search */}
            <button className="rounded-full p-2 text-foreground transition-colors hover:bg-surface">
              <LuSearch size={22} strokeWidth={1.75} />
            </button>
            {/* user */}
            <Link
              href="/login"
              className="rounded-full p-2 text-foreground transition-colors hover:bg-surface"
            >
              <LuUser size={22} strokeWidth={1.75} />
            </Link>

            {/* cart */}
            <Link
              href="/cart"
              className="rounded-full p-2 text-foreground transition-colors hover:bg-surface"
            >
              <LuShoppingBag size={22} strokeWidth={1.75} />
            </Link>
          </div>
        </div>

        {/* Mobile menu buttons */}
        <button className=" text-2xl cursor-pointer text-foreground md:hidden">
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>
    </header>
  );
}
