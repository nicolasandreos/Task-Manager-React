const Header = ({ title, subtitle, children }) => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col gap-2">
        <p className="font-medium text-[#00ADB5]">{subtitle}</p>
        <p className="text-2xl font-semibold">{title}</p>
      </div>

      <div className="flex items-center gap-4">{children}</div>
    </div>
  );
};

export default Header;
