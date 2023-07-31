// @ts-nocheck
import React, { FC } from "react";
import styles from "./MainContent.module.scss";

interface MainContentProps {}

const MainContent: FC<MainContentProps> = () => {
  return <div className={styles.mainContent}> MainContent Component</div>;
};

export default MainContent;
