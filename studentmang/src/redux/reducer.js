import students from '../data/students';

let rootReducer = function(currentState = students, action){

    switch(action.type)
    {
        case 'ADD_STUDENT':
            return addStudent(currentState, action.student);
            break;
        default:
            return currentState;
    }
}

function addStudent(currentState, student){
    return [...currentState, student]
}

export default rootReducer;