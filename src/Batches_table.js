import React from "react"
import Navbar from "./Navbar";
import Slidebar from "./Slidebar";

export default function Batchetable() {
    return (<>
        <Navbar />
        <Slidebar />

        <div className="container mt-1 me-1">
            <h2 className="text-center mt-1 ">Batches Details</h2>
            <div class="d-flex flex-row-reverse ">
                <div class="mb-3 "><button className="btn btn-primary">
                    + Add</button></div>
            </div>
            <div className="table-responsive bg-white">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Course ID</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Class Time</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>101</td>
                            <td>2023-01-15</td>
                            <td>2023-04-15</td>
                            <td>10:00 AM - 12:00 PM</td>
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
                            <td>2023-02-01</td>
                            <td>2023-05-01</td>
                            <td>2:00 PM - 4:00 PM</td>
                            <td>
                                <button className="btn btn-warning btn-sm">Edit</button>
                            </td>
                            <td>
                                <button className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    </>)
}