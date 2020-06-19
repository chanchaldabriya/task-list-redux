import { connect } from "react-redux";
import TaskList from "../components/TaskList/TaskList";
import { deleteTask, SortTypes, SortOrders } from "../actions";

const getFilteredTasks = (tasks, filter) => {
  const regExp = new RegExp(filter, "i");
  if (filter) {
    return tasks.filter((task) => regExp.test(task.name));
  }
  return tasks;
};

const getSortedTasks = (tasks, sortType, sortOrder) => {
  return tasks.slice().sort((a, b) => {
    let first, second;
    switch (sortType) {
      case SortTypes.ALPHABETICAL:
        first = a.name.toLowerCase();
        second = b.name.toLowerCase();
        break;

      case SortTypes.START_DATE:
        first = a.startDate;
        second = b.startDate;
        break;

      case SortTypes.END_DATE:
        first = a.endDate;
        second = b.endDate;
        break;
    }
    return (
      (first === second ? 0 : first > second ? 1 : -1) *
      (sortOrder === SortOrders.ASC ? 1 : -1)
    );
  });
};

const mapStateToProps = (state) => ({
  tasks: getSortedTasks(
    getFilteredTasks(state.tasks, state.filter),
    state.sortType,
    state.sortOrder
  ),
});

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (id) => dispatch(deleteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
