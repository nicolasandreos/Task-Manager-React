const DashboardCard = ({ title, description, icon }) => {
  return (
    <div className="flex h-38 w-64 flex-col items-center justify-center gap-3 rounded-lg bg-white">
      <div className="flex items-center gap-2">
        <div className="text-primary text-2xl">{icon}</div>
        <h3 className="text-[30px] font-bold">{title}</h3>
      </div>
      <p className="block text-lg font-light">{description}</p>
    </div>
  );
};

export default DashboardCard;
