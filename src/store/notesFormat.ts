import { makeAutoObservable } from "mobx";

class Format {
  format: "list" | "tile" = "list";

  constructor() {
    makeAutoObservable(this);
  }

  setTile(): void {
    this.format = "tile";
  }

  setList(): void {
    this.format = "list";
  }
}

export const formatNotes = new Format();
