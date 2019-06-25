import React from 'react';

export class Addstudent extends React.Component{

    handleSubmit(event){
        event.preventDefault();

        let studentName = event.target.studentName.value;
        let studentGrade = event.target.studentGrade.value;
        
        let student ={
            id: Math.floor((Math.random() * 10) + 100),
            name: studentName,
            grade: studentGrade,
            selected: false
        }

        event.target.studentName.value = '';
        event.target.studentGrade.value = '';

        this.props.addStudent(student);
        //this.props.history.push ('/');
    }

    render(){

        return (
            <div className="row">
                <div className="col-md-6">
                <form name="addStudent" onSubmit={(event) => {this.handleSubmit(event)}} >
                        <div className="form-group">
                            <label >Student Name</label>
                            <input 
                                name="studentName" 
                                type="text" 
                                className="form-control" 
                                id="studentName" 
                                aria-describedby="studentName" 
                                placeholder="Enter Student Name"
                            />
                        </div>
                        <div className="form-group">
                            <div className="form-group">
                              <label>Student Grade</label>
                              <select className="form-control" name="studentGrade" id="studentGrade">
                                <option value="S">S</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="c">C</option>
                              </select>
                            </div>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form> 
                </div>
            </div>
        );
    }
}