import { CSSProperties, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconProps {
  name: string;
  className?: ComponentProps<"i">["className"];
  size?: number;
  active?: boolean;
  style?: CSSProperties;
  onClick?: VoidFunction;
}
export default function Icon({
  onClick,
  name,
  className,
  size = 24,
  active = false,
  style,
}: IconProps) {
  return (
    <i
      onClick={onClick}
      className={twMerge(
        `bi bi-${name} opacity-${active ? "1" : "70"}`,
        className
      )}
      style={{ fontSize: size, ...style }}
    ></i>
  );
}
