import React, { FC } from "react";
import styles from "./AddButton.module.scss";

interface AddButtonProps {
  children: React.ReactNode | string | null;
  onClick: () => void;
  disabled: boolean;
}

const AddButton: FC<AddButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button
      type="button"
      className={styles.addButton}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default AddButton;
