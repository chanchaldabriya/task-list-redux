import React from "react";
import "./App.css";
import VisibleTaskList from "./containers/VisibleTaskList";
import AddTask from "./containers/AddTask/AddTask";

function App() {
  return (
    <div className="App">
      <AddTask />
      <VisibleTaskList />
    </div>
  );
}

export default App;
