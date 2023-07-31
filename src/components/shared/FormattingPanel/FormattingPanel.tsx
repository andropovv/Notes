// @ts-nocheck
import React, { FC } from "react";
import styles from "./FormattingPanel.module.scss";
import { myNotes } from "../../../store/notes";
import { editor } from "../../../editor";
import { useForceUpdate } from "../../../hooks/useForceUpdate";

import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

interface FormattingPanelProps {}

const FormattingPanel: FC<FormattingPanelProps> = () => {
  const forceUpdate = useForceUpdate();
  const iconsStyle = myNotes.currentNoteId
    ? styles.icons
    : styles.disabledIcons;

  const handleToggleBold = () => {
    editor.chain().focus().toggleBold().run();
    forceUpdate();
  };

  const handleToggleItalic = () => {
    editor.chain().focus().toggleItalic().run();
    forceUpdate();
  };

  const handleToggleStrike = () => {
    editor.chain().focus().toggleStrike().run();
    forceUpdate();
  };

  const handleToggleBulletList = () =>
    editor.chain().focus().toggleBulletList().run();

  const handleToggleOrderedList = () =>
    editor.chain().focus().toggleOrderedList().run();

  return (
    <div className={styles.formattingPanel}>
      <FormatBoldIcon
        onClick={myNotes.currentNoteId && handleToggleBold}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? styles.active : iconsStyle}
      />
      <FormatItalicIcon
        onClick={myNotes.currentNoteId && handleToggleItalic}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? styles.active : iconsStyle}
      />
      <FormatStrikethroughIcon
        onClick={myNotes.currentNoteId && handleToggleStrike}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? styles.active : iconsStyle}
      />
      <FormatListBulletedIcon
        onClick={myNotes.currentNoteId && handleToggleBulletList}
        className={editor.isActive("bulletList") ? styles.active : iconsStyle}
      />
      <FormatListNumberedIcon
        onClick={myNotes.currentNoteId && handleToggleOrderedList}
        className={editor.isActive("orderedList") ? styles.active : iconsStyle}
      />
    </div>
  );
};

export default FormattingPanel;
