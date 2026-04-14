"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchBar } from "../ui/SearchBar";
import { HeartIcon, ShoppingCartIcon, MenuIcon } from "../icons";
import { useId, useState } from "react";
import { IconLink } from "../ui/IconLink";
import { NavbarMenu } from "./NavbarMenu";
import { isActivePath, navLinks } from "./utilsLayout";

// Styles for links
export const linkClassName = (active: boolean) =>
  [
    "text-sm transition-colors",
    "text-gray-600 hover:text-gray-900",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 rounded-sm", //Beautify accessibility
    active ? "text-gray-900 underline underline-offset-8" : "",
  ].join(" ");

export const Navbar = () => {
  const currentPathName = usePathname();
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);
  const mobileMenuId = useId();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav aria-label="Principal navigation" className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-3">
          <Link
            href="/"
            onClick={() => setMenuMobileOpen(false)}
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

          <div className="flex items-center gap-2 md:flex-1 max-w-xs">
            <SearchBar className="hidden sm:flex" />
            <IconLink href="/favorites" label="Favorites">
              <HeartIcon fillColor="currentColor" className="h-6 w-6" />
            </IconLink>
            <IconLink href="/shoppingCart" label="Shopping cart">
              <ShoppingCartIcon fillColor="currentColor" className="h-6 w-6" />
            </IconLink>
            <button
              type="button"
              aria-label={menuMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuMobileOpen}
              aria-controls={mobileMenuId}
              onClick={() => setMenuMobileOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-md p-1 text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 md:hidden"
            >
              <MenuIcon fillColor="currentColor" className="h-6 w-6" />
            </button>
          </div>

          <NavbarMenu
            isOpen={menuMobileOpen}
            currentPathName={currentPathName}
            setMenuMobileOpen={setMenuMobileOpen}
            mobileMenuId={mobileMenuId}
          />
        </div>
        <div className="mb-4">
          <SearchBar className="sm:hidden" />
        </div>
      </nav>
    </header>
  );
};
