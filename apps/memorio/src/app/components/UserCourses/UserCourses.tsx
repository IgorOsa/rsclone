import React from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
import './user-courses.scss';

export default function UserCourses(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="user-courses">
      <h2 className="user-info__title">My courses:</h2>
      <div className="card-group">
        <a href="#" className="card" style={{ maxWidth: "300px" }}>
          <img src="..." className="card-img-top" alt="course-name" style={{ height: "150px", background: "#f78410" }} />
          <div className="card-body">
            <h5 className="card-title">User_Course</h5>
            <p className="card-text">Description of the course.</p>
            <p className="card-text"><small className="text-muted">User_progress</small></p>
          </div>
        </a>
      </div>
      <a href="#" className="btn btn-primary user-courses__all">All courses</a>
    </div>
  );
}
