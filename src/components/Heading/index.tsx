import React from "react";

const sizes = {
  "3xl": "text-3xl font-bold md:text-[28px] sm:text-[26px]",
  "2xl": "text-2xl font-semibold md:text-[22px]",
  xl: "text-xl font-semibold",
  s: "text-sm font-semibold",
  md: "text-base font-semibold",
  xs: "text-xs font-semibold",
  lg: "text-lg font-semibold",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900_01 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
