const Input = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold" htmlFor={rest.id}>
        {label}
      </label>
      <input
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-[#00ADB5] placeholder:font-light"
        type="text"
        {...rest}
      />
    </div>
  );
};

export default Input;
