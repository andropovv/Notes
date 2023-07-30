// @ts-nocheck
import React, { FC } from "react";
import "./Editor.scss";
import { EditorContent } from "@tiptap/react";
import { observer } from "mobx-react-lite";
import { editor } from "../../../editor";

interface EditorProps {}

editor.setOptions({
  editorProps: {
    attributes: {
      class: "editor-mini",
    },
  },
});
console.log("render");
const TextEditor: FC<EditorProps> = observer(() => {
  return <EditorContent editor={editor} />;
});

export default TextEditor;
