import React from "react";

type Props<T> = {
  name?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onKeyDown?: (event: React.KeyboardEvent<T>) => void;
  onChange: (event: React.ChangeEvent<T>) => void;
};

const Input: React.FC<Props<HTMLInputElement | HTMLTextAreaElement>> = ({
  name,
  type,
  placeholder,
  className,
  onChange,
  onKeyDown,
  value,
}) => {
  const variant = className === "" ? "bg-gray-50 text-black" : className;
  return type === "textarea" ? (
    <textarea
      value={value}
      name={name}
      placeholder={placeholder}
      className={`px-4 py-2 focus:outline-none focus:border-none focus:bg-gray-200 ${variant}`}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  ) : (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      className={`px-4 py-2 focus:outline-none focus:border-none focus:bg-gray-200 ${variant}`}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  className: "",
};

export default Input;
