import React from "react";
import "./AddTask.css";
import { connect } from "react-redux";
import { addTask } from "../../actions";
import useTextInput from "../../hooks/useTextInput";
import { getMillisFromDate, getDateFromString } from "../../common/DateUtil";

const AddTask = ({ dispatch }) => {
  const [name, setName, resetName] = useTextInput("");
  const [description, setDesc, resetDesc] = useTextInput("");
  const [startDate, setStart, resetStart] = useTextInput("");
  const [endDate, setEnd, resetEnd] = useTextInput("");

  // reset all fields
  const resetForm = () => {
    resetName();
    resetDesc();
    resetStart();
    resetEnd();
  };

  // current task validity
  const startMillis = getMillisFromDate(getDateFromString(startDate)),
        endMillis = getMillisFromDate(getDateFromString(endDate));

  const isValid = name.trim() && description.trim() && endDate && startDate && startMillis <= endMillis;

  return (
    <form
      className="AddTask"
      onSubmit={(e) => {
        e.preventDefault();
        if (!isValid) {
          return;
        }

        const newTask = {
          name,
          description,
          startDate: startMillis,
          endDate: endMillis,
        };
        dispatch(addTask(newTask));
        resetForm();
      }}
    >
      <input
        type="text"
        className="AddTask-name"
        value={name}
        onChange={setName}
        placeholder="Enter New Task Name"
      />
      <input
        type="text"
        className="AddTask-description"
        value={description}
        onChange={setDesc}
        placeholder="Enter New Task Description"
      />
      <div className="AddTask-date">
        <div>
          <label>Start Date: </label>
          <input
            type="date"
            className="AddTask-startDate"
            value={startDate}
            onChange={setStart}
          />
        </div>

        <div>
          <label>End Date: </label>
          <input
            type="date"
            className="AddTask-endDate"
            value={endDate}
            onChange={setEnd}
          />
        </div>

        <button type="submit" disabled={!isValid}>
          Add Task
        </button>
      </div>
    </form>
  );
};

export default connect()(AddTask);
