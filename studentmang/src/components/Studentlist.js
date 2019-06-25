import React from 'react';
import {NavLink} from 'react-router-dom';


export class Studentlist extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            perpagecount: 2,
            currentindex: 1
        }      

    }

    handlePagination(pageNo)
    {
        this.setState({
            currentindex: pageNo + Number(1)
        })
        //console.log(pageNo + Number(1));
    }

    render(){
        //console.log(this.state.currentindex)
        let pagecount = Math.round(this.props.students.length / this.state.perpagecount);
        
        let pageLinks = [];
        let pageNo = 1;
        for(let i = 0; i < pagecount; i++){
        pageLinks.push(<li className="page-item" key={i}><button onClick={() => {this.handlePagination(i)}} className="page-link" >{pageNo}</button></li>);
        pageNo++;
        }

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
                    this.props.students.slice((this.state.currentindex * Number(this.state.perpagecount))- (+this.state.perpagecount), this.state.currentindex * Number(this.state.perpagecount)).map(student => <tr key={student.id}>
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

            { pageLinks }

            <li className="page-item"><button className="page-link" >Next</button></li>
            </ul>
            </nav>
            </div>

        );
    }
}