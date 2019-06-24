import {connect} from 'react-redux';
import AddCourse from './addcourse';
import {bindActionCreators} from 'redux';
import {addCourse} from '../redux/actions';


  function mapDispatchToProps(dispatch){
    return bindActionCreators({addCourse}, dispatch)
  }
  
  export const WrapperAddCourseComponent = connect(null,mapDispatchToProps)(AddCourse)