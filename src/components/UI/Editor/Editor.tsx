// @ts-nocheck
import React, { FC } from "react";
import "./Editor.scss";
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/react";
import { myNotes } from "../../../store/notes";
import { useIndexedDB } from "react-indexed-db-hook";
import { observer } from "mobx-react-lite";

interface EditorProps {}

const TextEditor: FC<EditorProps> = observer(() => {
  const { update } = useIndexedDB("notes");
  const currentNote = myNotes.getNoteById(myNotes.currentNoteId);

  const editor = new Editor({
    extensions: [StarterKit],
    content: currentNote?.content | "",

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      const updatedNote = {
        content: html,
        title: currentNote.title,
      };
      update(updatedNote, myNotes.currentNoteId).then(() => {});
    },
  });

  editor.setOptions({
    editorProps: {
      attributes: {
        class: "editor-mini",
      },
    },
  });

  return <EditorContent editor={editor} />;
});

export default TextEditor;
