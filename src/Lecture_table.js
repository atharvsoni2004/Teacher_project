import React from "react"
import Navbar from "./Navbar";
import Slidebar from "./Slidebar";
import { Link } from "react-router-dom";

export default function Lecturetable() {
    return (<>
        <Navbar />
        <Slidebar />
        <div className="container mt-1 me-1">
            <h2 className="text-center mt-1 ">Lecture Details</h2>
            <div class="d-flex flex-row-reverse ">
                <div class="mb-3 ">
                <Link to='/Add_Lectures'>
                <button className="btn btn-primary">
                + Add</button>
                </Link>
               </div>
            </div>
            <div className="table-responsive bg-white">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Teacher ID</th>
                            <th scope="col">Subject ID</th>
                            <th scope="col">Batch ID</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Lecture date</th>
                            <th scope="col">Payout ID</th>
                            <th scope="col" colSpan={2} className="text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>101</td>
                            <td>301</td>
                            <td>201</td>
                            <td>2 hours</td>
                            <td>$100</td>
                            <td>2024-07-01</td>
                            <td>P1001</td>
                            <td>
                                <button className="btn btn-warning btn-sm">Edit</button>
                            </td>
                            <td>
                                <button className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>102</td>
                            <td>302</td>
                            <td>202</td>
                            <td>1.5 hours</td>
                            <td>$75</td>
                            <td>2024-07-02</td>
                            <td>P1002</td>
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
    </>)
}