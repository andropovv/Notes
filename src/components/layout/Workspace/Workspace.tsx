import { observer } from "mobx-react-lite";
import { formatNotes } from "../../../store/notesFormat";
import styles from "./Workspace.module.scss";
import TextEditor from "../../UI/Editor";
import { myNotes } from "../../../store/notes";

const Workspace = observer(() => {
  const { notes } = myNotes;
  const styleFormat =
    formatNotes.format === "list"
      ? `${styles.workspace} ${styles.workspaceForList}`
      : `${styles.workspace} ${styles.workspaceForTile}`;

  if (myNotes.isLoading) return <div>loading</div>;

  return (
    <>
      {notes &&
        (formatNotes.format === "tile" && myNotes.currentNoteId ? (
          <div className={styles.fullWorkspace}>
            <TextEditor />
          </div>
        ) : (
          <div className={styleFormat}>
            <TextEditor />
          </div>
        ))}
    </>
  );
});

export default Workspace;
