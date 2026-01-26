const Button = ({
  children,
  variant = "primary",
  size = "small",
  className,
  onClick,
}) => {
  const getVariantType = () => {
    switch (variant) {
      case "primary":
        return "bg-[#00c5cf8c] text-white";
      case "secondary":
        return "text-dark-gray";
      case "tertiary":
        return "bg-light-gray text-dark-blue";
    }
  };

  const getSizeButton = () => {
    switch (size) {
      case "small":
        return "px-3 py-1 rounded-md";
      case "large":
        return "px-3 py-2 rounded-lg";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 font-semibold ${getVariantType()} ${getSizeButton()} ${className} self-end`}
    >
      {children}
    </button>
  );
};

export default Button;
