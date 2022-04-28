import style from "./input-group.module.scss";

export default function InputGroup({
  type = "text",
  name = "",
  handleChange = function () {},
  value = "",
  icon = "",
  placeholder = "",
}) {
  return (
    <div className={style.inputGroup}>
      <i className={`fas fa-${icon} ${icon}`} />
      <input
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
