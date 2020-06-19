import React from "react";
import "./TaskList.css";
import Task from "../Task/Task";

function TaskList({ tasks, deleteTask }) {
  const noTasks = () => {
    if (tasks.length === 0)
      return <div className="TaskList-empty">No Tasks</div>;
  };
  return (
    <ul className="TaskList">
      {tasks.map((task) => (
        <Task {...task} key={task.id} deleteTask={deleteTask} />
      ))}
      {noTasks()}
    </ul>
  );
}

export default TaskList;
