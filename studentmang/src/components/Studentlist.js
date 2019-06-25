import React from 'react';
import {NavLink} from 'react-router-dom';


export class Studentlist extends React.Component{

    render(){

        return (
            <div>
            <table className="table table-striped table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Grade</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>

                {
                    this.props.students.map(student => <tr key={student.id}>
                        <th scope="row">{student.id}</th>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.grade}</td>
                        <td>
                            <NavLink className="btn btn-sm btn-primary" exact to="/">Details</NavLink>
                        </td>
                        </tr>)
                }
                
            </tbody>
            </table>

            <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
            <li className="page-item"><button className="page-link" >Previous</button></li>
            <li className="page-item"><button className="page-link" >1</button></li>
            <li className="page-item"><button className="page-link" >2</button></li>
            <li className="page-item"><button className="page-link" >3</button></li>
            <li className="page-item"><button className="page-link" >Next</button></li>
            </ul>
            </nav>
            </div>

        );
    }
}