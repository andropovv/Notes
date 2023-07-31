import { FC, useState } from "react";
import styles from "./HeaderRight.module.scss";
import EditIcon from "@mui/icons-material/Edit";
import { myNotes } from "../../../../store/notes";
import { observer } from "mobx-react-lite";
import SaveIcon from "@mui/icons-material/Save";
import { useIndexedDB } from "react-indexed-db-hook";
import { editor } from "../../../../editor";
import FormattingPanel from "../../../shared/FormattingPanel";

interface HeaderRightProps {}

const HeaderRight: FC<HeaderRightProps> = observer(() => {
  const { update, getAll } = useIndexedDB("notes");
  const currentNote = myNotes.getNoteById(myNotes.currentNoteId);

  const [editable, setEditable] = useState<boolean>(true);
  editor.setEditable(editable);

  const iconsStyle = myNotes.currentNoteId
    ? styles.icons
    : styles.disabledIcons;

  const handleSaveChanges = async () => {
    try {
      myNotes.startLoading();

      const newContent = editor.getHTML();

      await update({
        title: currentNote?.title,
        content: newContent,
        id: currentNote?.id,
      });

      const notesFromDB = await getAll();
      myNotes.setNotes(notesFromDB);
    } catch (error) {
      console.log(error);
    } finally {
      myNotes.finishLoading();
    }
  };

  const handleToggleEditable = () => {
    setEditable((prevState) => !prevState);
  };

  return (
    <div className={styles.headerRight}>
      <div className={styles.saving}>
        <SaveIcon className={iconsStyle} onClick={handleSaveChanges} />
        <EditIcon
          className={editable ? iconsStyle : styles.editDisabled}
          onClick={handleToggleEditable}
        />
      </div>
      <FormattingPanel />
      <h3 className={styles.noteName}>{currentNote?.title}</h3>
    </div>
  );
});

export default HeaderRight;
