import React, { FC } from "react";
import styles from "./CancelBtn.module.scss";

interface CancelButtonProps {
  children: React.ReactNode | string | null;
  onClick: () => void;
}

const CancelButton: FC<CancelButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" className={styles.cancelBtn} onClick={onClick}>
      {children}
    </button>
  );
};

export default CancelButton;
