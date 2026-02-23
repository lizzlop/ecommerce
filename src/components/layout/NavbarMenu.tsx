"use client";
import { createPortal } from "react-dom";

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: Function;
};

export function MobileMenu({ isOpen, setIsOpen }: Readonly<MobileMenuProps>) {
  if (!isOpen) return null;

  return createPortal(
    <button
      className="fixed inset-0 z-50 bg-black/40"
      onClick={() => setIsOpen(false)}
    >
      <aside className="absolute right-0 top-0 h-full w-80 bg-white">
        Menú
      </aside>
    </button>,
    document.body,
  );
}
