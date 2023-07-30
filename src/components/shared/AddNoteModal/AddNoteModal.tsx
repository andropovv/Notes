import { FC } from "react";
import styles from "./AddNoteModal.module.scss";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import TextField from "../../UI/TextField";
import AddButton from "../../UI/AddButton";
import { useIndexedDB } from "react-indexed-db-hook";
import CancelBtn from "../../UI/CancelBtn";
import { myNotes } from "../../../store/notes";
import { editor } from "../../../editor";

interface AddNoteModalProps {
  open: boolean;
  onClose: () => void;
}

const AddNoteModal: FC<AddNoteModalProps> = ({ onClose, open }) => {
  const [title, setTitle] = useState<string>("New note");
  const { add, getAll } = useIndexedDB("notes");

  const handleCreateNote = async () => {
    try {
      myNotes.startLoading();

      const id = await add({ title: title, content: "" });

      const notesFromDB = await getAll();
      myNotes.setNotes(notesFromDB);

      myNotes.setCurrentId(id);
      editor.commands.setContent("");
    } catch (error) {
      console.log(error);
    } finally {
      myNotes.finishLoading();
    }
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} className={styles.addNoteModal}>
      <div className={styles.modal}>
        <h2>Create a new note</h2>
        <TextField
          placeholder="Enter a title"
          onChange={setTitle}
          value={title}
          name="title"
        />
        <div className={styles.buttons}>
          <CancelBtn onClick={onClose}>Cancel</CancelBtn>
          <AddButton onClick={handleCreateNote} disabled={Boolean(!title)}>
            Create
          </AddButton>
        </div>
      </div>
    </Modal>
  );
};

export default AddNoteModal;
