import { observer } from "mobx-react-lite";
import styles from "./Sidebar.module.scss";
import { formatNotes } from "../../../store/notesFormat";

const Sidebar = observer(() => {
  const sidebarStyles =
    formatNotes.format === "list"
      ? styles.sidebar
      : `${styles.sidebar} ${styles.close}`;

  return <div className={sidebarStyles}>Sidebar</div>;
});

export default Sidebar;
