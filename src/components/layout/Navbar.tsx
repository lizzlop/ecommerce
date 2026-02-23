"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchBar } from "../ui/SearchBar";
import { HeartIcon, ShoppingCartIcon, MenuIcon } from "../icons";
import { useId, useState } from "react";
import { IconLink } from "../ui/IconLink";
import { MobileMenu } from "./NavbarMenu";

type NavLinkItem = {
  href: string;
  label: string;
};

const navLinks: NavLinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/signUp", label: "Sign Up" },
];

// Generates active for the routes and the next nested routes
const isActivePath = (currentPathname: string, href: string) => {
  if (href === "/") return currentPathname === "/";
  return currentPathname === href || currentPathname.startsWith(`${href}/`);
};

// Styles for links
const linkClassName = (active: boolean) =>
  [
    "text-sm transition-colors",
    "text-gray-600 hover:text-gray-900",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 rounded-sm", //Beautify accessibility
    active ? "text-gray-900 underline underline-offset-8" : "",
  ].join(" ");

export const Navbar = () => {
  const currentPathName = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuId = useId();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav aria-label="Principal navigation" className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-3">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 rounded-sm"
          >
            Ecommerce
          </Link>

          <div className="hidden md:flex gap-10" aria-label="Sections">
            {navLinks.map((item) => {
              const active = isActivePath(currentPathName, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={linkClassName(active)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <SearchBar className="hidden sm:flex" />
            <IconLink href="/favorites" label="Favorites">
              <HeartIcon fillColor="currentColor" className="h-6 w-6" />
            </IconLink>
            <IconLink href="/shoppingCart" label="Shopping cart">
              <ShoppingCartIcon fillColor="currentColor" className="h-6 w-6" />
            </IconLink>
            <button
              type="button"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              aria-controls={mobileMenuId}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-md p-1 text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 md:hidden"
            >
              <MenuIcon fillColor="currentColor" className="h-6 w-6" />
            </button>
          </div>

          <MobileMenu isOpen={mobileOpen} setIsOpen={setMobileOpen} />

          {/* {mobileOpen ? (
            <div
              id={mobileMenuId}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            >
              <div className="flex flex-col gap-3 pt-2">
                {navLinks.map((item) => {
                  const active = isActivePath(currentPathName, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={linkClassName(active)}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ) : null} */}
        </div>
        <div className="mb-4">
          <SearchBar className="sm:hidden" />
        </div>
      </nav>
    </header>
  );
};
