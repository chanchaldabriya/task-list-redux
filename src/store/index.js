import { createStore } from "redux";
import rootReducer from "../reducers";
import { SortTypes, SortOrders } from "../actions";

const store = createStore(
  rootReducer,
  {
    tasks: [],
    filter: "",
    sortType: SortTypes.ALPHABETICAL,
    sortOrder: SortOrders.ASC,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
