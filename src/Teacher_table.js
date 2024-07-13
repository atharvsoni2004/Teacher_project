import Navbar from "./Navbar";
import Slidebar from "./Slidebar";

export default function Teachertable() {
    return (<>
        <Navbar />
        <Slidebar />
        <div className="container mt-1 me-1">
            <h2 className="text-center mt-1 ">Teacher Details</h2>
            <div class="d-flex flex-row-reverse ">
                <div class="mb-3 "><button className="btn btn-primary">
                    + Add</button></div>
            </div>
            <div className="table-responsive bg-white">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Qualification</th>
                            <th scope="col">Experience</th>
                            <th scope="col">Photo</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>John Doe</td>
                            <td>+1234567890</td>
                            <td>Male</td>
                            <td>B.Sc in Computer Science</td>
                            <td>5 yesrs</td>
                            <td>
                                <img
                                    src="photo1.jpg"
                                    alt="John Doe"
                                    className="img-thumbnail"
                                    style={{ width: 50 }}
                                />
                            </td>
                            <td>
                                <button className="btn btn-warning btn-sm">edit</button>
                            </td>
                            <td>
                                <button className="btn btn-danger btn-sm">delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jane Smith</td>
                            <td>+0987654321</td>
                            <td>Female</td>
                            <td>MBA</td>
                            <td>3 years</td>
                            <td>
                                <img
                                    src="photo2.jpg"
                                    alt="Jane Smith"
                                    className="img-thumbnail"
                                    style={{ width: 50 }}
                                />
                            </td>
                            <td>
                                <button className="btn btn-warning btn-sm">edit</button>
                            </td>
                            <td>
                                <button className="btn btn-danger btn-sm">delete</button>
                            </td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>


            </div>

        </div>

    </>)
}