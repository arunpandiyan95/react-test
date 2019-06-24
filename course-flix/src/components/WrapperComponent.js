import {connect} from 'react-redux';
import Courses from './courses';
import courseschild from './courseschild';
import {bindActionCreators} from 'redux';
import {removeCourse} from '../redux/actions';
import {changeButtonClass} from '../redux/actions';


function mapStateToProps(state){
    return {
      courses:state,
      
    }
  }

  function mapDispatchToProps(dispatch){
    return bindActionCreators({removeCourse, changeButtonClass}, dispatch)
  }
  
  export const WrapperComponent = connect(mapStateToProps, mapDispatchToProps)(Courses)
  export const WrapperComponentChild = connect(mapStateToProps)(courseschild)