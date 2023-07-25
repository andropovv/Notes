import styles from "./TileItem.module.scss";

function TileItem() {
  return (
    <div className={styles.container}>
      <div className={styles.tileItem}></div>
      <h3>Заметка</h3>
      <p>7:57</p>
    </div>
  );
}

export default TileItem;
