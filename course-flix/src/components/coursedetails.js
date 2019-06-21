import React from 'react';

class Coursedetails extends React.Component{

    constructor(props){
        super(props);

    }

    render() {
        return (
            <div>
                <h1>Details: {this.props.courseId}</h1>
            </div>
        );
    }

}

export default Coursedetails