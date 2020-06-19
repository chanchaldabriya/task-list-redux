import React from "react";
import "./Sort.css";
import { connect } from "react-redux";
import {
  setSortOrder,
  setSortType,
  SortOrders,
  SortTypes,
} from "../../actions";
import useFormInput from "../../hooks/useFormInput";

const Sort = ({ dispatch }) => {
  const [sortOrder, updateSortOrder] = useFormInput(
    SortOrders.ASC
  );
  const [sortType, updateSortType] = useFormInput(
    SortTypes.ALPHABETICAL
  );

  return (
    <form className="Sort">
      <div>
        <label>Select Sort Type: </label>
        <select
          className="Sort-type"
          value={sortType}
          onChange={(e) => {
            updateSortType(e);
            dispatch(setSortType(e.target.value));
          }}
        >
          {Object.values(SortTypes).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Select Sort Order: </label>
        <select
          className="Sort-order"
          value={sortOrder}
          onChange={(e) => {
            updateSortOrder(e);
            dispatch(setSortOrder(e.target.value));
          }}
        >
          {Object.values(SortOrders).map((order) => (
            <option key={order} value={order}>
              {order}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default connect()(Sort);
