import { observer } from "mobx-react-lite";
import { formatNotes } from "../../../store/notesFormat";
import TileItem from "../../shared/TileItem/TileItem";
import styles from "./Tilemenu.module.scss";

const TileMenu = observer(() => {
  const tiles = [1, 2, 3, 4, 5, 6, 7, 8];

  const menuStyles =
    formatNotes.format === "tile"
      ? styles.container
      : `${styles.container} ${styles.close}`;

  return (
    <div className={menuStyles}>
      <h3>Сегодня</h3>
      <div className={styles.menu}>
        {tiles.map((t) => (
          <TileItem key={t} />
        ))}
      </div>
    </div>
  );
});

export default TileMenu;
