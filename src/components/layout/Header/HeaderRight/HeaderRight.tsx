// @ts-nocheck
import React, { FC } from "react";
import styles from "./HeaderRight.module.scss";
import EditIcon from "@mui/icons-material/Edit";

interface HeaderRightProps {}

const HeaderRight: FC<HeaderRightProps> = () => {
  return (
    <div className={styles.headerRight}>
      <div>
        <EditIcon className={styles.icons} />
      </div>
    </div>
  );
};

export default HeaderRight;
