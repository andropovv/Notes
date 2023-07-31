import { observer } from "mobx-react-lite";
import { formatNotes } from "../../../store/notesFormat";
import TileItem from "../../shared/TileItem/TileItem";
import styles from "./Tilemenu.module.scss";
import { myNotes } from "../../../store/notes";

const TileMenu = observer(() => {
  const { notes } = myNotes;

  const menuStyles =
    formatNotes.format === "tile"
      ? styles.container
      : `${styles.container} ${styles.close}`;

  if (myNotes.currentNoteId) return null;

  return (
    <div className={menuStyles}>
      <div className={styles.menu}>
        {notes.map((n) => (
          <TileItem key={n.id} title={n.title} content={n.content} id={n.id} />
        ))}
      </div>
    </div>
  );
});

export default TileMenu;
