const Button = ({ children, variant = "primary" }) => {
  const getVariantType = () => {
    switch (variant) {
      case "primary":
        return "bg-[#00c5cf8c] text-white";
      case "secondary":
        return "text-[#818181]";
    }
  };

  return (
    <button
      className={`flex items-center gap-2 rounded-md px-3 py-1 font-semibold ${getVariantType()} self-end`}
    >
      {children}
    </button>
  );
};

export default Button;
