import InputLabel from "./InputLabel";

const Select = () => {
  return (
    <div className="flex flex-col gap-1">
      <InputLabel label="Date" id="date" />
      <select className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-[#00ADB5] placeholder:font-light">
        <option value="morning">Morning</option>
        <option value="evening">Evening</option>
        <option value="night">Night</option>
      </select>
    </div>
  );
};

export default Select;
