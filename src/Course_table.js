import React from "react"
import Navbar from "./Navbar"
import Slidebar from "./Slidebar"
import { Link } from "react-router-dom"
export default function Coursetable() {
    return (
        <>
            <Navbar />
            <Slidebar/>
            <div className="container mt-1 me-1">
                <h2 className="text-center mt-1 ">Course Details</h2>
                <div class="d-flex flex-row-reverse ">

                    <div class="mb-3 "><Link to='/Add_Courses'><button className="btn btn-primary">
                    + Add</button></Link></div>
                </div>
                <div className="table-responsive bg-white" >
                    <table className="table table-bordered table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col" >ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Fees</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Description</th>
                                <th scope="col" colSpan={2} className="text-center">
                                Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Course 1</td>
                                <td>$500</td>
                                <td>3 months</td>
                                <td>This is a sample description for Course 1.</td>
                                <td>
                                    <button className="btn btn-warning btn-sm">Edit</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Course 2</td>
                                <td>$700</td>
                                <td>4 months</td>
                                <td>This is a sample description for Course 2.</td>
                                <td>
                                    <button className="btn btn-warning btn-sm">Edit</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}