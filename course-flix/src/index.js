import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import {WrapperAddCourseComponent} from './components/Wrapperaddcourse';
import Coursedetails from './components/coursedetails';
import {createStore} from 'redux';
import rootReducer from './redux/reducer';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
    <div className="">
    <Provider store={store}>
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
        <Route path="/add" exact component={WrapperAddCourseComponent} />
        <Route path="/details/:id" exact render = {
            ({match}) => {
               return  (<Coursedetails courses={[]} courseId={match.params.id} />)
            }
        } />
    </BrowserRouter>
    </Provider>
    </div>, 
    document.getElementById('root'));

