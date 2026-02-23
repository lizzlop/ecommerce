"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { SearchBar } from "../ui/SearchBar";
import { HeartIcon, ShoppingCartIcon, MenuIcon } from "../icons";
import { MobileMenu } from "./NavbarMenu";

type NavLinkItem = {
  href: string;
  label: string;
};

const NAV_LINKS: NavLinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/signUp", label: "Sign Up" },
];

const isActivePath = (currentPathname: string, href: string) => {
  if (href === "/") return currentPathname === "/";
  return currentPathname === href || currentPathname.startsWith(`${href}/`);
};

const linkClassName = (active: boolean) =>
  [
    "text-sm transition-colors",
    "text-gray-600 hover:text-gray-900",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 rounded-sm",
    active ? "text-gray-900 underline underline-offset-8" : "",
  ].join(" ");

const IconButton = ({
  label,
  children,
}: Readonly<{
  label: string;
  children: React.ReactNode;
}>) => {
  return (
    <button
      type="button"
      aria-label={label}
      className="inline-flex items-center justify-center rounded-md p-1 text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30"
    >
      {children}
    </button>
  );
};

export const NavbarCursor = () => {
  const currentPathName = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuId = useId();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav aria-label="Navegación principal" className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-3">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 rounded-sm"
          >
            Ecommerce
          </Link>

          <div className="hidden md:flex gap-10" aria-label="Secciones">
            {NAV_LINKS.map((item) => {
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
            <IconButton label="Favoritos">
              <HeartIcon fillColor="currentColor" className="h-6 w-6" />
            </IconButton>
            <IconButton label="Carrito">
              <ShoppingCartIcon fillColor="currentColor" className="h-6 w-6" />
            </IconButton>
            <button
              type="button"
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              aria-controls={mobileMenuId}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-1 text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 md:hidden"
            >
              <MenuIcon fillColor="currentColor" className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="pb-3 sm:hidden">
          <SearchBar className="mt-2" />
        </div>

        <MobileMenu isOpen={mobileOpen} />

        {/* {mobileOpen ? (
          <div id={mobileMenuId} className="md:hidden pb-3">
            <div className="flex flex-col gap-3 pt-2">
              {NAV_LINKS.map((item) => {
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
      </nav>
    </header>
  );
};
