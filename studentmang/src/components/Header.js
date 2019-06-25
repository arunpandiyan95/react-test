import React from 'react';
import {NavLink} from 'react-router-dom';


export class Header extends React.Component{

    render(){

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="row" style={{width: 100+'%'}}>
                <div className="col-lg-10">
                <NavLink  className="navbar-brand" exact to="/" >Student Management</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div className="col-lg-2 ">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link " exact to="/" >Login</NavLink>
                    </li>
                    
                    </ul>
                </div>
                </div>
                </div>
            </nav>
        );
    }
}