import React from 'react';

class Addcourse extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return (
            <div className="row">
            <div className="col-md-6">
                <form>
                <div className="form-group">
                    <label>Course Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control" id="price" name="price" placeholder="Enter Price" />
                </div>
                <div className="form-group">
                    <label>Duration</label>
                    <input type="number" className="form-control" id="duration" name="duration" placeholder="Enter Price" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            </div>

        )
    }
}

export default Addcourse