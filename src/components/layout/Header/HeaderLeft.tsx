import styles from "./HeaderLeft.module.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import { observer } from "mobx-react-lite";
import { formatNotes } from "../../../store/notesFormat";

const HeaderLeft = observer(() => {
  const styleHeaderLeft =
    formatNotes.format === "list"
      ? styles.headerLeft
      : `${styles.headerLeft} ${styles.tileFormat}`;

  const styleListBtn =
    formatNotes.format === "list"
      ? `${styles.icons} ${styles.activeIcon}`
      : styles.icons;

  const styleTileBtn =
    formatNotes.format === "tile"
      ? `${styles.icons} ${styles.activeIcon}`
      : styles.icons;

  const handlePressListBtn = (): void => {
    formatNotes.setList();
  };

  const handlePressTileBtn = (): void => {
    formatNotes.setTile();
  };

  return (
    <div className={styleHeaderLeft}>
      <div className={styles.formatNotes}>
        <FormatListBulletedIcon
          className={styleListBtn}
          onClick={handlePressListBtn}
        />
        <GridViewIcon className={styleTileBtn} onClick={handlePressTileBtn} />
      </div>
      <div className={styles.deleteBtn}>
        <DeleteOutlineIcon className={styles.icons} />
      </div>
    </div>
  );
});

export default HeaderLeft;
