type NavLinkItem = {
  href: string;
  label: string;
};

export const navLinks: NavLinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/signup", label: "Sign Up" },
];

// Generates active for the routes and the next nested routes
export const isActivePath = (
  currentPathname: string,
  href: string,
): boolean => {
  if (href === "/") return currentPathname === "/";
  return currentPathname === href || currentPathname.startsWith(`${href}/`);
};
