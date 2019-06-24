//declare all the actions in this file..

//define action generators 
export function addCourse(course){
    return {
        type:"ADD_COURSE",
        course
    }

}

//action generators
export function removeCourse(index){
    //action is just a javascript object
    return {
        type:"REMOVE_COURSE",
        index
    }
}

//action generators
export function changeButtonClass(event, course){
    //action is just a javascript object
    return {
        type:"SELECT_COURSE",
        event:event,
        course:course
    }
}