import { useState } from "react";
import "../styles/FormInputStyles.css";

const FormInput = (props) => {
  const { label, changeHandler, id, errorMessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const updateFocus = () => {
    setFocused(true);
  };
  return (
    <div>
      <label className="mt-2 block">{label}:</label>
      <input
        onChange={(e) => changeHandler(e)}
        {...inputProps}
        className="bg-transparent w-full px-3 py-2 border rounded my-2 focus:outline-none"
        autoComplete="off"
        focused={focused.toString()}
        onBlur={updateFocus}
      ></input>
      <p className="text-red-600 invisible text-xs">{errorMessage}</p>
    </div>
  );
};

export default FormInput;
