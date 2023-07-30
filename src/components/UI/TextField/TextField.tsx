// @ts-nocheck
import React, { FC } from "react";
import styles from "./TextField.module.scss";

interface TextFieldProps {
  label?: string;
  name: string;
  onChange: (title: string) => void;
  value: string;
  error?: string;
  placeholder: string;
}

const TextField: FC<TextFieldProps> = ({
  label,
  name,
  onChange,
  value,
  error,
  placeholder = "Enter here",
}) => {
  const handleChange = ({ target }) => {
    onChange(target.value);
  };

  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}

      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default TextField;
