import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  fillColor: string;
}

export default function MenuIcon({ fillColor, ...props }: Readonly<IconProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill={fillColor}
      {...props}
    >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  );
}
