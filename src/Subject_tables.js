import Navbar from "./Navbar";
import Slidebar from "./Slidebar";
export default function Subjecttables()
{
    return ( <>
        <Navbar />
        <Slidebar />
        <div className="container mt-1 me-1">
            <h2 className="text-center mt-1 ">Subject Details</h2>
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
                            <th scope="col">Title</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>201</td>
                            <td>Mathematics</td>
                            <td>$50</td>
                            <td>
                                <button className="btn btn-warning btn-sm">Edit</button>
                            </td>
                            <td>
                                <button className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>202</td>
                            <td>Physics</td>
                            <td>$45</td>
                            <td>
                                <button className="btn btn-warning btn-sm" type="button">
                                    Edit
                                </button>
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