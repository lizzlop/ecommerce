import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  fillColor: string;
}

export default function StarIcon({ fillColor, ...props }: Readonly<IconProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill={fillColor}
      {...props}
    >
      <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
    </svg>
  );
}
