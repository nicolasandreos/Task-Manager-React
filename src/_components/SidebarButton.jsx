const SidebarButton = ({ children, variant }) => {
  const getVariantType = () => {
    return variant === "selected"
      ? "bg-[#E6F7F8] text-[#00ADB5] font-semibold"
      : "";
  };

  return (
    <a
      href=""
      className={`rounded-md px-6 py-3 text-lg font-normal ${getVariantType()}`}
    >
      {children}
    </a>
  );
};

export default SidebarButton;
