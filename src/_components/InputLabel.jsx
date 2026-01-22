const InputLabel = ({ label, id }) => {
  return (
    <label className="font-semibold" htmlFor={id}>
      {label}
    </label>
  );
};

export default InputLabel;
