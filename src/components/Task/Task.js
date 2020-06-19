import React from "react";
import "./Task.css";
import {
  getDateFromMillis,
  getDateString,
  getMillisFromDate,
  getStandardDateString,
  getDateFromStandardDateString
} from "../../common/DateUtil";

function Task({ id, name, description, startDate, endDate, deleteTask }) {
  const todayMillis = getMillisFromDate(
    getDateFromStandardDateString(getStandardDateString(new Date()))
  ); // to consider only date of today in sync with task dates

  const taskStatus =
    todayMillis < startDate
      ? "scheduled"
      : todayMillis > endDate
      ? "expired"
      : "running";

  return (
    <li className="Task">
      {name && <h2 className="Task-name">{name}</h2>}
      {description && <p className="Task-description">{description}</p>}

      {/* <div className="Task-date">
        <div>
          <span>Start Date: </span>
          <span className="Task-start">
            {getDateString(getDateFromMillis(startDate))}
          </span>
        </div>
        <div>
          <span>End Date: </span>
          <span className="Task-end">
            {getDateString(getDateFromMillis(endDate))}
          </span>
        </div>
      </div> */}

      <div className="Task-status-container">
        <span className={`Task-status Task-${taskStatus}`}>{taskStatus}</span>
        <button className="Task-delete" onClick={() => deleteTask(id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default Task;
