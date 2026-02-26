import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const roles = [
    { title: 'Admin', desc: 'Manage platform settings', icon: '⚙️' },
    { title: 'Instructor', desc: 'Create courses and grade', icon: '👨‍🏫' },
    { title: 'Student', desc: 'Enroll and track progress', icon: '👨‍🎓' },
    { title: 'Content Creator', desc: 'Develop course materials', icon: '✍️' }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to LMS Platform</h1>
          <p>Complete Learning Management System</p>
          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">Get Started</Link>
            <Link to="/courses" className="btn btn-secondary">Browse Courses</Link>
          </div>
        </div>
      </section>

      <section className="roles">
        <h2>Who We Serve</h2>
        <div className="roles-grid">
          {roles.map((role, index) => (
            <div className="role-card" key={index}>
              <div className="role-icon">{role.icon}</div>
              <h3>{role.title}</h3>
              <p>{role.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;