import React from "react";
import { Link } from "react-router-dom";

export default function Slidebar() {
  return (
    <>
      {/* Sidebar Start */}
      <div className="sidebar pe-4 pb-3">
        <nav className="navbar bg-light navbar-light">
          <Link to="/" className="navbar-brand mx-4 mb-3"> {/* Changed line 8 */}
            <h3 className="text-primary">
              <i className="fa fa-hashtag me-2" />
              DASHMIN
            </h3>
          </Link>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <img
                className="rounded-circle"
                src="dashmin-1.0.0/img/user.jpg"
                alt=""
                style={{ width: 40, height: 40 }}
              />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Jhon Doe</h6>
              <span>Admin</span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <Link to="/" className="nav-item nav-link active"> {/* Changed line 24 */}
              <i className="fa fa-tachometer-alt me-2" />
              Dashboard
            </Link>
            <div className="nav-item dropdown">
              <Link to="/Course_table" className="nav-link"> {/* Changed line 29 */}
                <i className="fa fa-laptop me-2" />
                Courses
              </Link>
            </div>
            <div className="nav-item dropdown">
              <Link to="/Batches_table" className="nav-link"> {/* Changed line 34 */}
                <i className="fa fa-laptop me-2" />
                Batches
              </Link>
            </div>
            <div className="nav-item dropdown">
              <Link to="/Subject_tables" className="nav-link"> {/* Changed line 39 */}
                <i className="fa fa-laptop me-2" />
                Subjects
              </Link>
            </div>
            <div className="nav-item dropdown">
              <Link to="/Teacher_tables" className="nav-link"> {/* Changed line 44 */}
                <i className="fa fa-laptop me-2" />
                Teachers
              </Link>
            </div>
            <div className="nav-item dropdown">
              <Link to="/Lecture_table" className="nav-link"> {/* Changed line 49 */}
                <i className="fa fa-laptop me-2" />
                Lectures
              </Link>
            </div>
            <Link to="/chart.html" className="nav-item nav-link"> {/* Changed line 53 */}
              <i className="fa fa-chart-bar me-2" />
              Payouts
            </Link>
            <Link to="/SignIn" className="nav-item nav-link"> {/* Changed line 57 */}
              <i className="fa fa-chart-bar me-2" />
              Sign In
            </Link>
            <Link to="/SignUp" className="nav-item nav-link"> {/* Changed line 61 */}
              <i className="fa fa-chart-bar me-2" />
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
      {/* Sidebar End */}
    </>
  );
}
