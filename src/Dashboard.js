import React from "react"
import Navbar from "./Navbar";
import Slidebar from "./Slidebar";
export default function Dashboard()
    {
        return(<>
        <Navbar/>
        <Slidebar/>
            <div className="container mt-5">
  <div className="row">
    <div className="col-12">
      <h1 className="text-center">Welcome , <span className="text-primary"># DASHMIN</span></h1>
    </div>
    <div className="row ms-5 mt-2 pe-3">
      <div className="col-md-2">
        <div className="card  text-white bg-primary shadow">
          <div className="card-header">
            <p className="text-light">Total Courses</p>
          </div>
          <div className="card-body">
            <h5 className="card-title text-light">25</h5>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card text-white bg-primary shadow">
          <div className="card-header">
            <p className="text-light">Total Subjects</p>
          </div>
          <div className="card-body">
            <h5 className="card-title text-light">9</h5>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card text-white bg-primary shadow">
          <div className="card-header ">
            <p className="text-light">Total Faculties</p>
          </div>
          <div className="card-body">
            <h5 className="card-title text-light">10</h5>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card text-white bg-primary shadow">
          <div className="card-header">
            <p className="text-light">Total Subjects</p>
          </div>
          <div className="card-body">
            <h5 className="card-title text-light">9</h5>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card text-white bg-primary shadow">
          <div className="card-header">
            <p className="text-light">Total feedback</p>
          </div>
          <div className="card-body">
            <h5 className="card-title text-light">19</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>)
    }