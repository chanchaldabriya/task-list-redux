import { connect } from 'react-redux';
import TaskList from '../components/TaskList/TaskList';
import {
    deleteTask
} from '../actions';

const getVisibleTasks = (tasks, filter) => {
    const regExp = new RegExp(filter, "i");
    if(filter) {
        return tasks.filter(task => regExp.test(task.name));
    }
    return tasks;
}

const mapStateToProps = state => ({
    tasks: getVisibleTasks(state.tasks, state.filter)
})
  
const mapDispatchToProps = dispatch => ({
    deleteTask: id => dispatch(deleteTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);