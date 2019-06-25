import {connect} from 'react-redux';
import {Studentlist} from './Studentlist';
import {bindActionCreators} from 'redux';
import {addStudent} from '../redux/actions';
import { Addstudent } from './Addstudent';

function mapStateToProps(state){
    return {
        students: state
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({addStudent}, dispatch)
}

export const WrapperStudentListComponent = connect(mapStateToProps)(Studentlist);
export const WrapperAddStudentComponent = connect(null, mapDispatchToProps)(Addstudent);