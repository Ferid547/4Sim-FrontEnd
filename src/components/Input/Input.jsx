import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Input.scss";

export const Input = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  icon,
  errorMessage,
  autoComplete,
  disabled,
}) => {
  const [show, setShow] = useState(false);

  const showPasswordToggle = () => {
    setShow(!show);
  };

  const changeType = () => {
    if (type === "password") {
      return show ? (
        <FaEyeSlash onClick={showPasswordToggle} className="eye" />
      ) : (
        <FaEye onClick={showPasswordToggle} className="eye" />
      );
    }
    return null;
  };

  return (
    <div className="inputBox">
      <input
        className="input"
        name={name}
        type={type === "password" && show ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        disabled={disabled}
      />
      {icon && icon}
      {changeType()}
      <span className="errorMes">{errorMessage}</span>
    </div>
  );
};
