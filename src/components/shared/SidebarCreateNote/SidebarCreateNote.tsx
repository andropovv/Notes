import { FC, useState } from "react";
import styles from "./SidebarCreateNote.module.scss";
import AddNoteModal from "../AddNoteModal";

interface SidebarCreateNoteProps {}

const SidebarCreateNote: FC<SidebarCreateNoteProps> = () => {
  const [modalAddOpen, setModalAddOpen] = useState<boolean>(false);
  const handleAddOpen = () => setModalAddOpen(true);
  const handleAddClose = () => setModalAddOpen(false);

  return (
    <div className={styles.sidebarCreateNote} onClick={handleAddOpen}>
      Сreate a new note
      <AddNoteModal open={modalAddOpen} onClose={handleAddClose} />
    </div>
  );
};

export default SidebarCreateNote;
