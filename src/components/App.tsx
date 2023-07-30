import "./App.scss";
import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";
import TileMenu from "./layout/Tilemenu/TileMenu";
import Workspace from "./layout/Workspace/Workspace";
import { DBConfig } from "../DBConfig";
import { initDB, useIndexedDB } from "react-indexed-db-hook";
import { myNotes } from "../store/notes";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

initDB(DBConfig);

const App = observer(() => {
  const { getAll } = useIndexedDB("notes");

  const setNotes = async () => {
    try {
      myNotes.startLoading();
      const notesFromDB = await getAll();
      myNotes.setNotes(notesFromDB);
    } catch (error) {
      console.log(error);
    } finally {
      myNotes.finishLoading();
    }
  };

  useEffect(() => {
    setNotes();
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <TileMenu />
      {!myNotes.isLoading && <Workspace />}
    </>
  );
});

export default App;
