import React from "react";
import "./Filter.css";
import { connect } from "react-redux";
import { updateFilter } from "../../actions";
import useTextInput from "../../hooks/useTextInput";

const Filter = ({ dispatch }) => {
  const [filter, setFilter, resetFilter] = useTextInput("");

  return (
    <form
      className="Filter"
    >
      <input
        type="text"
        className="Filter-input"
        value={filter}
        onChange={e => { setFilter(e); dispatch(updateFilter(e.target.value));}}
        placeholder="Search Task"
      />
    </form>
  );
};

export default connect()(Filter);
