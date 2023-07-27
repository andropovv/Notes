// @ts-nocheck
import "./App.scss";
import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";
import TileMenu from "./layout/Tilemenu/TileMenu";
import Workspace from "./layout/Workspace/Workspace";
import { DBConfig } from "../DBConfig";
import { initDB } from "react-indexed-db-hook";

initDB(DBConfig);

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <TileMenu />
      <Workspace />
    </>
  );
}

export default App;
