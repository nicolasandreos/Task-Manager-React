import { tv } from "tailwind-variants";

const SidebarButton = ({ children, variant }) => {
  const sidebarButton = tv({
    base: "rounded-md px-6 py-3 text-lg font-normal",
    variants: {
      variant: {
        selected: "bg-[#E6F7F8] text-primary font-semibold",
      },
    },
  });

  return (
    <a href="" className={`${sidebarButton({ variant })}`}>
      {children}
    </a>
  );
};

export default SidebarButton;
