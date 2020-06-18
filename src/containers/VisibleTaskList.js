import { connect } from 'react-redux';
import TaskList from '../components/TaskList/TaskList';
import {
    deleteTask
} from '../actions';

const mapStateToProps = state => ({
    tasks: state.tasks
})
  
const mapDispatchToProps = dispatch => ({
    deleteTask: id => dispatch(deleteTask(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);