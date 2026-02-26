import React from 'react';
import './Courses.css';

const Courses = () => {
  const courses = [
    { id: 1, title: 'React', instructor: 'John', students: 1234, rating: 4.5 },
    { id: 2, title: 'JavaScript', instructor: 'Jane', students: 2345, rating: 4.8 },
    { id: 3, title: 'Python', instructor: 'Bob', students: 3456, rating: 4.6 }
  ];

  return (
    <div className="courses">
      <h1>Courses</h1>
      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h3>{course.title}</h3>
            <p>Instructor: {course.instructor}</p>
            <p>Students: {course.students}</p>
            <p>Rating: {course.rating} ⭐</p>
            <button className="btn btn-primary">Enroll</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;