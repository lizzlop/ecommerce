import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  fillColor: string;
}

export default function RemoveIcon({
  fillColor,
  ...props
}: Readonly<IconProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill={fillColor}
      {...props}
    >
      <path d="M200-440v-80h560v80H200Z" />
    </svg>
  );
}
