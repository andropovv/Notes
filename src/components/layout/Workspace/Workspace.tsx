import { observer } from "mobx-react-lite";
import { formatNotes } from "../../../store/notesFormat";
import styles from "./Workspace.module.scss";
import TextEditor from "../../UI/Editor";
import { myNotes } from "../../../store/notes";
import DefaultBanner from "../../UI/DefaultBanner";
import logo from "../../../assets/images/blackLogo.jpg";

const Workspace = observer(() => {
  const styleFormat =
    formatNotes.format === "list"
      ? `${styles.workspace} ${styles.workspaceForList}`
      : `${styles.workspace} ${styles.workspaceForTile}`;

  if (formatNotes.format === "list" && !myNotes.currentNoteId)
    return (
      <div className={styleFormat + " " + styles.banner}>
        <DefaultBanner logo={logo} />
      </div>
    );

  return (
    <>
      {formatNotes.format === "tile" && myNotes.currentNoteId ? (
        <div className={styles.fullWorkspace}>
          <TextEditor />
        </div>
      ) : (
        <div className={styleFormat}>
          <TextEditor />
        </div>
      )}
    </>
  );
});

export default Workspace;
