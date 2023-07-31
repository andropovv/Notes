import { FC } from "react";
import styles from "./Header.module.scss";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header: FC = () => {
  return (
    <>
      <div className={styles.placeholder}></div>
      <div className={styles.header}>
        <HeaderLeft />
        <HeaderRight />
      </div>
    </>
  );
};

export default Header;
