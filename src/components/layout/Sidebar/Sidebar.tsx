import { observer } from "mobx-react-lite";
import styles from "./Sidebar.module.scss";
import { formatNotes } from "../../../store/notesFormat";
import { myNotes } from "../../../store/notes";
import ListItem from "../../shared/ListItem";
import SidebarCreateNote from "../../shared/SidebarCreateNote";

const Sidebar = observer(() => {
  const { notes } = myNotes;

  const sidebarStyles =
    formatNotes.format === "list"
      ? styles.sidebar
      : `${styles.sidebar} ${styles.close}`;

  if (myNotes.isLoading) return <div>loading</div>;

  return (
    <div className={sidebarStyles}>
      {notes[0] ? (
        notes.map((n) => (
          <ListItem id={n.id} key={n.id} title={n.title} content={n.content} />
        ))
      ) : (
        <SidebarCreateNote />
      )}
    </div>
  );
});

export default Sidebar;
