import React, { FC } from "react";
import styles from "./DeleteBtn.module.scss";

interface DeleteButtonProps {
  children: React.ReactNode | string | null;
  onClick: () => void;
}

const DeleteButton: FC<DeleteButtonProps> = ({ children, onClick }) => {
  return (
    <button type="button" className={styles.cancelBtn} onClick={onClick}>
      {children}
    </button>
  );
};

export default DeleteButton;
