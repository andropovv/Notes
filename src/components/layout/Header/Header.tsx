import { FC } from "react";
import styles from "./Header.module.scss";
import HeaderLeft from "./HeaderLeft";

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <HeaderLeft />
    </div>
  );
};

export default Header;
