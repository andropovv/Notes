// @ts-nocheck
import React, { FC } from "react";
import styles from "./DeleteNoteModal.module.scss";
import { Modal } from "@mui/material";
import CancelBtn from "../../UI/CancelBtn";
import DeleteBtn from "../../UI/DeleteBtn";
import { useIndexedDB } from "react-indexed-db-hook";
import { myNotes } from "../../../store/notes";
import { editor } from "../../../editor";

interface DeleteNoteModalProps {
  open: boolean;
  onClose: () => void;
}

const DeleteNoteModal: FC<DeleteNoteModalProps> = ({ open, onClose }) => {
  const { deleteRecord, getAll } = useIndexedDB("notes");

  const handleDeleteNote = async () => {
    try {
      myNotes.startLoading();
      await deleteRecord(myNotes.currentNoteId);

      const notesFromDB = await getAll();
      myNotes.setNotes(notesFromDB);
      myNotes.setCurrentId(null);
      editor.commands.clearContent;
    } catch (error) {
      console.log("Ошибка при удалении - " + error);
    } finally {
      myNotes.finishLoading();
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose} className={styles.deleteNoteModal}>
      <div className={styles.modal}>
        <h2>Delete the note</h2>

        <div className={styles.buttons}>
          <CancelBtn onClick={onClose}>Cancel</CancelBtn>
          <DeleteBtn onClick={handleDeleteNote}>Delete</DeleteBtn>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteNoteModal;
