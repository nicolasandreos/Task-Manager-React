import InputLabel from "./InputLabel";

const Input = ({ label, id, ...rest }) => {
  return (
    <div className="flex flex-col gap-1">
      <InputLabel label={label} id={id} />
      <input
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-[#00ADB5] placeholder:font-light"
        type="text"
        {...rest}
      />
    </div>
  );
};

export default Input;
