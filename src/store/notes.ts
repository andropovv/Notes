import { INote } from "./../models/note.model";
import { makeAutoObservable } from "mobx";
import _ from "lodash";

class Notes {
  notes: [] | INote[] = [];
  currentNoteId: null | number = null;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setNotes(notes: [] | INote[]) {
    this.notes = _.orderBy(notes, ["id"], ["desc"]);
  }

  setCurrentId(id: null | number): void {
    this.currentNoteId = id;
  }

  startLoading() {
    this.isLoading = true;
  }

  finishLoading() {
    this.isLoading = false;
  }

  getNoteById(id: null | number): INote | undefined {
    const foundedNote = this.notes.find((n) => n.id === id);
    return foundedNote;
  }
}

export const myNotes = new Notes();
