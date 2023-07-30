import styles from "./TileItem.module.scss";
import { FC } from "react";

interface TileItemProps {
  title: string;
}

const TileItem: FC<TileItemProps> = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tileItem}></div>
      <h3>{title}</h3>
    </div>
  );
};

export default TileItem;
