import React from 'react';
import axios from 'axios';

class AddCourse extends React.Component {

    constructor(props){
        super(props);
        this.state={
            courseName:'',
            coursePrice:'',
            courseDuration:'',
            invalidCourseName:''
        };
        this.handleCourseNameChange = this.handleCourseNameChange.bind(this);
    }

    handleCourseNameChange(event){
        //console.log('came inside the coursenamehange event');
        const value = event.target.value;
        //console.log(value.length);
        this.setState({
            courseName:event.target.value
        })
        if ( value.length < 4){
            this.setState({
                invalidCourseName:'Course length should be greater than 4 and less than 8'
            })
        }else {
            this.setState({
               invalidCourseName:'' 
            })
        }

    }

    handleSubmit(event){

        event.preventDefault();

        let course={};
        course.name = event.target.courseName.value;
        course.price = event.target.coursePrice.value;
        course.duration = event.target.courseDuration.value;

        const promise = axios.post('https://my-json-server.typicode.com/arunpandiyan95/demojson/todolists', {
            method: 'POST',
            body: {todo:'task1'} 
        })
        promise.then(response => response.data)

    }
   
    render(){
        return (
            <div className="row">
                <div className="col-md-6">
                <form name="addCourse" onSubmit={(event) => this.handleSubmit(event)}>
                        <div className="form-group">
                            <label >Course Name</label>
                            <input 
                                name="courseName" 
                                type="text" 
                                value={this.state.courseName}
                                className="form-control" 
                                id="courseName" 
                                aria-describedby="courseName" 
                                placeholder="Enter Course Name"
                                onChange={(event)=> this.handleCourseNameChange(event)}/>
                        </div>
                        <div>
                            { this.state.invalidCourseName ? (<span className="alert alert-danger">{this.state.invalidCourseName}</span>)
                                                           :''
                            }
                            
                        </div>
                        <div className="form-group">
                            <label >Course Price </label>
                            <input name="coursePrice" type="text" className="form-control" id="coursePrice" placeholder="Price" />
                        </div>
                        <div className="form-group">
                            <label >Course Duration </label>
                            <input type="text" name="courseDuration" className="form-control" id="courseDuration" placeholder="Price"/>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form> 
                </div>
            </div>
        );
    }
}

export default AddCourse