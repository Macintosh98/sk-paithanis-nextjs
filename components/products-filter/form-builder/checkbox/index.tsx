type CheckboxType = {
  type?: string;
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange?: any;
};

const Checkbox = ({
  type = "",
  label,
  name,
  onChange,
  value,
  checked,
}: CheckboxType) => (
  <label
    htmlFor={label + "-" + name}
    className={`checkbox ${type ? "checkbox--" + type : ""}`}
  >
    <input
      name={name}
      value={value}
      onChange={onChange}
      checked={checked}
      type="radio"
      id={label + "-" + name}
    />
    <span className="checkbox__check"></span>
    <p>{label}</p>
  </label>
);

export default Checkbox;
