import { observer } from "mobx-react-lite";
import { formatNotes } from "../../../store/notesFormat";
import styles from "./Workspace.module.scss";
import TextEditor from "../../UI/Editor";

const Workspace = observer(() => {
  const styleFormat =
    formatNotes.format === "list"
      ? `${styles.workspace} ${styles.workspaceForList}`
      : `${styles.workspace} ${styles.workspaceForTile}`;

  return (
    <div className={styleFormat}>
      <TextEditor />
    </div>
  );
});

export default Workspace;
