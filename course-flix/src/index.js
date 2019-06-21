import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import Addcourse from './components/addcourse';
import Coursedetails from './components/coursedetails';

ReactDOM.render(
    <div className="">
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink  className="navbar-brand" exact to="/" >React</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <NavLink className="nav-link" exact to="/" >Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/add" >Add Course</NavLink>
            </li>
            
            </ul>
        </div>
        </nav>
        <Route path="/" exact component={App} />
        <Route path="/add" exact component={Addcourse} />
        <Route path="/details/:id" exact render = {
            ({match}) => {
               return  (<Coursedetails courses={[]} courseId={match.params.id} />)
            }
        } />
    </BrowserRouter>
    </div>, 
    document.getElementById('root'));

