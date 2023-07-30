import { FC } from "react";
import styles from "./ListItem.module.scss";
import { myNotes } from "../../../store/notes";
import { observer } from "mobx-react-lite";

interface ListItemProps {
  title: string;
  id: number;
}

const ListItem: FC<ListItemProps> = observer(({ title, id }) => {
  const handleClick = () => {
    myNotes.setCurrentId(id);
  };

  const itemStyle =
    myNotes.currentNoteId === id
      ? `${styles.listItem} ${styles.active}`
      : styles.listItem;

  return (
    <div className={itemStyle} onClick={handleClick}>
      {title}
    </div>
  );
});

export default ListItem;
