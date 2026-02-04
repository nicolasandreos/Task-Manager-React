import { NavLink } from "react-router";
import { tv } from "tailwind-variants";

const SidebarButton = ({ children, to }) => {
  const sidebarButton = tv({
    base: "rounded-md px-6 py-3 text-lg font-normal",
    variants: {
      variant: {
        selected: "bg-[#E6F7F8] text-primary font-semibold",
      },
    },
  });

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? sidebarButton({ variant: "selected" }) : sidebarButton()
      }
    >
      {children}
    </NavLink>
  );
};

export default SidebarButton;
