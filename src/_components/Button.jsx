import { tv } from "tailwind-variants";

const Button = ({
  children,
  color = "primary",
  size = "small",
  className,
  onClick,
  ...rest
}) => {
  const button = tv({
    base: "flex items-center justify-center gap-2 font-semibold self-end",
    variants: {
      color: {
        primary: "bg-primary text-white",
        secondary: "text-dark-gray",
        tertiary: "bg-light-gray text-dark-blue",
        danger: "bg-danger text-white",
      },
      size: {
        small: "px-3 py-1 rounded-md",
        large: "px-3 py-2 rounded-lg",
      },
      defaultVariants: {
        color: "primary",
        size: "small",
      },
    },
  });

  return (
    <button
      {...rest}
      onClick={onClick}
      className={`${button({ color, size })} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
