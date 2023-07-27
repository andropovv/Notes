// @ts-nocheck
import React, { FC } from "react";
import "./Editor.scss";
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/react";
// import { useIndexedDB } from 'react-indexed-db-hook';

interface EditorProps {}

const editor = new Editor({
  extensions: [StarterKit],
  content: "sdfsdfs",

  onUpdate: ({ editor }) => {
    const json = editor.getJSON();
    // send the content to an API here

    console.log(json.content[0].content[0].text);
  },
});

editor.setOptions({
  editorProps: {
    attributes: {
      class: "editor-mini",
    },
  },
});

const TextEditor: FC<EditorProps> = () => {
  // const db = useIndexedDB('people');

  return <EditorContent editor={editor} />;
};

export default TextEditor;
