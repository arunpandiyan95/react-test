import courses from '../data/courses';
//import { removeCourse } from './actions';

let rootReducer = function(currentState = courses, action){
    //console.log('came inside the root reducer with action ')
    //console.log(action);
    switch(action.type){
        case 'REMOVE_COURSE':
                return removeCourseFromArray(action.index, currentState);
                break;
        case 'ADD_COURSE':
                
            return addCourseInArray(action.course, currentState);
                //console.log('sddsf');
            break;
        case 'SELECT_COURSE':

            return selectCourseInArray(action.event, action.course, currentState);
                

    }
    //console.log(`The current state of the application is` );
    //console.log(currentState);
    return currentState;
}

function removeCourseFromArray(index, state){
    
    return state.filter(course => course.id !== index);
}

function addCourseInArray(course, state){
    //console.log('sdfdsff');
    return [...state, course];
}

function selectCourseInArray(event, course, state){
    // console.log(event);
    // console.log(course);
    // console.log(state);
    let newState  = state.map(s=> s);

    newState[newState.indexOf(course)].selected = true

    return newState;
}

export default rootReducer;