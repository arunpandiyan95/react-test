import React from 'react';
import {WrapperStudentListComponent} from './WrapperStudentListComponent';
import {WrapperAddStudentComponent} from './WrapperStudentListComponent';

export class Body extends React.Component{

    constructor(props)
    {
        super(props);
    }

    render(){
        //console.log(this)
        if(this.props.match.url === '/')
        {
            return (
                <div>
                <h2>Student List</h2>
                <WrapperStudentListComponent />
                </div>
            );
        }
        else if(this.props.match.url === '/add')
        {
            return (
                <div>
                <h2>Student List</h2>
                <WrapperAddStudentComponent />
                </div>
            );
        }
        
    }
}