// @ts-nocheck
import React, { FC } from "react";
import "./Editor.scss";
import { EditorContent } from "@tiptap/react";
import { observer } from "mobx-react-lite";
import { editor } from "../../../editor";
import { formatNotes } from "../../../store/notesFormat";

interface EditorProps {}

editor.setOptions({
  editorProps: {
    attributes: {
      class: formatNotes.format === "list" ? "editor-mini" : "editor-full",
    },
  },
});
const TextEditor: FC<EditorProps> = observer(() => {
  return <EditorContent editor={editor} />;
});

export default TextEditor;
