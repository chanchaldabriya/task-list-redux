import React from "react";
import "./TaskList.css";
import Task from "../Task/Task";

function TaskList({ tasks, deleteTask }) {
  return (
    <ul className="TaskList">
      {tasks.map((task) => (
        <Task {...task} key={task.id} deleteTask={deleteTask} />
      ))}
    </ul>
  );
}

export default TaskList;
