import {connect} from 'react-redux';
import { toDo } from './todo_list';

const mapStateToProps = (state) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(toDo);