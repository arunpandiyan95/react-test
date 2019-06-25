import React from 'react';
import {NavLink} from 'react-router-dom';


export class Leftnavi extends React.Component{

    render(){

        return (
            <div className="nav flex-column"  aria-orientation="vertical">
            <NavLink className="nav-link"  exact to="/"  >List Student</NavLink>
            <NavLink className="nav-link"  exact to="/add" >Add Student</NavLink>
            </div>
        );
    }
}