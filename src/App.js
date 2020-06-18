import React from "react";
import "./App.css";
import VisibleTaskList from "./containers/VisibleTaskList";
import AddTask from "./containers/AddTask/AddTask";
import Filter from "./containers/Filter/Filter";

function App() {
  return (
    <div className="App">
      <AddTask />
      <Filter />
      <VisibleTaskList />
    </div>
  );
}

export default App;
