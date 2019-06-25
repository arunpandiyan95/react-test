import React from 'react';
import {WrapperStudentListComponent} from './WrapperStudentListComponent';
import {WrapperAddStudentComponent} from './WrapperStudentListComponent';

export class Body extends React.Component{

    render(){

        return (
            <div>
            <h2>Student List</h2>
            <WrapperStudentListComponent />
            <WrapperAddStudentComponent />
            </div>
        );
    }
}