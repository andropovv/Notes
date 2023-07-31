import { HTMLContent } from "@tiptap/react";
import styles from "./TileItem.module.scss";
import { FC } from "react";
import parse from "html-react-parser";
import { myNotes } from "../../../store/notes";
import { editor } from "../../../editor";

interface TileItemProps {
  title: string;
  content: "" | HTMLContent;
  id: number | null;
}

const TileItem: FC<TileItemProps> = ({ title, content, id }) => {
  const handleClick = () => {
    myNotes.setCurrentId(id);
    editor.commands.setContent(content);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tileItem} onClick={handleClick}>
        {parse(content)}
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default TileItem;
