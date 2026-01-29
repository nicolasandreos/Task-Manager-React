import InputLabel from "./InputLabel";

const Select = ({ ...rest }) => {
  return (
    <div className="flex flex-col gap-1">
      <InputLabel label="Date" id="date" />
      <select
        {...rest}
        className="outline-primary rounded-lg border border-solid border-[#ECECEC] bg-white px-4 py-3 placeholder:font-light"
      >
        <option value="morning">Morning</option>
        <option value="evening">Evening</option>
        <option value="night">Night</option>
      </select>
    </div>
  );
};

export default Select;
