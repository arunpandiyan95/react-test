import React from 'react';
import './App.css';
import Courses from './components/courses';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = { 
      "courses": [
        { 
          "id": 1,
          "course": 'React',
          "price": 1000,
          "duration":10,
          "selected": false
        },
        { 
          "id": 2,
          "course": 'Angular',
          "price": 2000,
          "duration":10,
          "selected": false
        },
        { 
          "id": 3,
          "course": 'Java 8',
          "price": 3000,
          "duration":10,
          "selected": false
        },
        { 
          "id": 4,
          "course": 'Spring',
          "price": 4000,
          "duration":20,
          "selected": false
        },
        { 
          "id": 5,
          "course": 'Hibernate',
          "price": 1000,
          "duration":10,
          "selected": false
        },
        { 
          "id": 6,
          "course": 'HTML',
          "price": 5000,
          "duration":30,
          "selected": false
        }
      ],
      "selectedcourses": []
    }

    this.changeClassName = this.changeClassName.bind(this);
  }

  changeClassName(e, course) {

    //let newCourse = course;

    //newCourse.selected = true;
    //console.log(newCourse);
    
    //let newArr = this.state.courses.filter(course =>  course.id !== newCourse.id )
    //this.state.courses[this.state.courses.indexOf(course)].selected = true;

    //newArr.push(newCourse);

    let oldArr = this.state.courses;
    oldArr[oldArr.indexOf(course)].selected = true

    let selCourseArr = this.state.selectedcourses;
    selCourseArr.push(course);

    this.setState({
      courses: oldArr,
      selectedcourses: selCourseArr
    })
    console.log(this.state.selectedcourses)
  }

  render(){
  return (
    <div>
      <Courses data={this.state.courses} handleClick={this.changeClassName} />
      <Courses data={this.state.selectedcourses} handleClick={this.changeClassName} />
    </div>
  );
  }
}

export default App;
