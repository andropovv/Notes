import { observer } from "mobx-react-lite";
import styles from "./Sidebar.module.scss";
import { formatNotes } from "../../../store/notesFormat";
import ListItem from "../../shared/ListItem";

const Sidebar = observer(() => {
  const sidebarStyles =
    formatNotes.format === "list"
      ? styles.sidebar
      : `${styles.sidebar} ${styles.close}`;

  const notes = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={sidebarStyles}>
      {notes.map((n) => (
        <ListItem key={n} />
      ))}
    </div>
  );
});

export default Sidebar;
