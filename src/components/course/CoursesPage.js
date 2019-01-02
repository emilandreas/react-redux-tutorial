import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }


    redirectToAddCoursePage() {
      browserHistory.push('/course');
    }
    courseRow(course,index){
        return <div key={index}>{course.title}</div>;
    }

    render() {
        const {courses} = this.props;
        return (
        <div>
            <h1>Courses</h1>
            <input type="submit"
                   value="AddCourse"
                   className="btn btn-primary"
                   onClick={this.redirectToAddCoursePage}/>
            <CourseList courses={courses}/>
        </div>
        );
  }
}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);