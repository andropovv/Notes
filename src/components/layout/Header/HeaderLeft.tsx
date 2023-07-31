import styles from "./HeaderLeft.module.scss";
import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import { observer } from "mobx-react-lite";
import { formatNotes } from "../../../store/notesFormat";
import AddIcon from "@mui/icons-material/Add";
import AddNoteModal from "../../shared/AddNoteModal";
import DeleteNoteModal from "../../shared/DeleteNoteModal";
import { myNotes } from "../../../store/notes";
import { editor } from "../../../editor";
import logo from "../../../assets/images/grayLogo.jpg";

const HeaderLeft = observer(() => {
  const [modalAddOpen, setModalAddOpen] = useState<boolean>(false);
  const handleAddOpen = () => setModalAddOpen(true);
  const handleAddClose = () => setModalAddOpen(false);

  const [modalDeleteOpen, setModalDeleteOpen] = useState<boolean>(false);
  const handleDeleteOpen = () => setModalDeleteOpen(true);
  const handleDeleteClose = () => setModalDeleteOpen(false);

  const styleHeaderLeft =
    formatNotes.format === "list"
      ? styles.headerLeft
      : `${styles.headerLeft} ${styles.tileFormat}`;

  const styleListBtn =
    formatNotes.format === "list"
      ? `${styles.icons} ${styles.activeIcon}`
      : styles.icons;

  const styleTileBtn =
    formatNotes.format === "tile"
      ? `${styles.icons} ${styles.activeIcon}`
      : styles.icons;

  const handlePressListBtn = (): void => {
    formatNotes.setList();
    myNotes.setCurrentId(null);
    editor.commands.clearContent();
  };

  const handlePressTileBtn = (): void => {
    formatNotes.setTile();
    myNotes.setCurrentId(null);
    editor.commands.clearContent();
  };

  return (
    <div className={styleHeaderLeft}>
      <div className={styles.formatNotes}>
        <FormatListBulletedIcon
          className={styleListBtn}
          onClick={handlePressListBtn}
        />
        <GridViewIcon className={styleTileBtn} onClick={handlePressTileBtn} />
      </div>
      <img src={logo} alt="Quick Note" className={styles.logo} />
      <div className={styles.addDelBtn}>
        <AddIcon className={styles.icons} onClick={handleAddOpen} />
        {myNotes.currentNoteId ? (
          <DeleteOutlineIcon
            className={styles.icons}
            onClick={handleDeleteOpen}
          />
        ) : (
          <DeleteOutlineIcon
            className={styles.icons + " " + styles.deleteDisabledBtn}
          />
        )}
      </div>
      <AddNoteModal open={modalAddOpen} onClose={handleAddClose} />
      <DeleteNoteModal open={modalDeleteOpen} onClose={handleDeleteClose} />
    </div>
  );
});

export default HeaderLeft;
