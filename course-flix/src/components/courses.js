import React from 'react';
import {NavLink} from 'react-router-dom';


class Courses extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
    return (
        <div>
        {
         this.props.data.length > 0 ? (    
         <div className="row">
            {this.props.data.map(course => 

                <div className="col-md-3" key={course.id} >
                    <div className="card text-center">
                    <div className="card-header">
                        {course.id}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{course.course}</h5>
                        <p className="card-text">Duration : {course.duration}</p>
                        <button course={course} className={course.selected === true ? "btn btn-success" : "btn btn-primary" } onClick={(event) => {this.props.handleClick(event, course)}} >Go somewhere</button><br/><br/>
                        <NavLink to="/details/4">Details</NavLink>
                    </div>
                    <div className="card-footer text-muted">
                        Price Rs.{course.price}
                    </div>
                    </div>
                </div>                

            )}
         </div>) : <h1>There are no Courses to display</h1>
        }
        </div>

    );
    }
}

export default Courses;