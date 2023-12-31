import { FC } from "react";
import styles from "./ListItem.module.scss";
import { myNotes } from "../../../store/notes";
import { observer } from "mobx-react-lite";
import { editor } from "../../../editor";
import { HTMLContent } from "@tiptap/react";
import parse from "html-react-parser";

interface ListItemProps {
  title: string;
  id: number;
  content: HTMLContent | "";
}

const ListItem: FC<ListItemProps> = observer(({ title, id, content }) => {
  const handleClick = () => {
    myNotes.setCurrentId(id);
    editor.commands.setContent(content);
  };

  const itemStyle =
    myNotes.currentNoteId === id
      ? `${styles.listItem} ${styles.active}`
      : styles.listItem;

  return (
    <div className={itemStyle} onClick={handleClick}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.content}>
        <p>{parse(content)}</p>
      </div>
    </div>
  );
});

export default ListItem;
