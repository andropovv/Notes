// @ts-nocheck
import React, { FC } from "react";
import styles from "./FormattingPanel.module.scss";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { myNotes } from "../../../store/notes";

interface FormattingPanelProps {}

const FormattingPanel: FC<FormattingPanelProps> = () => {
  const iconsStyle = myNotes.currentNoteId
    ? styles.icons
    : styles.disabledIcons;

  return (
    <div className={styles.formattingPanel}>
      <FormatBoldIcon className={iconsStyle} />
      <FormatItalicIcon className={iconsStyle} />{" "}
      <FormatUnderlinedIcon className={iconsStyle} />
      <FormatQuoteIcon className={iconsStyle} />
    </div>
  );
};

export default FormattingPanel;
