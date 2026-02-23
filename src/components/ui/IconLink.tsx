import Link from "next/link";

type IconLinkProps = {
  href: `/${string}`;
  label: string;
  children: React.ReactNode;
};

export const IconLink = ({
  href,
  label,
  children,
}: Readonly<IconLinkProps>) => {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex items-center justify-center rounded-md p-1 text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/30"
    >
      {children}
    </Link>
  );
};
