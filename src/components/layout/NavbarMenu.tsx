"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowForwardIcon, CloseIcon } from "../icons";
import { isActivePath, navLinks } from "./utilsLayout";

type NavbarMenuProps = {
  isOpen: boolean;
  currentPathName: string;
  setMenuMobileOpen: (arg: boolean) => void;
  mobileMenuId: string;
};

// Styles for links
export const linkMenuClassName = (active: boolean) =>
  [
    "flex items-center justify-between border-b border-gray-200 p-2",
    "text-xs transition-colors",
    "text-gray-600 hover:text-gray-900",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30 rounded-sm", //Beautify accessibility
    active ? "text-gray-900 underline" : "",
  ].join(" ");

export function NavbarMenu({
  isOpen,
  setMenuMobileOpen,
  currentPathName,
  mobileMenuId,
}: Readonly<NavbarMenuProps>) {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current) return;
      if (!(event.target instanceof Node)) return;

      // Si el click NO fue dentro del menú, cerramos
      if (!menuRef.current.contains(event.target)) {
        setMenuMobileOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuMobileOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, setMenuMobileOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      id={mobileMenuId}
      className="fixed inset-0 z-50 bg-black/40"
      aria-hidden={!isOpen}
    >
      <aside
        ref={menuRef}
        aria-label="Navigation menu"
        className="absolute right-0 top-0 h-full w-80 bg-white pt-4"
      >
        <div className="mr-3 flex items-center">
          <span className="flex flex-1 justify-center text-xs">Menú</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuMobileOpen(false)}
            className="inline-flex items-center justify-center rounded-md p-1 text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30"
          >
            <CloseIcon fillColor="current" className="h-5 w-5 flex-none" />
          </button>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          {navLinks.map((item) => {
            const active = isActivePath(currentPathName, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={linkMenuClassName(active)}
                onClick={() => setMenuMobileOpen(false)}
              >
                {item.label}
                <ArrowForwardIcon
                  fillColor="current"
                  className="h-4 w-4 flex-none"
                />
              </Link>
            );
          })}
        </div>
      </aside>
    </div>,
    document.body,
  );
}
