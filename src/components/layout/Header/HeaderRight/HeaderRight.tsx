// @ts-nocheck
import React, { FC } from "react";
import styles from "./HeaderRight.module.scss";
import EditIcon from "@mui/icons-material/Edit";
import { myNotes } from "../../../../store/notes";
import { observer } from "mobx-react-lite";
import SaveIcon from "@mui/icons-material/Save";
import { useIndexedDB } from "react-indexed-db-hook";
import { editor } from "../../../../editor";

interface HeaderRightProps {}

const HeaderRight: FC<HeaderRightProps> = observer(() => {
  const { update, getAll } = useIndexedDB("notes");
  const currentNote = myNotes.getNoteById(myNotes.currentNoteId);

  const iconsStyle = myNotes.currentNoteId
    ? styles.icons
    : styles.disabledIcons;

  const handleSaveChanges = async () => {
    try {
      myNotes.startLoading();

      const newContent = editor.getHTML();
      console.log(newContent);

      await update({
        title: currentNote.title,
        content: newContent,
        id: currentNote.id,
      });

      const notesFromDB = await getAll();
      myNotes.setNotes(notesFromDB);
    } catch (error) {
      console.log(error);
    } finally {
      myNotes.finishLoading();
    }
  };

  return (
    <div className={styles.headerRight}>
      <div>
        <SaveIcon className={iconsStyle} onClick={handleSaveChanges} />
      </div>
      <h3>{currentNote?.title}</h3>
      <div>
        <EditIcon className={iconsStyle} />
      </div>
    </div>
  );
});

export default HeaderRight;
